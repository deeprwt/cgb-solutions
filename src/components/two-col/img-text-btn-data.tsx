"use client";
import React, { useState } from "react";
import Image from "next/image";
import icon_1 from "@/assets/images/icon/icon_27.svg";
import icon_2 from "@/assets/images/icon/icon_29.svg";
import screen from "@/assets/images/assets/screen_07.svg";
import screen2 from "@/assets/images/shape/element_3.svg";
import code from "@/assets/images/solutions/code.png";
import VideoPopup from "../common/video-popup";
import Link from "next/link";
import servicenow1 from "@/assets/images/solutions/servicenow/servicenow.png";

import bg_image from "@/assets/images/solutions/mendix.jpg";

const backImg = {
  backgroundImage: `url('${bg_image.src}')`,
};

const ImgTextBtnData = ({ style_2 = false }: { style_2?: boolean }) => {
  return (
    <>
      {!style_2 && (
        <div className="text-feature-five service-details position-relative mt-150 lg-mt-80 pb-50">
          <div className="container">
            <div className="bg-wrapper">
              <div className="row">
                <div className="col-lg-7 ms-auto d-flex flex-column order-lg-last">
                  <div className="text-wrapper details-meta pt-50 pb-60 lg-pb-40 ps-3 ps-xxl-5 pe-3 pe-xxl-5">
                    <div className="title-one">
                      <h3 className="text-dark">Low Code Platform</h3>
                    </div>
                    <p className="text-lg text-dark mt-25 mb-35 lg-mb-30">
                      Mendix is a low-code application development platform that
                      allows users to create custom software without needing
                      extensive coding knowledge. With its intuitive visual
                      interface, users can easily drag and drop components to
                      build and deploy applications quickly. Mendix is ideal for
                      businesses that want to rapidly create software solutions
                      to meet their specific needs, without the time and expense
                      of traditional software development.
                    </p>
                    <Link
                      href="/about-us"
                      className="btn-eleven d-inline-flex align-items-center mt-40"
                    >
                      <span className="text">More about us</span>
                      <div className="icon tran3s rounded-circle d-flex align-items-center">
                        <Image src={icon_1} alt="icon" className="lazy-img" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5 d-flex order-lg-first">
                  <div
                    className="media-wrapper w-100 d-flex align-items-center justify-content-center position-relative"
                    style={backImg}
                  >
                    <Image
                      src={screen2}
                      alt="screen"
                      className="lazy-img shapes screen_01"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {style_2 && (
        <div className="text-feature-one service-details pt-80 lg-pt-80 pb-80 lg-pb-80">
          <div className="container">
            <div className="row align-items-center details-meta">
              <div className="col-xxl-5 col-md-5 wow fadeInLeft">
                <Image
                  src={servicenow1}
                  alt="screen"
                  className="lazy-img w-full h-auto rounded"
                />
              </div>
              <div className="col-xxl-7 col-md-7 wow fadeInRight">
                <h3 className="ps-xxl-5 ps-xl-3">
                  ServiceNow Services <br /> One Place to Find Them All
                </h3>
                <div className="details-meta ps-xxl-5 ps-xl-3">
                  <p className="text-lg mb-35 md-mb-30">
                    ServiceNow consulting encompasses advisory, implementation,
                    customization, testing, and support of ServiceNow solutions.
                    A Specialist ServiceNow Partner and an official ServiceNow
                    Reseller, ScienceSoft shares 13 year-experience in
                    ServiceNow and offers services to cover all platform-related
                    needs.
                  </p>
                  <Link
                    href="/about-us"
                    className="btn-eleven d-inline-flex align-items-center mt-40"
                  >
                    <span className="text">More about us</span>
                    <div className="icon tran3s rounded-circle d-flex align-items-center">
                      <Image src={icon_1} alt="icon" className="lazy-img" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImgTextBtnData;
