import type { Metadata } from "next";
// adding this gtag 
import Script from 'next/script'
// adding this gtag

import "./globals.scss";
import { Providers } from "@/redux/provider";


export const metadata: Metadata = {
  title: "CGB Solutions",
  description: "Empower your business with CGB Solutions' IT expertise. Strategic consulting & managed services for peak performance. Contact us.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* staring here gtag */}
      <head>

<Script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-NYNVJH0DG6"
/>

<Script id="google-analytics">
  {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', ${'${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}'});
  `}
</Script>
</head>
      {/* End here gtag */}

      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
