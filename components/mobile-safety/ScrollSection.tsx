'use client'

import Image from 'next/image';
import AnimatedText from '../ui/AnimateText';
import { motion } from 'framer-motion'

const Services = () => {
    const serviceContent = [
        {
            image: '/mobile-safety/compentent-workers.jpg',
            icon: '/mobile-safety/icons/group.svg',
            title: 'Form a group of competent workers',
            description: 'Construction work sites present a range of hazards outside of plant operation and so it is important for work area controllers to consider minimum safety standards for competency to access a construction work site.'
        },
        {
            image: '/mobile-safety/measure.jpg',
            icon: '/mobile-safety/icons/agree.svg',
            title: 'Agree on a standard to measure',
            description: 'The group should collectively decide the hazards and appropriate control measures that every worker must know, and demonstrate, to be safe in this job.'
        },
        {
            image: '/mobile-safety/develop-and-deliver.jpg',
            icon: '/mobile-safety/icons/develop.svg',
            title: 'Develop and deliver materials to train workers',
            description: 'Work area controllers should have the ability to access both industry and company standards when considering minimum competency standards.'
        },
        {
            image: '/mobile-safety/train.jpg',
            icon: '/mobile-safety/icons/measure.svg',
            title: 'Measure worker knowledge as a minimum standard',
            description: 'As a minimum, it is recommended that each trained operator should be assessed to measure their understanding gained through training.'
        },
        {
            image: '/mobile-safety/measure-worker-application.jpg',
            icon: '/mobile-safety/icons/application.svg',
            title: 'Measure worker application of skill to exceed a standard',
            description: 'Once an operator has demonstrated the minimum required knowledge of the standard by succeeding in a knowledge assessment, they should then demonstrate evidence that they are applying that knowledge at work.'
        }
    ];

    return (
        <div className='bg-black py-24 lg:py-32 relative'>
            <div className="max-w-6xl mx-auto px-4">
                {/* Desktop View */}
                <div className="hidden md:flex md:flex-col gap-72">
                    
                    {serviceContent.map((content, index) => (
                        <div key={index} className="relative flex flex-row items-center gap-10 z-10">
                            <div className="w-2/5 flex flex-col gap-6">
                                <motion.div 
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true, amount: 1 }}
                                    transition={{ 
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20 
                                    }}
                                    className="h-24 w-24 bg-[--primary-colour] rounded-lg flex items-center justify-center"
                                >
                                    <Image 
                                        src={content.icon}
                                        alt={content.title}
                                        width={64}
                                        height={64}
                                        className="w-16 h-16"
                                    />
                                </motion.div>
                                <AnimatedText>
                                    <h4 className='text-white text-4xl font-semibold'>{content.title}</h4>
                                </AnimatedText>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 1 }}
                                    transition={{ duration: 0.4, delay: 0.6 }}
                                    className='text-white text-base md:text-lg font-base'
                                >
                                    {content.description}
                                </motion.p>
                            </div>
                            <motion.div 
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 1 }} // Requires 70% of element to be visible
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="w-3/5"
                            >
                                <Image 
                                    src={content.image} 
                                    alt={content.title} 
                                    className="w-full rounded-lg" 
                                    width={1200} 
                                    height={1200}
                                    priority={true}
                                />
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Mobile View */}
                <section className='mobile-services-layout visible md:invisible flex gap-16 flex-col md:hidden'>
                    <div className="content-block flex flex-col gap-8">
                            <Image src="/mobile-safety/compentent-workers.jpg" alt="yes" className='w-full rounded-lg template-service-image' width="1200" height="1200"></Image>
                        <div className="content-text flex flex-col gap-4">
                            <motion.div 
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true, amount: 1 }}
                                    transition={{ 
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20 
                                    }}
                                    className="h-16 w-16 bg-[--primary-colour] rounded-lg flex items-center justify-center"
                                >
                                    <Image 
                                        src="/mobile-safety/icons/group.svg"
                                        alt="Info icon"
                                        width={24}
                                        height={24}
                                        className="w-8 h-8"
                                    />
                                </motion.div>
                            <AnimatedText><h4 className='text-white text-2xl font-semibold'>Form a group of competent workers</h4></AnimatedText>
                            <p className='text-white text-base'>Construction work sites present a range of hazards outside of plant operation and so it is important for work area controllers to consider minimum safety standards for competency to access a construction work site.</p>
                        </div>
                    </div>
                    <div className="content-block flex flex-col gap-8">
                            <Image src="/mobile-safety/measure.jpg" alt="yes" className='w-full rounded-lg template-service-image' width="1200" height="1200"></Image>
                        <div className="content-text flex flex-col gap-4">
                            <motion.div 
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true, amount: 1 }}
                                    transition={{ 
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20 
                                    }}
                                    className="h-16 w-16 bg-[--primary-colour] rounded-lg flex items-center justify-center"
                                >
                                    <Image 
                                        src="/mobile-safety/icons/agree.svg"
                                        alt="Info icon"
                                        width={24}
                                        height={24}
                                        className="w-8 h-8"
                                    />
                                </motion.div>
                            <AnimatedText><h4 className='text-white text-2xl font-semibold'>Agree on a standard to measure</h4></AnimatedText>
                            <p className='text-white text-base'>The group should collectively decide the hazards and appropriate control measures that every worker must know, and demonstrate, to be safe in this job.</p>
                        </div>
                    </div>
                    <div className="content-block flex flex-col gap-8">
                            <Image src="/mobile-safety/develop-and-deliver.jpg" alt="yes" className='w-full rounded-lg template-service-image' width="1200" height="1200"></Image>
                        <div className="content-text flex flex-col gap-4">
                            <motion.div 
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true, amount: 1 }}
                                    transition={{ 
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20 
                                    }}
                                    className="h-16 w-16 bg-[--primary-colour] rounded-lg flex items-center justify-center"
                                >
                                    <Image 
                                        src="/mobile-safety/icons/develop.svg"
                                        alt="Info icon"
                                        width={24}
                                        height={24}
                                        className="w-8 h-8"
                                    />
                                </motion.div>
                            <AnimatedText><h4 className='text-white text-2xl font-semibold'>Develop and deliver materials to train workers</h4></AnimatedText>
                            <p className='text-white text-base'>Work area controllers should have the ability to access both industry and company standards when considering minimum competency standards.</p>
                        </div>
                    </div>
                    <div className="content-block flex flex-col gap-8">
                            <Image src="/mobile-safety/train.jpg" alt="yes" className='w-full rounded-lg template-service-image' width="1200" height="1200"></Image>
                        <div className="content-text flex flex-col gap-4">
                            <motion.div 
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true, amount: 1 }}
                                    transition={{ 
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20 
                                    }}
                                    className="h-16 w-16 bg-[--primary-colour] rounded-lg flex items-center justify-center"
                                >
                                    <Image 
                                        src="/mobile-safety/icons/measure.svg"
                                        alt="Info icon"
                                        width={24}
                                        height={24}
                                        className="w-8 h-8"
                                    />
                                </motion.div>
                            <AnimatedText><h4 className='text-white text-2xl font-semibold'>Measure worker knowledge as a minimum standard</h4></AnimatedText>
                            <p className='text-white text-base'>As a minimum, it is recommended that each trained operator should be assessed to measure their understanding gained through training.</p>
                        </div>
                    </div>
                    <div className="content-block flex flex-col gap-8">
                            <Image src="/mobile-safety/measure-worker-application.jpg" alt="yes" className='w-full rounded-lg template-service-image' width="1200" height="1200"></Image>
                        <div className="content-text flex flex-col gap-4">
                            <motion.div 
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true, amount: 1 }}
                                    transition={{ 
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20 
                                    }}
                                    className="h-16 w-16 bg-[--primary-colour] rounded-lg flex items-center justify-center"
                                >
                                    <Image 
                                        src="/mobile-safety/icons/application.svg"
                                        alt="Info icon"
                                        width={24}
                                        height={24}
                                        className="w-8 h-8"
                                    />
                                </motion.div>
                            <AnimatedText><h4 className='text-white text-2xl font-semibold'>Measure worker application of skill to exceed a standard</h4></AnimatedText>
                            <p className='text-white text-base'>Once an operator has demonstrated the minimum required knowledge of the standard by succeeding in a knowledge assessment, they should then demonstrate evidence that they are applying that knowledge at work.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Services;