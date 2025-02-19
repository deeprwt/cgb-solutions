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
          content="fBBPFxWRPec7_HGzyMQf4QHLqalNQO_NJUmDbK23SM4"
        />
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T7HR7Q29');
          `}
        </Script>
        {/* End Google Tag Manager */}
        
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T7HR7Q29"
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
      <GoogleAnalytics gaId="G-NYNVJH0DG6" />
      {/* End here gtag */}
    </html>
  );
}
