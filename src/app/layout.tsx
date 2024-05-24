import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
// adding this gtag

import "./globals.scss";
import { Providers } from "@/redux/provider";

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
        {/* add tidio scritp for chat bot */}
        <script src="//code.tidio.co/ohsdb1pchgfjw1yfgmpk8nx3haysxugt.js" async></script>
        {/* add tidio scritp for chat bot */}
      </body>
      {/* staring here gtag */}
      <GoogleAnalytics gaId="G-NYNVJH0DG6" />
      {/* End here gtag */}
    </html>
  );
}
