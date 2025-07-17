'use client';
import React from 'react';
import Image from 'next/image';
import shape from '@/assets/images/shape/shape_04.svg';
import Link from "next/link";

const HeroVideoOne = () => {
  return (
    <div className="position-relative w-100" style={{ overflow: 'hidden' }}>
      {/* Video that sets the height */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
        }}
      >
        <source src="/assets/videos/cgbsolutions.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional: Overlay (same height as video) */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: 'linear-gradient(#00000000, #0006)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default HeroVideoOne;
