// components/Tools/AssessmentConsentForm.tsx
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const COMPANY_SIZE_OPTIONS = [
  'Under 10 people',
  '10-30 people',
  '30-50 people',
  '50-80 people',
  'Over 80 people'
];

const AssessmentConsentForm = () => {
  const [isCookieSet, setIsCookieSet] = useState<boolean>(false);
  const [initialCheckDone, setInitialCheckDone] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    company_size: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const getCookie = (name: string): string | undefined => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) {
        return parts.pop()?.split(';').shift();
      }
    };

    const chasnzCookie = getCookie('user-email');
    if (chasnzCookie) {
      setIsCookieSet(true);
    }
    setInitialCheckDone(true);
  }, []);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!formData.firstName || !formData.lastName || !formData.company || !formData.company_size) {
      setError('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to HubSpot
      const response = await fetch('/api/submit-assessment-consent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          context: {
            pageUri: window.location.href,
            pageName: document.title,
            hutk: document.cookie.split('hubspotutk=')[1]?.split(';')[0],
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Set cookies
      document.cookie = `user-email=${encodeURIComponent(formData.email)}; path=/; max-age=31536000`;
      setIsCookieSet(true);
      
      // Reload the page after a short delay
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      setError('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  if (!initialCheckDone) {
    return null;
  }

  if (isCookieSet) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[9999]">
      <div className="consent-form w-full overflow-hidden md:w-3/5 lg:w-[800px] bg-white h-auto md:h-[600px] rounded-lg flex flex-col md:flex-row">
        <div className="form-image w-full md:w-2/5 object-cover h-full">
          <Image 
            src="/common/form-image.jpg" 
            alt="resource image" 
            width={600} 
            height={600} 
            className="h-[160px] md:h-full w-full object-[50%,30%] object-cover" 
          />
        </div>
        <div className="form-content w-full md:w-3/5 p-8 flex flex-col gap-4">
          <h4 className="text-2xl font-semibold">
            Please provide your details to access the assessment
          </h4>
          <p className="text-sm font-light">
            You will only need to fill out this form one time or until you clear your browser cookie data
          </p>
          
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="First Name*"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Last Name*"
                  required
                />
              </div>
            </div>
            
            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email Address*"
                required
              />
            </div>

            <div>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Company Name*"
                required
              />
            </div>

            <div>
              <select
                id="company_size"
                name="company_size"
                value={formData.company_size}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                required
              >
                <option value="">Company Size*</option>
                {COMPANY_SIZE_OPTIONS.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
            
            {error && (
              <p className="mt-1 text-sm text-red-600">
                {error}
              </p>
            )}
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 text-sm px-4 rounded-full text-white font-medium
                ${isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-[--primary-colour]'
                }
              `}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AssessmentConsentForm;