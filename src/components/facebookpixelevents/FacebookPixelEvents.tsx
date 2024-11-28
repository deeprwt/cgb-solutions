"use client";

import React, { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export const FacebookPixelEvents: React.FC = () => {
  const pathname = usePathname(); // Current route path
  const searchParams = useSearchParams(); // Query parameters

  useEffect(() => {
    // Dynamically import 'react-facebook-pixel' for client-side use
    import("react-facebook-pixel")
      .then((module) => module.default) // Get the default export
      .then((ReactPixel) => {
        // Initialize the Facebook Pixel
        ReactPixel.init("467708106139651"); // Replace with your Facebook Pixel ID
        ReactPixel.pageView(); // Track initial page load
      });
  }, [pathname, searchParams]); // Run on pathname or search params change

  return null; // This component doesn't render anything
};
