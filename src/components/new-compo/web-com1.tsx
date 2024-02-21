import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// internal
import screen from "@/assets/images/assets/screen_15.png";
import icon_1 from "@/assets/images/icon/icon_82.svg";
import icon_2 from "@/assets/images/icon/icon_83.svg";
import icon_3 from "@/assets/images/icon/icon_81.svg";

// image style
const imgStyle = {
  height: "auto",
};

// card item
function CardItem({
  icon,
  title,
  subtitle,
}: {
  icon: StaticImageData;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="card-style-sixteen w-100 text-center mt-30">
      <div className="icon m-auto tran3s d-flex align-items-center justify-content-center rounded-circle">
        <Image src={icon} alt="icon" className="lazy-img" />
      </div>
      <h4 className="fw-bold mt-20 mb-15">{title}</h4>
      <p className="ps-xl-4 pe-xl-4">{subtitle}</p>
    </div>
  );
}
const WebCom1 = () => {
  return (
    <>
    <div className="text-feature-seven mt-5  ">
      <div className="container">
        <div className="border-bottom mt-40 pb-50 sm-pb-30">
          <div className="row">
            <div className="col-lg-6 d-flex wow fadeInUp">
              <img src="https://www.uplers.com/wp-content/themes/uplers/assets/images/front-end-development-expertise.jpg" alt="" />
            </div>
            <div className="col-lg-6 d-flex wow fadeInUp" data-wow-delay="0.1s">
                <div>
              <h1>Why Front End Development Is Our Core Expertise</h1>
<p>Front end development is a discipline that demands adaptiveness, learning capabilities, and an analytical approach. As a leading front end development company, we understand this sentiment and are committed toward curating visually striking and user-centric front end designs for your business.
</p>
<Link href="/about-us" className="btn-four mt-15 me-4">
                    Inquire Now
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  );
};

export default WebCom1;
