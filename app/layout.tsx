import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import "./styles/programmes.scss";
import NextTopLoader from 'nextjs-toploader';
import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import MobileNav from "@/components/common/MobileNav";
import Newsletter from "@/components/common/Newsletter";
import Script from "next/script";
import GoogleAnalytics from "@/components/common/GoogleAnalytics";

const poppins = Poppins({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: "CHASNZ - World Class Construction Health and Safety",
  description: "Our Vision is to shift health and safety in the construction industry from inconsistent compliance to consistent competence, and to have healthy and safe workers as a natural outcome of good work.",
  keywords: [
    "construction safety",
    "health and safety",
    "workplace safety",
    "CHASNZ",
    "New Zealand construction",
    "safety compliance",
    "worker health",
    "construction industry",
    "safety standards",
    "occupational health"
  ],
  openGraph: {
    title: "CHASNZ - World Class Construction Health and Safety",
    description: "Shifting health and safety in construction from inconsistent compliance to consistent competence.",
    url: "https://www.chasnz.org", // Replace with your actual URL
    siteName: "CHASNZ",
    images: [
      {
        url: "https://www.chasnz.org/social/chasnz.png", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "CHASNZ Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CHASNZ - World Class Construction Health and Safety",
    description: "Shifting health and safety in construction from inconsistent compliance to consistent competence.",
    images: ["https://www.chasnz.org/social/chasnz.png"], // Replace with your actual image URL
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script strategy="beforeInteractive">
          {`
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:5094245,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>

        <Script strategy="afterInteractive" id="gtm-script">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KJKG2QM');
          `}
        </Script>
      </head>
      <body className={poppins.className}>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-KJKG2QM"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <GoogleAnalytics />
        <NextTopLoader color="#7ABC25" showSpinner={false}/>
        <Newsletter />
        <Navigation />
        <MobileNav />
        {children}
        <Footer />
        <Script
          type="text/javascript"
          id="hs-forms-script"
          async
          defer
          src="//js.hsforms.net/forms/v2.js"
        />
        <Script 
          type="text/javascript" 
          id="hs-script-loader" 
          async 
          defer 
          src="//js.hs-scripts.com/40083784.js"
        />
      </body>
    </html>
  );
}