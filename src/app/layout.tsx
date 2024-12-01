import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import RedirectToUAE from "@/hooks/use-to-redirect";
// adding this gtag

import "./globals.scss";
import { Providers } from "@/redux/provider";
import { FacebookPixelEvents } from "@/components/facebookpixelevents/FacebookPixelEvents";

export const metadata: Metadata = {
  title: "CGB Solutions",
  description:
    "Empower your business with CGB Solutions' IT expertise. Strategic consulting & managed services for peak performance. Contact us.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        {/* <RedirectToUAE /> */}
          {/* Include the redirection logic here */}
          <FacebookPixelEvents />
      </body>
      {/* staring here gtag */}
      <GoogleAnalytics gaId="G-NYNVJH0DG6" />
      {/* End here gtag */}
    </html>
  );
}
