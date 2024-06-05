import React from "react";
import Link from "next/link";
import Slider from "react-slick";
// internal
import faq_data from "@/data/faq-data";
import Image, { StaticImageData } from "next/image";
import service_data from "@/data/service-data";
import shape_1 from "@/assets/images/shape/shape_11.svg";
import shape_2 from "@/assets/images/shape/shape_05.svg";
import screen from "@/assets/images/assets/screen_11.png";
import FaqItem from "@/components/faq/faq-item";
import icon_1 from "@/assets/images/icon/icon_82.svg";
import icon_2 from "@/assets/images/icon/icon_83.svg";
import img1 from "@/assets/images/solutions/contract-staffing/contract-staffing1.svg";
import Integration from "@/assets/images/solutions/servicenow/Integration.jpg";
import ITSM from "@/assets/images/solutions/servicenow/itsm_csm.jpg";
import UI_UX from "@/assets/images/solutions/servicenow/ui_ux.jpg";
import aot from "@/assets/images/solutions/servicenow/aot.jpg";
import ImgTextOne from "../img-text-feature/img-text-one";
import servicenow1 from "@/assets/images/solutions/servicenow/servicenow.png";

import icon from "@/assets/images/icon/icon_27.svg";
// import shape_1 from "@/assets/images/shape/shape_11.svg";
// import shape_2 from "@/assets/images/shape/shape_05.svg";

import icon_3 from "@/assets/images/icon/icon_64.svg";
import icon_4 from "@/assets/images/icon/icon_65.svg";
import icon_5 from "@/assets/images/icon/icon_66.svg";
import icon_6 from "@/assets/images/icon/icon_67.svg";
import shape from "@/assets/images/shape/shape_05.svg";
import bulb from "@/assets/images/solutions/servicenow/bulb.png";
import digital from "@/assets/images/solutions/servicenow/digital-journey.png";

// card item
function CardItem2({
  icon,
  title,
  subtitle,
}: {
  icon: StaticImageData;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="card-style-sixteen d-flex mt-60 lg-mt-40 mb-60 lg-mb-10">
      <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
        <Image src={icon} alt="icon" className="lazy-img" />
      </div>
      <div className="text">
        <h4 className="fw-bold mb-20 sm-mb-10">{title}</h4>
        <p className="m0">{subtitle}</p>
      </div>
    </div>
  );
}

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
    <div className="card-style-sixteen text-center arrow mt-40 md-mt-20">
      <div className="icon m-auto tran3s rounded-circle d-flex align-items-center justify-content-center">
        <Image src={icon} alt="icon" className="lazy-img" />
      </div>
      <h4 className="fw-bold mt-35 md-mt-30 mb-15">{title}</h4>
      <p className="m0 fs-5 lh-base">{subtitle}</p>
    </div>
  );
}

