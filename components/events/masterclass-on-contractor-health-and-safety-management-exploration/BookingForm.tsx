'use client'

import React, { useState, useEffect } from 'react';
import { IoClose } from "react-icons/io5";
import Image from 'next/image';
import { IoIosMail } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";

interface BookingFormProps {
  onClose: () => void;
}

declare global {
  interface Window {
    hbspt: any;
  }
}

const BookingForm: React.FC<BookingFormProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
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
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const eventDate = '15th May, 2025';

  useEffect(() => {
    const cookies = document.cookie.split(';');
    const hutkCookie = cookies.find(cookie => cookie.trim().startsWith('hubspotutk='));
    if (hutkCookie) {
      setHutk(hutkCookie.split('=')[1]);
    }

    // Add click event listener for Register Now buttons
    const handleRegisterClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if the clicked element or its parent is a register button
      const registerButton = target.closest('button');
      if (registerButton?.innerText.includes('Register Now')) {
        setIsVisible(true);
      }
    };

    // Add the event listener
    document.addEventListener('click', handleRegisterClick);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleRegisterClick);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  if (!isVisible) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const generateCalendarLinks = (dateString: string) => {
    const [day, month, year] = dateString.split(' ');
    const monthNumber = new Date(Date.parse(month + " 1, " + year)).getMonth() + 1;
    const dayNumber = parseInt(day.replace('th', '').replace('st', '').replace('nd', '').replace('rd', ''));

    const startDate = new Date(parseInt(year), monthNumber - 1, dayNumber, 9, 0);
    const endDate = new Date(parseInt(year), monthNumber - 1, dayNumber, 15, 30);

    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const eventTitle = `Masterclass on Contractor Health and Safety Management Exploration`;
    const eventDescription = `Masterclass on Contractor Health and Safety Management Exploration Event`;
    const location = 'Auckland';

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

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const icsUrl = URL.createObjectURL(blob);

    const googleUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${formatDate(startDate)}/${formatDate(endDate)}&details=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(location)}`;

    const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(eventTitle)}&startdt=${startDate.toISOString()}&enddt=${endDate.toISOString()}&body=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(location)}`;

    return {
      ics: icsUrl,
      google: googleUrl,
      outlook: outlookUrl,
    };
  };

  const handleSubmitClick = (e: React.FormEvent) => {
    e.preventDefault();
    // Show confirmation modal instead of submitting directly
    setShowConfirmModal(true);
  };

  const handleCancelBooking = () => {
    setShowConfirmModal(false);
  };

  const handleConfirmBooking = async () => {
    setShowConfirmModal(false);
    setSubmitStatus('submitting');

    try {
      const response = await fetch('/api/masterclass-on-contractor-health-and-safety', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            ...formData
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

        const links = generateCalendarLinks(eventDate);
        setCalendarLinks(links);

        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          company: '',
        });
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
        <button onClick={handleClose} className="close-button absolute top-4 right-4"><IoClose className='text-2xl'/></button>

        <div className='object-cover w-full rounded-md overflow-hidden mt-8 lg:mt-0'>
          <Image src="/events/masterclass-on-contractor-health/header-image.jpg" alt="Header Image" className='w-full' width={800} height={300} />
        </div>

        <div className='flex flex-col gap-4 mt-6'>
          <h6 className='text-lg md:text-2xl font-semibold'>Masterclass on Contractor Health and Safety Management Exploration Registration</h6>
          <p className='text-sm md:text-base'>Please fill out your information below to confirm your spot in our upcoming event</p>
        </div>

        <form onSubmit={handleSubmitClick} className="mt-6" data-hubspot-form="ignore">
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
                    <p className='text-base'>SOHO Hotel, Auckland</p>
                  </div>
                  <div>
                    <span className='text-sm font-light text-gray-500'>Date:</span>
                    <p className='text-base'>{eventDate}</p>
                  </div>
                  <div>
                    <span className='text-sm font-light text-gray-500'>Time:</span>
                    <p className='text-base'>9:00am - 3:30pm</p>
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
              <p className='py-3 text-center text-green-800 text-sm bg-green-100 border border-green-400 rounded-md flex flex-row justify-center items-center gap-1'>
                <IoIosCheckmarkCircle className='text-xl' /> Thank you for your registration! Your spot has now been secured
              </p>
              {calendarLinks && (
                <div className="mt-4">
                  <p className="font-light text-sm text-black">Add event to your calendar:</p>
                  <div className="flex flex-wrap gap-2 mt-2 justify-center">
                    <a
                      href={calendarLinks.ics}
                      download="Communication-Culture-Masterclass.ics"
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
                      <span><Image src="/events/energy-safety/google.svg" alt="Add to Google Calendar" width={20} height={20} /></span>Add to Google Calendar
                    </a>
                    <a
                      href={calendarLinks.outlook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white border text-black py-2 px-4 rounded-md text-sm font-medium flex flex-row items-center gap-2"
                    >
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

        {/* Confirmation Modal */}
        {showConfirmModal && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[10000] p-4">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <h3 className="text-lg font-medium mb-4">Confirm Registration</h3>
              <p className="mb-6 text-base font-light">Please only register to this event if you are committed to attending. Are you sure you want to register for this event on {eventDate}?</p>
              <div className="flex flex-row gap-3 justify-end">
                <button 
                  onClick={handleCancelBooking}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleConfirmBooking}
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingForm; 