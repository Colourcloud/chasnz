'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import Testform from '@/components/common/Testform'

const Resources = () => {
  return (
    <section className="energy-wheel-resources pb-20 lg:pb-32" id="resources">
        <div className="content-wrapper">
            <div className="resource-wrapper">
                <h4 className='text-2xl font-semibold text-[--text-colour]'>Please be sure to check out and download the below content/assets we&apos;ve developed for your workplace to support your health and safety needs. We look forward to hearing your feedback on our Energy Based Safety tool.</h4>
                <div className="resource-grid-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20">
                    <div className="grid-item flex flex-col gap-4">
                        <Image src="/energy-wheel/explainer-video.jpg" className='w-full aspect-[4/3]' alt='' width={400} height={250} />
                        <div className="grid-item-content flex flex-row justify-between items-center">
                            <h6 className='font-semibold text-lg text-[--text-colour]'>Explainer Video</h6>
                            <Link href="https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/click?encryptedPayload=AVxigLLX1Umq0qDRVuLpKP1EIDSQc%2BqrStsfjD0d%2BccBBxa9xQB6yE%2B8IzqZRxZ6aYOgkj2AGqbockpIbtvSL03OiNZmTAWMUGM4znNj3Z429j4bihvHALHjIKCeSbATjAy2lpz4FeWflYGOVlszfflSdExDC0flkBJwfMBZKhHJHjVvPct2t5l2e7Pxq4t2ifA%3D&portalId=40083784" target="_blank" className='resource-button'>Download</Link>
                        </div>
                    </div>

                    <div className="grid-item flex flex-col gap-4">
                        <Image src="/energy-wheel/hazard-board.jpg" className='w-full aspect-[4/3]' alt='' width={400} height={250} />
                        <div className="grid-item-content flex flex-row justify-between items-center">
                            <h6 className='font-semibold text-lg text-[--text-colour]'>Hazard Board Sticker</h6>
                            <Link href="https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/click?encryptedPayload=AVxigLJ14AYGgKCLJsEwphASOa%2FbnCDYe7vjMrPZrVpDG9z6871TlW1X0f8fj%2Bh78ZsFkKcOAjXexAmvqKnhgOJrQ2fKv7KE8Il%2B6Sxq4nD2JyQksCLS7ed1vkW5oRNLFu0ECc3Kpz2PHsQAA%2F2nNuXvuvFF8Ye8624dcc8F%2BIDfJD4UvE542C5UCNJnyEmYD%2BUIbDBfQQqEeBoVfhkDav8AtFq%2FDpr1NCFPl3Ij9woPYcLncJXgAduEZoxGzg%3D%3D&portalId=40083784" target='_blank' className='resource-button'>Download</Link>
                        </div>
                    </div>

                    <div className="grid-item flex flex-col gap-4">
                        <Image src="/energy-wheel/hard-hat.jpg" className='w-full aspect-[4/3]' alt='' width={400} height={250} />
                        <div className="grid-item-content flex flex-row justify-between items-center">
                            <h6 className='font-semibold text-lg text-[--text-colour]'>Hard Hat Sticker</h6>
                            <Link href="https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/click?encryptedPayload=AVxigLIub4I77v0uKww%2B%2Fh%2BAOLUeGT1lCTIHQRJctZARxatGsj9B6ErYb2YbvBp4%2FqNu76nTsEWrcQOZDE8A5LM%2BTbMFpgvbEp9eaWVfy9iUGLGK8uUqakoffvRLlX0oOPuelOxSzyVfJuSnsOJYnfnFGc8rNAiMPNigxj7jbozrcghRp6pUsCOePkgiroFKZhWOcGi6VtjlJcbr7sMsqoENBZeUwZU2%2F%2B8Jtj41%2BUT6gxg91vQeVFqtA60%3D&portalId=40083784" target='_blank' className='resource-button'>Download</Link>
                        </div>
                    </div>

                    <div className="grid-item flex flex-col gap-4">
                        <Image src="/energy-wheel/pocket-guide.jpg" className='w-full aspect-[4/3]' alt='' width={400} height={250} />
                        <div className="grid-item-content flex flex-row justify-between items-center">
                            <h6 className='font-semibold text-lg text-[--text-colour]'>Pocket Guide</h6>
                            <Link href="https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/click?encryptedPayload=AVxigLIDnfRdr6Mh9DXAZRpa%2FJPSxlakSrEkMsyaRqKEKxm905llyA9m1KWWVxywjETZd2G7fyTvyLnN%2BlHLVxGjdbLZ%2FPWTKisNHnq9J5WdEGPqmTbNjoRDXG0viJjecR6ZqPphxTqKN3vB7Xb6eABLYndPCAnCuN5KHnJRnIxPKChnHLjzS3rVf%2BkdobciWPoaDOGg6cI9j2LOXys%2Fqq1AxmG8MHztSfZurvh9kV0StyX4ZIrn0u%2BguOc%3D&portalId=40083784" target='_blank' className='resource-button'>Download</Link>
                        </div>
                    </div>

                    <div className="grid-item flex flex-col gap-4">
                        <Image src="/energy-wheel/toolbox.jpg" className='w-full aspect-[4/3]' alt='' width={400} height={250} />
                        <div className="grid-item-content flex flex-row justify-between items-center">
                            <h6 className='font-semibold text-lg text-[--text-colour]'>Toolbox Talks</h6>
                            <Link href="https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/click?encryptedPayload=AVxigLK4Nu3zw80jUrUSZKlcgcKyo6EEdPqI9vgaOhCImPiztJWpr9O%2BSYIm03RCGHRiLtE2a1%2FJZUbdWTws05JD6xxFX1TwkxAllkuq44MT2Hx%2Fr16t165UWi%2By%2F3nLaNf2tgkIIPju%2By8nfGoS190%2BxWED1Zu7rUyLUdSw6uiVqq4dlJyKZe3y8qxGCwkXR8X2c0g76tVrVrDhhnify%2Bkn95FrzHsp7QVRgcPrxytb8QM1A0Sw&portalId=40083784" target="_blank" className='resource-button'>Download</Link>
                        </div>
                    </div>

                    <div className="grid-item flex flex-col gap-4">
                        <Image src="/energy-wheel/science.jpg" className='w-full aspect-[4/3]' alt='' width={400} height={250} />
                        <div className="grid-item-content flex flex-row justify-between items-center">
                            <h6 className='font-semibold text-lg text-[--text-colour]'>Article</h6>
                            <Link href="https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/click?encryptedPayload=AVxigLJKH9k7%2BObhR8phhHxJ1Q5Qks5tNVas7DjEVFYM2zr29zPAO%2B%2FGWGzR%2FAvMXEU3JYnxVzejGokAI0DYZ88FsHGemzY4j74M6Ts1MKbUzkLdJx2%2FahoeYdu3gtsvKeKyu%2Fh2dh8P56ughelcgTbR1dgQxR9vfsXQaf5GXKrclvIX%2B%2F0fABIRGnDbuxRrb2oocKj1xGFdZRaLX%2FIfvFPgLSYvBveqBh6TkA4%3D&portalId=40083784" target='_blank' className='resource-button'>Download</Link>
                        </div>
                    </div>

                    <div className="grid-item flex flex-col gap-4">
                        <Image src="/energy-wheel/site-guide.jpg" className='w-full aspect-[4/3]' alt='' width={400} height={250} />
                        <div className="grid-item-content flex flex-row justify-between items-center">
                            <h6 className='font-semibold text-lg text-[--text-colour]'>Site Guide</h6>
                            <Link href="https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/click?encryptedPayload=AVxigLLoiRG5rQHY0W3ti%2B2PzFGayxkZ2E0Vvq4f6Und%2B7fjKYpomam8HgSa5CfuXlj10szotmtbsHInjHexKndHSL5xbQfc9x8xsuoraqm315T0NOPmBnn8Bb3QbPkS%2FeeospDUmE6%2BTTX3VMGwUTNW%2BZ4V1EG9KPap%2FBsqv%2F1dUoKLDIwKjm%2Fm66G%2FXb506SjkzJvVwcKhDjyO1Bwz4AUCK2iwl4n3VDwffOr0sLMclI459rCM%2Bnu08f%2FXPBwHj0E%3D&portalId=40083784" target='_blank' className='resource-button'>Download</Link>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </section>
  )
}

export default Resources