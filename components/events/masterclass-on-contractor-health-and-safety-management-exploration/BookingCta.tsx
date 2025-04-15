import React from 'react'

const BookingCta = () => {
  return (
    <div className="book-now-button fixed bottom-0 left-0 right-0 w-full py-4 bg-[#1C242E] px-4 z-[999]">
    <div className='flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center'>
      <p className='text-white text-sm md:text-lg font-semibold'>Register for the event before spaces run out!</p>
      <button className='text-sm py-3 px-6 bg-[--primary-colour] text-white rounded-full self-center lg:self-start font-semibold'>Register Now</button>
    </div>
  </div>
  )
}

export default BookingCta