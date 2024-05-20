import React from 'react'
import Link from 'next/link'
import HubSpotForm from '@/components/common/HubspotForm'

const Survey = () => {
  return (
    <section className="leadership-tool pb-20 lg:pb-32" id="survey">
        <div className="content-wrapper">
            <div className='border-b-2 border-[--primary-colour]'>
                <div className="section-text w-full md:w-4/5 flex flex-col gap-6 py-8">
                    <h2 className='text-4xl lg:text-5xl text-[--primary-colour] font-semibold'>Confidential Safety Climate Survey</h2>
                    <p className='text-base lg:text-xl'>This is a free tool where you can understand your company or site&apos;s safety climate and focus on actions that reduce the risk for future accidents.</p>
                </div>
            </div>
            
            <div className="section-form mt-12 flex flex-col md:flex-row justify-start gap-16">
                <div className="section-text flex flex-col gap-6 w-full md:w-3/5">
                    <p>The CHASNZ climate survey tool is based on a body of research primarily conducted in 2019 (Probst et al., 2019) and available in the Journal of Safety Research. It focused on eight safety climate factors:</p>
                    <ul className='flex flex-col gap-3 text-lg'>
                        <li>1. Demonstrating management commitment</li>
                        <li>2. Aligning and integrating safety as a value</li>
                        <li>3. Ensuring accountability at all levels</li>
                        <li>4. Improving site safety leadership</li>
                        <li>5. Empowering and involving workers</li>
                        <li>6. Improving communication</li>
                        <li>7. Training at all levels</li>
                        <li>8. Encouraging owner/client involvement</li>
                    </ul>
                    <p>There is strong agreement in academic literature that safety climate is  directly linked to employee perceptions of management commitment to  health and safety (Beus et al, 2010), therefore the tool has been  modified to account for this and to ensure it is suitable for New Zealand Construction industry use, in particular small businesses that  make up our sector.</p>
                    <p className='text-2xl font-semibold'>How to use the tool</p>
                    <p>The tool may be used at a business wide, site or team level and is free. In using this tool you agree that CHASNZ can use your date for research purposes, however all results are anonymous.</p>
                    <p>The organiser registers the business and their own details. A randomly generated link will be sent to the organiser who then must share this link with the participants. At the end of the nominated survey period a report will be sent directly to the organiser. Results of the survey should be discussed with the participant group and plans agreed around where actions need to be taken.</p>
                    <p>Your report will detail your company&apos;s overall safety climate maturity and identify strengths and areas for potential growth. It also benchmarks your anonymised data against other companies.</p>
                    <p className='text-xl font-semibold'>For feedback or questions on the tool please get in touch at <Link href="/contact/" className='text-medium text-[--primary-colour]'>contact us</Link></p>
                </div>
                <div className='w-full md:w-2/5 sticky top-4 self-start'>
                    <HubSpotForm portalId="40083784" formId="551c9e91-c335-4585-a522-7cd51b99787b" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Survey