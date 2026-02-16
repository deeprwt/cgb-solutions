import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import RedirectToUAE from "@/hooks/use-to-redirect";
// adding this gtag
import Script from "next/script";

import "./globals.scss";
import { Providers } from "@/redux/provider";
import { FacebookPixelEvents } from "@/components/facebookpixelevents/FacebookPixelEvents";

export const metadata: Metadata = {
  title: "CGB Solutions",
  description:
    "Empower your business with CGB Solutions IT expertise. Strategic consulting & managed services for peak performance. Contact us.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Add Google site verification meta tag */}
        <meta
          name="google-site-verification"
          content="4nlvg0U5S4kHckdXeKJ3ZZ9PmDNPvdYS1WnLsglM6fo"
        />
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TJK837LH');
          `}
        </Script>
        {/* End Google Tag Manager */}
        {/* Apollo Website Tracker */}
        <Script id="apollo-tracker" strategy="afterInteractive">
          {`
    function initApollo() {
      var n = Math.random().toString(36).substring(7);
      var o = document.createElement("script");
      o.src = "https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=" + n;
      o.async = true;
      o.defer = true;
      o.onload = function () {
        if (window.trackingFunctions) {
          window.trackingFunctions.onLoad({
            appId: "699077d6a92ffe00154b2a68"
          });
        }
      };
      document.head.appendChild(o);
    }
    initApollo();
  `}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TJK837LH"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}

        <Providers>{children}</Providers>
        {/* <RedirectToUAE /> */}
        {/* Include the redirection logic here */}
        {/* <FacebookPixelEvents /> */}
      </body>
      {/* staring here gtag */}
      <GoogleAnalytics gaId="G-VXNJZJ6WFN" />
      {/* End here gtag */}
    </html>
  );
}
