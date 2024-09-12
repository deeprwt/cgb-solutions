// components/RedirectToUAE.tsx
"use client";  // This is necessary for client-side hooks like useEffect

import { useEffect } from "react";

const RedirectToUAE = () => {
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch(`https://ipapi.co/json/?access_key=f6f4107e0bdb5105bf1f04b5cadccaf7`);
        const data = await response.json();
        const countryName = data.country_name || '';

        if (countryName === 'United Arab Emirates') {
          window.location.href = 'https://ashiratechnologies.com';
        }
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    };

    fetchLocation();
  }, []);

  return null; // This component doesn't render anything
};

export default RedirectToUAE;
