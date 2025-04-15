import React from 'react'

const Schedule = () => {
  return (
    <div className="py-16 lg:py-32 bg-[--dark-blue]">
        <div className="site-wrapper">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-4 w-full md:w-4/6 mx-auto text-center">
                    <h2 className='text-3xl md:text-4xl font-bold text-white !leading-tight'>Event Schedule</h2>
                </div>
                <div className="w-full max-w-3xl mx-auto relative">
                    {/* Timeline line */}
                    <div className="absolute left-3 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[--primary-colour] to-[--primary-colour]/50 hidden md:block"></div>
                    
                    <div className="space-y-4 md:space-y-6">
                        {/* Timeline Items */}
                        <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-lg p-4 md:pl-12 transition-all duration-300 relative md:ml-7">
                            {/* Timeline dot */}
                            <div className="hidden md:flex absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[--primary-colour] shadow-md shadow-[--primary-colour]/30"></div>
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4">
                                <span className="text-[--primary-colour] font-mono font-bold text-base tracking-tight whitespace-nowrap">09:00 AM</span>
                                <h3 className="text-white text-base font-medium">Attendees Arrive to Venue</h3>
                            </div>
                        </div>

                        <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-lg p-4 md:pl-12 transition-all duration-300 relative md:ml-7">
                            <div className="hidden md:flex absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[--primary-colour] shadow-md shadow-[--primary-colour]/30"></div>
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4">
                                <span className="text-[--primary-colour] font-mono font-bold text-base tracking-tight whitespace-nowrap">09:20 AM</span>
                                <h3 className="text-white text-base font-medium">Introduction – <span className="text-white/80">Jon Harper-Slade (CHASNZ)</span></h3>
                            </div>
                        </div>

                        <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-lg p-4 md:pl-12 transition-all duration-300 relative md:ml-7">
                            <div className="hidden md:flex absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[--primary-colour] shadow-md shadow-[--primary-colour]/30"></div>
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4">
                                <span className="text-[--primary-colour] font-mono font-bold text-base tracking-tight whitespace-nowrap">09:30 - 10:30</span>
                                <h3 className="text-white text-base font-medium">Presentation – <span className="text-white/80">Sue Bottrell (Lawyer from Australia)</span></h3>
                            </div>
                        </div>

                        <div className="group bg-gradient-to-r from-[--primary-colour]/20 to-white/5 backdrop-blur-sm rounded-lg p-4 md:pl-12 transition-all duration-300 relative md:ml-7">
                            <div className="hidden md:flex absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[--primary-colour] shadow-md shadow-[--primary-colour]/30"></div>
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4">
                                <span className="text-[--primary-colour] font-mono font-bold text-base tracking-tight whitespace-nowrap">10:30 AM</span>
                                <h3 className="text-white text-base font-medium">Morning Tea <span className="ml-2 inline-block px-2 py-0.5 bg-white/10 text-white/80 text-xs rounded-full">Refreshments</span></h3>
                            </div>
                        </div>

                        <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-lg p-4 md:pl-12 transition-all duration-300 relative md:ml-7">
                            <div className="hidden md:flex absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[--primary-colour] shadow-md shadow-[--primary-colour]/30"></div>
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4">
                                <span className="text-[--primary-colour] font-mono font-bold text-base tracking-tight whitespace-nowrap">11:00 - 11:45</span>
                                <h3 className="text-white text-base font-medium">Client Case Study – <span className="text-white/80">New Zealand Defence Force</span></h3>
                            </div>
                        </div>

                        <div className="group bg-gradient-to-r from-[--primary-colour]/20 to-white/5 backdrop-blur-sm rounded-lg p-4 md:pl-12 transition-all duration-300 relative md:ml-7">
                            <div className="hidden md:flex absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[--primary-colour] shadow-md shadow-[--primary-colour]/30"></div>
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4">
                                <span className="text-[--primary-colour] font-mono font-bold text-base tracking-tight whitespace-nowrap">12:00 - 13:00</span>
                                <h3 className="text-white text-base font-medium">Lunch <span className="ml-2 inline-block px-2 py-0.5 bg-white/10 text-white/80 text-xs rounded-full">Provided</span></h3>
                            </div>
                        </div>

                        <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-lg p-4 md:pl-12 transition-all duration-300 relative md:ml-7">
                            <div className="hidden md:flex absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[--primary-colour] shadow-md shadow-[--primary-colour]/30"></div>
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4">
                                <span className="text-[--primary-colour] font-mono font-bold text-base tracking-tight whitespace-nowrap">13:00 - 15:00</span>
                                <h3 className="text-white text-base font-medium">Client Case Study – <span className="text-white/80">New Zealand Transport Agency and Fulton Hogan</span></h3>
                            </div>
                        </div>

                        <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-lg p-4 md:pl-12 transition-all duration-300 relative md:ml-7">
                            <div className="hidden md:flex absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[--primary-colour] shadow-md shadow-[--primary-colour]/30"></div>
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4">
                                <span className="text-[--primary-colour] font-mono font-bold text-base tracking-tight whitespace-nowrap">15:00 PM</span>
                                <h3 className="text-white text-base font-medium">Q&As <span className="ml-2 inline-block px-2 py-0.5 bg-white/10 text-white/80 text-xs rounded-full">Interactive</span></h3>
                            </div>
                        </div>

                        <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-lg p-4 md:pl-12 transition-all duration-300 relative md:ml-7">
                            <div className="hidden md:flex absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[--primary-colour] shadow-md shadow-[--primary-colour]/30"></div>
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4">
                                <span className="text-[--primary-colour] font-mono font-bold text-base tracking-tight whitespace-nowrap">15:30 PM</span>
                                <h3 className="text-white text-base font-medium">Close</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Schedule