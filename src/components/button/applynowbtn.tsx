import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// internal
import icon from "@/assets/images/icon/icon_27.svg";



const ApplyNowBtn = () => {
  return (
    <>
      <a
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#CareerModal"
          className="signup-btn-one icon-link w-100 mt-20"
        >
          <span className="flex-fill text-center">Apply Now</span>
          <div className="icon rounded-circle d-flex align-items-center justify-content-center">
            <i className="bi bi-arrow-right"></i>
          </div>
        </a>
    </>
  );
};

export default ApplyNowBtn;
