"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
// internal
import staffing_data from "@/data/staffing-data";
import shape from "@/assets/images/shape/shape_44.svg";
import { fincale_slide_data } from "@/data/random-component-data";

// props type
type IProps = {
    filter_co: string;
    title?: string;
  };

// slider setting
const slider_setting = {
  dots: true,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const FinacleSolutionsSlide = ({filter_co,
    title,
  }: IProps) => {
  const service_items = fincale_slide_data.filter(
    (s) => s.page === `${filter_co}`
  );
  return (
    <div className="block-feature-eleven service-details overflow-hidden position-relative mt-40 mb-40 pb-20">
      <div className="container">
        <div className="row gx-lg-4 m-auto">
          <div className="col-lg-3 wow fadeInLeft">
            <div className="title-one details-meta">
              <h4 className="fw-bold">{title}</h4>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="slider-wrapper md-mt-50 w-100">
              <Slider {...slider_setting} className="service-slider-one">
                {service_items.map((s) => (
                  <div key={s.id} className="item">
                    <div
                      className="card-style-seventeen d-lg-flex tran3s w-100"
                      style={{
                        background: "white",
                        padding: "10px 20px;",
                      }}
                    >
                      <div className="tran3s rounded-circle d-flex justify-content-center align-items-center">
                        <Image src={s.icon} alt="icon" width={70} height={70} />
                      </div>
                      <div className="text d-flex align-items-center">
                        <h5 className="md-mb-20">{s.title}</h5>
                        {/* <p className="mb-25">
                          {s.desc}
                        </p> */}
                        {/* <Link href={s.link} className="btn-three">
                          <span>Learn More</span>{" "}
                          <i className="bi bi-chevron-right"></i>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <Image src={shape} alt="shape" className="lazy-img shapes shape_01" />
    </div>
  );
};

export default FinacleSolutionsSlide;
