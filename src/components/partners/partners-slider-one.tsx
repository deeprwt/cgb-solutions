'use client'
import React from "react";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
import logo_1 from "@/assets/images/logo/media_01.png";
import logo_2 from "@/assets/images/logo/media_02.png";
import logo_3 from "@/assets/images/logo/media_03.png";
import logo_4 from "@/assets/images/logo/media_04.png";
import logo_5 from "@/assets/images/logo/media_05.png";

// slider setting
const slider_setting = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

// slider logos
const slider_logos:StaticImageData[] = [logo_1, logo_2, logo_3, logo_4, logo_5, logo_3, logo_1];

const PartnersSliderOne = () => {
  return (
    <Slider {...slider_setting} className="partner-slider-one">
      {slider_logos.map((logo, i) => (
        <div key={i} className="item">
          <div className="logo d-flex align-items-center justify-content-center">
            <Image src={logo} alt="logo" style={{ height: "auto" }} />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default PartnersSliderOne;
