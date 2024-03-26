import React from "react";
import Image, { StaticImageData } from "next/image";
import icon_1 from "@/assets/images/icon/icon_17.svg";
import icon_2 from "@/assets/images/icon/icon_18.svg";
import icon_3 from "@/assets/images/icon/icon_19.svg";
import shape_1 from "@/assets/images/shape/shape_05.svg";
import shape_2 from "@/assets/images/shape/shape_06.svg";
import CounterUp from "../common/counter-up";

// card style
function CardStyle({
  icon,
  title,
  subtitle,
  decimal = false,
}: {
  icon: StaticImageData;
  title: string;
  subtitle: string;
  decimal?: boolean;
}) {
  return (
    <div className="card-style-five text-center">
      {/* <div className="icon d-flex align-content-center justify-content-center">
        <Image src={icon} alt="icon" className="lazy-img" />
      </div> */}
      <div className="main-count fw-500">
        <h3
          className="fw-bold mt-35 md-mt-30 mb-15"
          style={{ color: "#4BEDDB" }}
        >
          {title}
        </h3>
      </div>
      <p className="ps-xxl-5 ps-xl-3 pe-xxl-5 pe-xl-3">{subtitle}</p>
    </div>
  );
}

const TextFeatureTwo = () => {
  return (
    <div className="text-feature-two service-details position-relative pt-110 lg-pt-80 pb-110 lg-pb-80">
      <div className="container">
        <div className="row align-items-center details-meta">
          <div className="col-xl-6 col-lg-7">
            <div className="title-one">
              <h3 className="text-white">Oracle Technology Services</h3>
            </div>
          </div>
          <div className="col-lg-5 ms-auto">
            <div className="upper-title">
              <h4 className="card-text-color">Bug Fixing</h4>
            </div>
            <p className="m0 text-md text-white md-pt-10">
              Onsite / Offshore Technical Development
            </p>
          </div>
        </div>
        <div className="row gx-0">
          <div className="col-lg-3 card-style-five-start">
            <CardStyle
              icon={icon_1}
              title="Design "
              subtitle="Technical Specifications of all technical objects"
            />
          </div>
          <div className="col-lg-3 card-style-five-start">
            <CardStyle
              icon={icon_2}
              title="Develop"
              subtitle="Development of technical objects"
              decimal={true}
            />
          </div>
          <div className="col-lg-3 card-style-five-start">
            <CardStyle
              icon={icon_3}
              title="Test"
              subtitle="Unit, Integration, Security and User Acceptance Testing"
            />
          </div>
          <div className="col-lg-3 card-style-five-start">
            <CardStyle
              icon={icon_3}
              title="Support"
              subtitle="Technical Defects, Bug Fixing"
            />
          </div>
        </div>
        {/* <div className="col-12 pt-80">
            <div className="upper-title"><h3 className="text-center card-text-color">TRAINING</h3></div>
        </div> */}
      </div>
      <Image src={shape_1} alt="shape" className="lazy-img shapes shape_01" />
      <Image src={shape_2} alt="shape" className="lazy-img shapes shape_02" />
    </div>
  );
};

export default TextFeatureTwo;
