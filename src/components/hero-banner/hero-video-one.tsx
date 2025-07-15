'use client'
import React from 'react';
import Image from 'next/image';
import shape from '@/assets/images/shape/shape_04.svg';
import Link from "next/link";

// imageStyle
const imageStyle = {
  height: 'auto',
};

const HeroVideoOne = () => {
  return (
    <>
      <div className="hero-banner-two light-bg pt-200 pb-85 position-relative" style={{ height: '100vh' }}>
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="position-absolute top-0 left-0 w-100 h-100"
          style={{ objectFit: 'cover', zIndex: -1 }}
        >
          <source src="/assets/videos/cgbsolutions.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark overlay */}
        <div 
          className="position-absolute top-0 left-0 w-100 h-100" 
          style={{ backgroundImage: 'linear-gradient(#0006, #0006)', zIndex: 0 }}
        />
        
        {/* <div className="container position-relative h-100 d-flex align-items-center justify-content-center">
          <div className="row">
            <div className="col-lg-10 m-auto text-center">
              <h1 className="hero-heading fw-bold wow fadeInUp mt-10 text-white">
              Revolutionizing Foot Health with 
                <span className="d-inline-block position-relative">
                 &nbsp; AI-Driven
                  <Image src={shape} alt="shape" className="lazy-img" style={imageStyle} />
                </span>{' '}
                 Diagnostics
              </h1>
              <p
                className="text-xl pt-35 pb-35 wow fadeInUp text-white"
                data-wow-delay="0.1s"
              >
               Introducing the DiaPS Mat: Accurate, Affordable, and Portable Plantar Pressure Analysis.
              </p>
              <div className="d-inline-flex flex-wrap align-items-center">
                  <Link href="/about-us" className="btn-four mt-15 me-4">
                  Explore Our Technology
                  </Link>
                </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default HeroVideoOne;