const ServicenNowSecton = ({ cls }: { cls?: string }) => {
  const service_items = service_data.filter((s) => s.page === "servicenow");
  return (
    <>
      {/* starts from here  */}
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
              <h3 className="ps-xxl-5 ps-xl-3">ServiceNow Services <br /> One Place to Find Them All</h3>
              <div className="details-meta ps-xxl-5 ps-xl-3">
                <p className="text-lg mb-35 md-mb-30">
                  ServiceNow consulting encompasses advisory, implementation,
                  customization, testing, and support of ServiceNow solutions. A
                  Specialist ServiceNow Partner and an official ServiceNow
                  Reseller, ScienceSoft shares 13 year-experience in ServiceNow
                  and offers services to cover all platform-related needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Ends from here  */}

      {/* starts from here  */}
      {/* <div className="text-feature-one service-details pt-80 lg-pt-80 pb-80 lg-pb-80">
        <div className="container">
          <div className="row align-items-center details-meta">
            <div className="title-one">
              <h3 className="text-center">
                ServiceNow Services <br /> One Place to Find Them All
              </h3>
              <p className="text-lg text-center px-4 mb-35 md-mb-30">
                ServiceNow consulting encompasses advisory, implementation,
                customization, testing, and support of ServiceNow solutions. A
                Specialist ServiceNow Partner and an official ServiceNow
                Reseller, ScienceSoft shares 13 year-experience in ServiceNow
                and offers services to cover all platform-related needs.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* Ends from here  */}

      <div className="block-feature-six service-details position-relative pt-50 lg-pt-60 lg-pb-40">
        <div className="container">
          <div className="row gx-lg-5">
            <div className="title-one details-meta text-center pb-10 wow fadeInLeft">
              <h3>ServiceNow Capability by the Numbers</h3>
              {/* <p>
                  Right here what you need 
                </p> */}
            </div>
            <div className="col-md-9 m-auto md-mt-50">
              <Image
                src={bulb}
                alt="screen"
                className="lazy-img w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
        <Image src={shape_1} alt="shape" className="lazy-img shapes shape_01" />
        <Image src={shape_2} alt="shape" className="lazy-img shapes shape_02" />
      </div>

      {/*--------------------Img and orderList tag Staring------------------ */}
      <ImgTextOne
        /* Main Heading   */
        title="Expertise and Focused Area"
        para="Our Deep Expertise and Focused Area"
        img={ITSM}
        subtitle="ITSM & CSM"
        subpara="CGB Solutions specializes in providing comprehensive ITSM and CSM services on the ServiceNow platform, with a dedicated focus on optimizing service delivery and customer satisfaction in these key areas.
        "
        filter_data="servicenow-1"
      />
      {/*--------------------Img and orderList tag End------------------ */}

      {/*--------------------Img and orderList tag Staring------------------ */}
      <ImgTextOne
        img={aot}
        subtitle="TOM & ITAM"
        subpara="CGB Solutions specializes in TOM and ITAM services on ServiceNow, ensuring efficient technical operations and optimized IT asset management. With our expertise, we streamline processes, maximize performance, and enhance value for our clients"
        filter_data="servicenow-2"
        style_2={true}
      />
      {/*--------------------Img and orderList tag Staring------------------ */}
      {/*--------------------Img and orderList tag End------------------ */}
      <ImgTextOne
        img={UI_UX}
        subtitle="UI/UX"
        subpara="CGB Solutions prioritizes UI/UX design to ensure our solutions deliver intuitive interfaces and exceptional user experiences. Our focus on UI/UX enhances user satisfaction and boosts efficiency for our clients' platforms and applications."
        filter_data="servicenow-3"
        cls="d-none"
      />
      {/*--------------------Img and orderList tag End------------------ */}
      {/*--------------------Img and orderList tag Staring------------------ */}
      <ImgTextOne
        img={Integration}
        subtitle="INTEGRATION"
        subpara="CGB Solutions specializes in seamless integration services, ensuring that diverse systems and applications work together harmoniously. Our integration solutions streamline processes, enhance efficiency, and optimize data flow for our clients, ultimately driving business success."
        filter_data="servicenow-4"
        style_2={true}
      />
      {/*--------------------Img and orderList tag Staring------------------ */}

      {/* card starts from here  */}
      <div className="block-feature-six service-details bg-two position-relative pt-50 lg-pt-60 pb-80 lg-pb-40">
        <div className="container details-meta">
          <div className="row gx-lg-5">
            <div className="col-lg-12">
              <div className="row">
                <div className="title-one">
                  {/* <div className="upper-title">Core aspects of</div> */}
                  {/* <h3 className="text-center pb-50">
                    An Outline of Our A-to-Z ServiceNow Services{" "}
                  </h3> */}
                </div>
                {/* <p className="text-lg text-dark mb-35 py-3 md-mb-30">
                  Right here what you need
                </p> */}
              </div>
            </div>
            <div className="col-md-12 m-auto md-mt-50">
              <Image
                src={digital}
                alt="screen"
                className="lazy-img w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
        <Image src={shape_1} alt="shape" className="lazy-img shapes shape_01" />
        <Image src={shape_2} alt="shape" className="lazy-img shapes shape_02" />
      </div>
      {/* card end */}
    </>
  );
};

export default ServicenNowSecton;
