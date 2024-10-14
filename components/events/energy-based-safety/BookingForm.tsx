'use client'

import React, { useState, useEffect } from 'react';
import { IoClose } from "react-icons/io5";
import Image from 'next/image';
import { IoIosMail } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";

interface BookingFormProps {
  isVisible: boolean;
  onClose: () => void;
}

declare global {
  interface Window {
    hbspt: any;
  }
}

const BookingForm: React.FC<BookingFormProps> = ({ isVisible, onClose }) => {
  const [selectedLocation, setSelectedLocation] = useState<string>('Auckland');
  const [hutk, setHutk] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    company: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [calendarLinks, setCalendarLinks] = useState<{
    ics: string;
    google: string;
    outlook: string;
  } | null>(null);

  // Mapping of locations to their dates and HubSpot form IDs
  const locationInfo: { [key: string]: { date: string; formId: string } } = {
    Christchurch: { date: '4th November, 2024', formId: '936591b5-ab3a-4c34-87aa-beadcc4469b2' },
    Auckland: { date: '6th November, 2024', formId: '215f61c2-f265-40f3-b642-165e15101b80' },
    Wellington: { date: '7th November, 2024', formId: '96d6110b-1174-4484-b7b1-e07a1f481509' },
  };

  useEffect(() => {
    const cookies = document.cookie.split(';');
    const hutkCookie = cookies.find(cookie => cookie.trim().startsWith('hubspotutk='));
    if (hutkCookie) {
      setHutk(hutkCookie.split('=')[1]);
    }
  }, []);

  if (!isVisible) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
  };

  const generateCalendarLinks = (location: string, dateString: string) => {
    // Parse the date string
    const [day, month, year] = dateString.split(' ');
    const monthNumber = new Date(Date.parse(month + " 1, " + year)).getMonth() + 1;
    const dayNumber = parseInt(day.replace('th', '').replace('st', '').replace('nd', '').replace('rd', ''));

    // Create Date objects for start and end times
    const startDate = new Date(parseInt(year), monthNumber - 1, dayNumber, 8, 30);
    const endDate = new Date(parseInt(year), monthNumber - 1, dayNumber, 12, 0);

    // Format dates for ICS file
    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const eventTitle = `Energy Based Safety Workshop - ${location}`;
    const eventDescription = `Energy Based Safety Workshop in ${location}`;

    // Generate ICS content
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${formatDate(startDate)}
DTEND:${formatDate(endDate)}
SUMMARY:${eventTitle}
DESCRIPTION:${eventDescription}
LOCATION:${location}
END:VEVENT
END:VCALENDAR`;

    // Create Blob and URL for ICS file
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const icsUrl = URL.createObjectURL(blob);

    // Generate Google Calendar link
    const googleUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${formatDate(startDate)}/${formatDate(endDate)}&details=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(location)}`;

    // Generate Outlook Web link
    const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(eventTitle)}&startdt=${startDate.toISOString()}&enddt=${endDate.toISOString()}&body=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(location)}`;

    return {
      ics: icsUrl,
      google: googleUrl,
      outlook: outlookUrl,
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    const formID = locationInfo[selectedLocation].formId;

    try {
      const response = await fetch('/api/submit-to-hubspot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formId: formID,
          fields: {
            ...formData,
            location: selectedLocation,
          },
          context: {
            hutk: hutk,
            pageUri: window.location.href,
            pageName: document.title,
          },
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        console.log('Form submitted successfully');

        // Generate calendar links
        const links = generateCalendarLinks(selectedLocation, locationInfo[selectedLocation].date);
        setCalendarLinks(links);

        //reset form
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          company: '',
        });

        // Close form after 10 seconds (increased from 3 to give users more time to add to calendar)
        // setTimeout(() => {
        //   onClose();
        // }, 10000);
      } else {
        const errorData = await response.json();
        console.error('Error submitting form:', errorData);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <div className="workshop-booking-form fixed w-full top-0 right-0 bottom-0 left-0 bg-black/70 z-[9999] flex justify-center items-end md:items-center overflow-scroll">
      <div className="form-container overflow-scroll w-full md:w-4/5 xl:w-2/4 z-50 bg-white rounded-xl p-4 md:p-8 lg:p-10 mx-auto relative">
        <button onClick={onClose} className="close-button absolute top-4 right-4"><IoClose className='text-2xl'/></button>

        <div className='object-cover w-full rounded-md overflow-hidden mt-8 lg:mt-0'>
          <Image src="/events/energy-safety/form-header.jpg" alt="Header Image" className='w-full' width={800} height={300} />
        </div>

        <div className='flex flex-col gap-4 mt-6'>
          <h6 className='text-lg md:text-2xl font-semibold'>Welcome to the Energy Based Safety registration form</h6>
          <p className='text-sm md:text-base'>Please fill out your information below to confirm your spot in our upcoming November workshops</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6" data-hubspot-form="ignore">
          <h2 className="text-sm text-gray-500 font-light mt-6">Select which location you would like to attend:</h2>

          <div className="location-selector grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {Object.entries(locationInfo).map(([location, info]) => (
              <label 
                key={location}
                className={`p-2 border rounded-lg cursor-pointer w-full ${selectedLocation === location ? 'border-green-500 border-2' : 'border-gray-300'}`} 
                onClick={() => handleLocationChange(location)}
              >
                <input type="radio" name="location" value={location} className="hidden" checked={selectedLocation === location} readOnly />
                <div className='flex flex-row gap-3'>
                  <Image src={`/events/energy-safety/${location.toLowerCase()}.jpg`} alt={location} width={200} height={200} className="rounded-lg h-12 w-12 object-cover" />
                  <div className='flex flex-col justify-center'>
                    <p className="text-base font-semibold">{location}</p>
                    <p className="text-xs text-gray-500 font-light">{info.date}</p>
                  </div>
                </div>
              </label>
            ))}
          </div>

          <div className="mt-8 flex flex-col md:flex-row gap-6">
            <div className='w-full'>
              <label htmlFor="firstname" className="block text-gray-700 font-base text-sm">First Name</label>
              <input type="text" id="firstname" name="firstname" placeholder='Please enter your first name' value={formData.firstname} onChange={handleChange} required className="mt-1 p-2 w-full border-gray-300 border rounded-md" />
            </div>
            <div className='w-full'>
              <label htmlFor="lastname" className="block text-gray-700 font-base text-sm">Last Name</label>
              <input type="text" id="lastname" name="lastname" placeholder='Please enter your last name' value={formData.lastname} onChange={handleChange} required className="mt-1 p-2 w-full border-gray-300 border rounded-md" />
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row gap-6">
            <div className='w-full'>
              <label htmlFor="email" className="block text-gray-700 font-base text-sm">Email</label>
              <input type="email" id="email" name="email" placeholder='Please enter your email' value={formData.email} onChange={handleChange} required className="mt-1 p-2 w-full border-gray-300 border rounded-md" />
            </div>
            <div className='w-full'>
              <label htmlFor="company" className="block text-gray-700 font-base text-sm">Company Name</label>
              <input type="text" id="company" name="company" placeholder='Please enter your company name' value={formData.company} onChange={handleChange} required className="mt-1 p-2 w-full border-gray-300 border rounded-md" />
            </div>
          </div>

          {submitStatus !== 'success' && (
          <div className="submission-summary mt-10">
            <div className=''>
              <h6 className='text-base font-medium'>Registration Summary:</h6>
              <div className="flex flex-row gap-4 mt-4 justify-between flex-wrap">
                <div>
                  <span className='text-sm font-light text-gray-500'>Location:</span>
                  <p className='text-base'>{selectedLocation}</p>
                </div>
                <div>
                  <span className='text-sm font-light text-gray-500'>Date:</span>
                  <p className='text-base'>{locationInfo[selectedLocation].date}</p>
                </div>
                <div>
                  <span className='text-sm font-light text-gray-500'>Time:</span>
                  <p className='text-base'>8.30am - 12:30pm</p>
                </div>
                <button 
                  type="submit" 
                  className="bg-green-500 text-white py-3 px-8 rounded-lg text-sm font-medium"
                  disabled={submitStatus === 'submitting'}
                >
                  {submitStatus === 'submitting' ? 'Submitting...' : 'Register Now'}
                </button>
              </div>
            </div>
          </div>
        )}

          {submitStatus === 'success' && (
            <div className="mt-4 text-[--primary-colour] text-sm text-center w-full rounded-md py-3">
              <p className='py-3 text-center text-green-800 text-sm bg-green-100 border border-green-400 rounded-md flex flex-row justify-center items-center gap-1'><IoIosCheckmarkCircle className='text-xl' /> Thank you for your registration! Your spot has now been secured</p>
              {calendarLinks && (
                <div className="mt-4">
                  <p className="font-light text-sm text-black">Add event to your calendar:</p>
                  <div className="flex flex-wrap gap-2 mt-2 justify-center">
                    <a
                      href={calendarLinks.ics}
                      download="Energy-Based-Safety-Workshop.ics"
                      className="bg-white border text-black py-2 px-4 rounded-md text-sm font-medium flex flex-row items-center gap-1"
                    >
                      <IoIosMail className='text-2xl'/>Use system calendar
                    </a>
                    <a
                      href={calendarLinks.google}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white border text-black py-2 px-4 rounded-md text-sm font-medium flex flex-row items-center gap-2"
                    >
                      <span><Image src="/events/energy-safety/google.svg" alt="Add to Outlook" width={20} height={20} /></span>Add to Google Calendar
                    </a>
                    <a
                      href={calendarLinks.outlook} target="_blank" rel="noopener noreferrer" className="bg-white border text-black py-2 px-4 rounded-md text-sm font-medium flex flex-row items-center gap-2">
                      <span><Image src="/events/energy-safety/outlook.svg" alt="Add to Outlook" width={20} height={20} /></span>Add to Outlook
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}
          {submitStatus === 'error' && (
            <p className="mt-4 text-red-500 text-sm text-center w-full rounded-md py-3">Error submitting form. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default BookingForm;