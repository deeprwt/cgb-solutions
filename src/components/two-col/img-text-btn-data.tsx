"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
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

type IProps = {
    title?: string;
    subtitle?: string;
    img: StaticImageData;
    para?:string;
    subpara?:string;
    link:string;
    cls?: string;
    filter_data?: string;
    style_2?: boolean;
  };

const ImgTextBtnData = ({
    title,
    subtitle,
    img,
    filter_data,
    para,
    subpara,
    link,
    cls,
    style_2 = false,
  }: IProps) => {
  return (
    <>
      {!style_2 && (
        <div className="text-feature-one service-details pt-80 lg-pt-80 pb-80 lg-pb-80">
          <div className="container">
            <div className="row align-items-center details-meta">
              <div className="col-xxl-5  px-5 col-md-5 wow fadeInLeft">
                <Image
                  src={img}
                  alt="screen"
                  className="lazy-img w-full h-auto rounded"
                />
              </div>
              <div className="col-xxl-7 col-md-7 wow fadeInRight">
                <h3 className="">
                 {title}
                </h3>
                <div className="details-meta">
                  <p className="text-lg mb-35 md-mb-30">
                    {para}
                  </p>
                  <p className="text-lg mb-35 md-mb-30">
                    {subpara}
                  </p>
                  <Link
                    href={link}
                    className="btn-eleven d-inline-flex align-items-center mt-40"
                  >
                    <span className="text">Read More</span>
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
      {style_2 && (
        <div className="text-feature-one service-details pt-80 lg-pt-80 pb-80 lg-pb-80">
          <div className="container">
            <div className="row align-items-center details-meta">
              <div className="col-xxl-7 col-md-7 wow fadeInRight order-last order-md-first order-lg-first">
                <h3 className="">
                  {title}
                </h3>
                <div className="details-meta">
                  <p className="text-lg mb-35 md-mb-30">
                    {para}
                  </p>
                  <p className="text-lg mb-35 md-mb-30">
                    {subpara}
                  </p>
                  <Link
                    href={link}
                    className="btn-eleven d-inline-flex align-items-center mt-40"
                  >
                    <span className="text">Read More</span>
                    <div className="icon tran3s rounded-circle d-flex align-items-center">
                      <Image src={icon_1} alt="icon" className="lazy-img" />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-5 col-md-5 px-5 wow fadeInLeft order-first order-md-last order-lg-last ">
                <Image
                  src={img}
                  alt="screen"
                  className="lazy-img w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImgTextBtnData;
