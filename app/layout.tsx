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
  title: "CHASNZ - World Class Constuction Health and Safety",
  description: "Our Vision is to shift health and safety in the construction industry from inconsistent compliance to consistent competence, and to have healthy and safe workers as a natural outcome of good work."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <Script strategy="afterInteractive">
        {`
        (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:5063657,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>

      <Script>
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
        <Script>
          {`
          <iframe src=https://www.googletagmanager.com/ns.html?id=GTM-KJKG2QM
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `}
        </Script>
        <GoogleAnalytics />
        <NextTopLoader color="#7ABC25" showSpinner={false}/>
        <Newsletter />
        <Navigation />
        <MobileNav />
        {children}
        <Footer />
        <Script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js.hsforms.net/forms/v2.js"
          ></Script>
          <Script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/40083784.js"></Script>
        </body>
    </html>
  );
}

{/* <Script
          id="hs-forms-loader"
          strategy="afterInteractive"
          src="//js.hsforms.net/forms/v2.js"
        />
        <Script
          id="hs-scripts-loader"
          strategy="afterInteractive"
          src="//js.hs-scripts.com/40083784.js"
        /> */}