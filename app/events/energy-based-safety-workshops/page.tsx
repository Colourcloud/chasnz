'use client'


import React, { useEffect, useState } from 'react';
import Navigation from '@/components/common/Navigation';
import Header from '@/components/events/energy-based-safety/Header';
import Introduction from '@/components/events/energy-based-safety/Introduction';
import Facilitated from '@/components/events/energy-based-safety/Facilitated';
import Subscribe from '@/components/common/Subscribe';
import BookingForm from '@/components/events/energy-based-safety/BookingForm';

interface Workshop {
  id: number;
  slug: string;
  title: { rendered: string };
  acf: {
    seats_remaining: number;
    workshop_date: string; // New ACF field for the workshop date
  };
}

const page = () => {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);

  // Fetch the workshop data from the API
  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const response = await fetch('https://cms.chasnz.org/wp-json/wp/v2/workshop');
        const data: Workshop[] = await response.json();
        setWorkshops(data);
      } catch (error) {
        console.error('Error fetching workshop data:', error);
      }
    };
    fetchWorkshops();
  }, []);

  // Function to find seats remaining for a specific location
  const getSeatsRemaining = (slug: string) => {
    const workshop = workshops.find(w => w.slug === slug);
    return workshop ? workshop.acf.seats_remaining : 'XX';
  };
  
  // Function to get formatted date for a specific location
  const formatDate = (dateString: string) => {
    if (!dateString) return 'Date TBA';
    
    const year = parseInt(dateString.substring(0, 4));
    const month = parseInt(dateString.substring(4, 6)) - 1; // JS months are 0-indexed
    const day = parseInt(dateString.substring(6, 8));
    
    const date = new Date(year, month, day);
    
    return date.toLocaleDateString('en-NZ', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  const getFormattedDate = (slug: string) => {
    const workshop = workshops.find(w => w.slug === slug);
    return workshop ? formatDate(workshop.acf.workshop_date) : 'Date TBA';
  };

  // Function to open the booking form
  const handleRegisterClick = (workshopSlug: string) => {
    const workshop = workshops.find(w => w.slug === workshopSlug);
    setSelectedWorkshop(workshop || null);
    setIsFormVisible(true);
  };


  return (
    <>
      <Navigation />
      <BookingForm
        isVisible={isFormVisible}
        onClose={() => setIsFormVisible(false)}
      />
      <Header />
      <div className="book-now-button fixed bottom-0 left-0 right-0 w-full py-4 bg-[#1C242E] px-4 z-[999]">
        <div className='flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center'>
          <p className='text-white text-sm md:text-lg font-semibold'>Register for the workshops before spaces run out!</p>
          <button className='book-event-button resource-button transition-all duration-200 hover:bg-[#56D54F] !self-center' onClick={() => handleRegisterClick('some-workshop')}>Register Now</button>
        </div>
      </div>
      <Introduction />
      <div className="py-16 lg:py-24 bg-[--dark-blue]">
        <div className="site-wrapper">
          <div className="flex flex-col gap-8 justify-center items-center">
            <div className="w-full md:w-4/5 text-center flex flex-col gap-6">
              <h4 className='text-3xl md:text-4xl lg:text-5xl font-semibold !leading-tight text-white'>
                We have 3 hour <span className='text-[--primary-colour]'>FREE</span> workshops being held in <span className='text-[--primary-colour]'>Auckland,</span> <span className='text-[--primary-colour]'>Wellington</span> and <span className='text-[--primary-colour]'>Christchurch.</span>
              </h4>
              <p className='text-white text-lg md:text-xl'>
                Take advantage of this opportunity and book in now for a workshop in your chosen location. Remember there is no fee to attend. Light refreshments will be provided.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-8 md:mt-16 max-w-7xl mx-auto">


              {/* Christchurch Workshop */}
              <div className="grid-card rounded-lg bg-black overflow-hidden relative h-96" id="christchurch-card">
                <div className="absolute top-0 right-0 bg-[--primary-colour] flex flex-col justify-center items-center py-2 px-8 rounded-bl-lg">
                  <p className='text-white text-lg font-semibold'>
                    <span>{getSeatsRemaining('energy-safety-christchurch')}</span>/100
                  </p>
                  <span className='text-white text-xs'>Spots left</span>
                </div>
                <div className="absolute bottom-0 w-full bg-black/75 flex flex-col gap-5 text-left p-5 justify-between min-h-[210px]">
                  <div className='flex flex-col'>
                    <h5 className='text-2xl text-white font-semibold'>Christchurch</h5>
                    <p className='text-sm text-white'>Russley Golf Club and Function Centre, 428 Memorial Avenue</p>
                  </div>
                  <div className='flex flex-col items-start'>
                    <h6 className='text-lg text-white font-semibold'>{getFormattedDate('energy-safety-christchurch')}</h6>
                    <p className='text-sm text-white'>8.30am to 12pm</p>
                    <button className='book-event-button text-[--primary-colour] font-semibold mt-3' id="christchurch-button" onClick={() => handleRegisterClick('energy-safety-christchurch')}>Register Now</button>
                  </div>
                </div>
              </div>
              
              {/* Auckland Workshop */}
              <div className="grid-card rounded-lg overflow-hidden relative h-96" id="auckland-card">
                <div className="absolute top-0 right-0 bg-[--primary-colour] flex flex-col justify-center items-center py-2 px-8 rounded-bl-lg">
                  <p className='text-white text-lg font-semibold'>
                    <span>{getSeatsRemaining('energy-safety-auckland')}</span>/100
                  </p>
                  <span className='text-white text-xs'>Spots left</span>
                </div>
                <div className="absolute bottom-0 w-full bg-black/75 flex flex-col gap-5 text-left p-5 justify-between min-h-[210px]">
                  <div className='flex flex-col'>
                    <h5 className='text-2xl text-white font-semibold'>Auckland</h5>
                    <p className='text-sm text-white'>Royal Oaks Bowls, 146 Selwyn Street, Onehunga</p>
                  </div>
                  <div className='flex flex-col items-start'>
                    <h6 className='text-lg text-white font-semibold'>{getFormattedDate('energy-safety-auckland')}</h6>
                    <p className='text-sm text-white'>8.30am to 12pm</p>
                    <button className='book-event-button text-[--primary-colour] font-semibold mt-3' id="auckland-button" onClick={() => handleRegisterClick('energy-safety-auckland')}>Register Now</button>
                  </div>
                </div>
              </div>

              {/* Wellington Workshop */}
              <div className="grid-card rounded-lg bg-black overflow-hidden relative h-96" id="wellington-card">
                <div className="absolute top-0 right-0 bg-[--primary-colour] flex flex-col justify-center items-center py-2 px-8 rounded-bl-lg">
                  <p className='text-white text-lg font-semibold'>
                    <span>{getSeatsRemaining('energy-safety-wellington')}</span>/100
                  </p>
                  <span className='text-white text-xs'>Spots left</span>
                </div>
                <div className="absolute bottom-0 w-full bg-black/75 flex flex-col gap-5 text-left p-5 justify-between min-h-[210px]">
                  <div className='flex flex-col'>
                    <h5 className='text-2xl text-white font-semibold'>Wellington</h5>
                    <p className='text-sm text-white'>Boulcott&apos;s Farm Heritage Golf Club. 33 Military Road. Boulcott.</p>
                  </div>
                  <div className='flex flex-col items-start'>
                    <h6 className='text-lg text-white font-semibold'>{getFormattedDate('energy-safety-wellington')}</h6>
                    <p className='text-sm text-white'>8.30am to 12pm</p>
                    <button className='book-event-button text-[--primary-colour] font-semibold mt-3' id="wellington-button" onClick={() => handleRegisterClick('energy-safety-wellington')}>Register Now</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Facilitated />
      <div className="pb-12 lg:pb-32">
        <div className="site-wrapper">
          <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto text-left md:text-center">
            <h6 className='text-2xl md:text-4xl lg:text-5xl font-semibold !leading-tight'>A big thank you and credit goes to our good friend <span className='text-[--primary-colour]'>Dr Matt Hallowell</span></h6>
            <p className='text-base md:text-lg'>who led the research and wrote the paper that this presentation is based on. Dr Hallowell heads up the Construction Safety Research Association based out of the University of Colorado in the USA and continues to ensure good, practical research is done to improve the safety of the work we do:</p>
            <span className='text-sm'>Hallowell, Matthew R. “The Energy Wheel: The Art & Science of Energy-Based Hazard Recognition.” Prof. Safety 66 &#40;2021&#41;: 27-33.</span>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
};

export default page;
