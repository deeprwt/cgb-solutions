import React from "react";
import Image from "next/image";
import Whatsnew from "@/assets/images/cgbhome/whatsnew.png";
import Whatsnew3 from "@/assets/images/cgbhome/leap.png";
import Whatsnew4 from "@/assets/images/cgbhome/techsparks.png";
import Whatsnew2 from "@/assets/images/cgbhome/cloud_world_tour.svg";
import bg_image from "@/assets/images/background/backgroundnew.png";
import img1 from "@/assets/images/solutions/Finacle/icon/API-connect.webp";
import img2 from "@/assets/images/solutions/Finacle/icon/Alerts-Solution-icon.svg";
import img3 from "@/assets/images/solutions/Finacle/icon/Analytics-Solution-icon.svg";

const backImg = {
  backgroundImage: `url('${bg_image.src}')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};

const WhatsNew = () => {
  return (
    <>
      <div className="full position-relative service-details">
        <div className="overlayStyle"></div>
        <div className="container position-relative" style={{ zIndex: "1" }}>
          <div className="counter-wrapper pt-40 pb-40">
            <div className="row details-meta">
              <div className="title-one">
                {/* <div className="upper-title"></div> */}
                {/* <h3 className="text-center">What&apos;s New</h3> */}
              </div>
              <div
                className="col-md-4 mb-35 mt-35  wow fadeInUp transition delay-150 duration-300 ease-in-out"
                data-wow-delay="0.0s"
              >
                <div
                  className="card-style-eight rounded-5 vstack card-shadow-one shadowimg tran3s w-100 mb-30"
                  style={{ padding: "20px 15px 10px;" }}
                >
                  <div className="icon d-flex align-self-center">
                    <Image src={img1} alt="icon" className="lazy-img" />
                  </div>
                  <h4
                    className="fw-bold mt-30 mb-30 text-center text-capitalize"
                    style={{ color: "#012d50" }}
                  >
                    Certified Professionals
                  </h4>
                  <p className="text-center">
                    Skilled team of certified professionals
                  </p>
                  {/* <Link href="/service-details" className="stretched-link"></Link> */}
                </div>
              </div>
              <div
                className="col-md-4 mb-35 mt-35  wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div
                  className="card-style-eight rounded-5 vstack card-shadow-one shadowimg tran3s w-100 mb-30"
                  style={{ padding: "20px 15px 10px;" }}
                >
                  <div className="icon d-flex align-self-center">
                    <Image src={img2} alt="icon" className="lazy-img" />
                  </div>
                  <h4
                    className="fw-bold mt-30 mb-30 text-center text-capitalize"
                    style={{ color: "#012d50" }}
                  >
                    Transparency
                  </h4>
                  <p className="text-center">
                    Honesty, Transparency and Hard work.
                  </p>
                  {/* <Link href="/service-details" className="stretched-link"></Link> */}
                </div>
              </div>
              <div
                className="col-md-4 mb-35 mt-35  wow fadeInUp "
                data-wow-delay="0.2s"
              >
                <div
                  className="card-style-eight rounded-5 vstack card-shadow-one shadowimg tran3s w-100 mb-30"
                  style={{ padding: "20px 15px 10px;" }}
                >
                  <div className="icon d-flex align-self-center">
                    <Image src={img3} alt="icon" className="lazy-img" />
                  </div>
                  <h4
                    className="fw-bold mt-30 mb-30 text-center text-capitalize"
                    style={{ color: "#012d50" }}
                  >
                    24/7 Support
                  </h4>
                  <p className="text-center">
                   Available 24/7 to offer flawless support
                  </p>
                  {/* <Link href="/service-details" className="stretched-link"></Link> */}
                </div>
              </div>
              {/* <div
                className="col-md-3 mb-35 mt-35  wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <Image
                  src={Whatsnew4}
                  alt="what's new"
                  className="w-100 h-100 shadowimg cursor-pointer rounded-1"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsNew;
