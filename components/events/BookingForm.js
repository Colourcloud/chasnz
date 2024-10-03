'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function HubSpotForm() {
  const [formData, setFormData] = useState({
    firstname: '',
    email: '',
  });
  const [hubspotUtk, setHubspotUtk] = useState('');
  const pathname = usePathname();

  // Replace with your actual embedded form ID
  const formId = '985e9b8c-7857-4d8e-96f3-4c72aca6bf7d';

  useEffect(() => {
    // Function to get the hubspotutk cookie
    const getHubSpotCookie = () => {
      const cookies = document.cookie.split(';');
      const hubspotCookie = cookies.find(cookie => cookie.trim().startsWith('hubspotutk='));
      return hubspotCookie ? hubspotCookie.split('=')[1] : '';
    };

    setHubspotUtk(getHubSpotCookie());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submit-to-hubspot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formId,
          fields: formData,
          hutk: hubspotUtk,
          path: pathname,
        }),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({ firstname: '', email: '' });
      } else {
        const errorData = await response.json();
        alert(`Error submitting form: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="firstname" className="block mb-2 font-bold text-gray-700">First Name</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-bold text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
}