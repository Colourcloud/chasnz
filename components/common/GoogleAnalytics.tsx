// components/GoogleAnalytics.js
import Script from 'next/script';

const GoogleAnalytics = () => (
  <>
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-WS1PKBWM0F"></Script>
    <Script id="google-analytics">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-WS1PKBWM0F');
      `}
    </Script>
  </>
);

export default GoogleAnalytics;