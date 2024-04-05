import type { Metadata } from "next";
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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
