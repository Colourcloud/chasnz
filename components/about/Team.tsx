'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"

type TeamMember = {
    id: number;
    name: string;
    position: string;
    representing: string;
    bio: string;
    imageUrl: string;
};

const Team = () => {
    const [boardMembers, setBoardMembers] = useState<TeamMember[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://cms.chasnz.org/wp-json/wp/v2/team-member?orderby=date&order=asc&per_page=20', {
                    next: { revalidate: 3600 }
                });
                const data = await response.json();
                const fetchImageUrls = data.map(async (member: any) => {
                    const imageUrlResponse = await fetch(`https://cms.chasnz.org/wp-json/wp/v2/media/${member.acf.image}`, {
                        next: { revalidate: 3600 }
                    });
                    const imageData = await imageUrlResponse.json();
                    return {
                        id: member.id,
                        name: member.acf.name,
                        position: member.acf.position,
                        representing: member.acf.representing,
                        bio: member.acf.bio,
                        imageUrl: imageData.source_url
                    };
                });
                Promise.all(fetchImageUrls).then(setBoardMembers);
            } catch (error) {
                setError('Failed to fetch board members.');
                console.error('Error fetching board members:', error);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>Error loading board members: {error}</div>;
    }

    return (
        <section className='pb-20 lg:pb-40' id="team-members">
            <div className="content-wrapper">
                <div className="board-members flex flex-col gap-4">
                    <h4 className='text-3xl lg:text-5xl text-[--primary-colour] font-semibold'>Meet the Team</h4>
                    <p className='text-xl font-medium text-[--text-colour]'>Below is a list of team members at Chasnz</p>
                </div>
                <div className="board-member-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {boardMembers.map((member) => (
                        <div key={member.id} className="member-card flex flex-col gap-4">
                            <div className="member-image relative aspect-[4/3]">
                                <Image src={member.imageUrl} alt={member.name} width={500} height={500} priority className='object-fit h-full' />
                                <div className='dropdown-toggle transition absolute bottom-4 right-5'>
                                    <Drawer>
                                        <DrawerTrigger><Image src="/about/dropdown-icon.svg" alt='' width={40} height={40} /></DrawerTrigger>
                                        <DrawerContent className='max-h-[900px]'>
                                            <div className="content-wrapper py-10 lg:py-20 overflow-y: scroll;">
                                                <div className="drawer-content flex flex-col lg:flex-row gap-10 overflow-auto">
                                                    <div className="drawer-image w-full lg:w-2/4">
                                                        <Image src={member.imageUrl} className='w-full' alt={member.name} width={700} height={700} priority />
                                                    </div>
                                                    <div className="drawer-text w-full lg:w-2/4 flex flex-col gap-6">
                                                        <div className='flex flex-col gap-1'>
                                                            <h6 className='text-2xl font-medium'>{member.name}</h6>
                                                            <p className='text-lg'>{member.position}</p>
                                                            <p className='text-lg'>{member.representing}</p>
                                                        </div>
                                                        <div className='bio-content flex flex-col gap-4' dangerouslySetInnerHTML={{ __html: member.bio }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </DrawerContent>
                                    </Drawer>
                                </div>
                            </div>
                            <div className="member-bio">
                                <h6 className='text-xl font-medium'>{member.name}</h6>
                                <p className='text-base'>{member.position}</p>
                                <p className='text-base'>{member.representing}</p>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
