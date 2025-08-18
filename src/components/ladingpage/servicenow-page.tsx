"use client";
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
import servicenow1 from "@/assets/images/lp/servicenow/marquee-now-assist-1.sm.jpg";

import icon from "@/assets/images/icon/icon_27.svg";
// import shape_1 from "@/assets/images/shape/shape_11.svg";
// import shape_2 from "@/assets/images/shape/shape_05.svg";
import img2 from "@/assets/images/solutions/Finacle/icon/API-connect.webp";
import icon_3 from "@/assets/images/icon/icon_64.svg";
import icon_4 from "@/assets/images/icon/icon_65.svg";
import icon_5 from "@/assets/images/icon/icon_66.svg";
import icon_6 from "@/assets/images/icon/icon_67.svg";
import shape from "@/assets/images/shape/shape_05.svg";
import bulb from "@/assets/images/solutions/servicenow/bulb.png";
import digital from "@/assets/images/solutions/servicenow/digital-journey.png";
import bg_image from "@/assets/images/background/new-wave.webp";
import auto from "@/assets/images/lp/servicenow/automotive.svg";
import bank from "@/assets/images/lp/servicenow/banking.svg";
import consumer from "@/assets/images/lp/servicenow/consumer-packaged-goods.svg";
import govt from "@/assets/images/lp/servicenow/government.svg";
import insurance from "@/assets/images/lp/servicenow/insurance.svg";
import life from "@/assets/images/lp/servicenow/life-sciences.svg";
import nonprofit from "@/assets/images/lp/servicenow/nonprofit.svg";
import retail from "@/assets/images/lp/servicenow/retail.svg";
import health from "@/assets/images/lp/servicenow/healthcare.svg";
import tech from "@/assets/images/lp/servicenow/technology.svg";
import tele from "@/assets/images/lp/servicenow/telecom.svg";

const industries = [
  { name: "Automotive", icon: auto },
  { name: "Banking", icon: bank },
  { name: "Consumer Packaged Goods", icon: consumer},
  { name: "Government", icon: govt },
  { name: "Healthcare", icon: health },
  { name: "Insurance", icon: insurance },
  { name: "Life Sciences", icon: life },
  { name: "Nonprofit", icon: nonprofit },
  { name: "Retail", icon: retail },
  { name: "Technology", icon: tech },
  { name: "Telecom", icon: tele },
];

const backImg = {
  backgroundImage: `url('${bg_image.src}')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "scroll",
};

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

const ServicenNowlpsection = ({ cls }: { cls?: string }) => {
  const service_items = service_data.filter((s) => s.page === "servicenow");
  return (
    <>
      {/* starts from here  */}
      <div
        className="text-feature-one service-details pt-80 lg-pt-80 pb-80 lg-pb-80"
        style={backImg}
      >
        <div className="container">
          <div className="row align-items-center details-meta">
            <div className="col-xxl-5 col-md-5 wow fadeInLeft order-last order-md-first">
              <Image
                src={servicenow1}
                alt="screen"
                className="lazy-img w-full h-auto rounded"
              />
            </div>
            <div className="col-xxl-7 col-md-7 wow fadeInRight order-first order-md-last">
              <div className="title-one details-meta pb-10 wow fadeInLeft ps-xxl-5 ps-xl-3">
                <h3>Why ServiceNow?</h3>
              </div>
              <div className="details-meta ps-xxl-5 ps-xl-3">
                <p className="text-lg mb-35 md-mb-30">
                  ServiceNow is the leading cloud-based platform that transforms
                  enterprise workflows through automation, AI, and low-code
                  development. It enables businesses to replace outdated
                  processes with smart, scalable solutions across IT, HR,
                  Customer Service, and more.
                </p>
                <div className="d-flex flex-wrap pb-4">
                  <Link
                    href="/contact"
                    className="btn-eighteen tran3s me-4 mt-10 heartbeat-animation"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-feature-one service-details pt-80 lg-pt-80 pb-80 lg-pb-80">
        <div className="container">
          <div className="row align-items-center details-meta">
            <div className="col-xxl-5 col-md-5 wow fadeInLeft order-last">
              <Image
                src={servicenow1}
                alt="screen"
                className="lazy-img w-full h-auto rounded"
              />
            </div>
            <div className="col-xxl-7 col-md-7 wow fadeInRight order--first ">
              <div className="title-one details-meta pb-10 wow fadeInLeft ps-xxl-5 ps-xl-3">
                <h3>CGB Solutions — Your Trusted ServiceNow Partner</h3>
              </div>
              <div className="details-meta ps-xxl-5 ps-xl-3">
                <p className="text-lg mb-35 md-mb-30">
                  At CGB Solutions, we help global enterprises unlock the full
                  potential of ServiceNow. Our certified consultants,
                  developers, and architects bring deep domain expertise in
                  designing, implementing, and optimizing ServiceNow solutions
                  that drive measurable business outcomes.
                </p>
                <div className="d-flex flex-wrap pb-4">
                  <Link
                    href="/contact"
                    className="btn-eighteen tran3s me-4 mt-10 heartbeat-animation"
                  >
                    Contact Us
                  </Link>
                </div>
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
              <h3>Our ServiceNow Offerings</h3>
              {/* <p>
                  Right here what you need 
                </p> */}
            </div>
            <div
              className="col-md-4 d-flex wow fadeInUp"
              data-wow-delay={`0.1s`}
            >
              <div
                className="card-style-eight rounded-5 vstack tran3s w-100 mb-30"
                style={{ padding: "20px 15px 10px;" }}
              >
                <div className="icon d-flex align-self-center">
                  <Image src={img2} alt="icon" className="lazy-img" />
                </div>
                <h4
                  className="fw-bold mt-30 mb-30 text-center text-capitalize"
                  style={{ color: "#012d50" }}
                >
                  IT Service Management (ITSM)
                </h4>
                <ul>
                  <li>Modernize your IT operations </li>
                  <li>Automated ticketing & routing</li>
                  <li>CMDB configuration</li>
                  <li>SLA monitoring & reporting</li>
                </ul>
                {/* <p className="text-center">{item.desc}</p> */}
              </div>
            </div>
            <div
              className="col-md-4 d-flex wow fadeInUp"
              data-wow-delay={`0.1s`}
            >
              <div
                className="card-style-eight rounded-5 vstack tran3s w-100 mb-30"
                style={{ padding: "20px 15px 10px;" }}
              >
                <div className="icon d-flex align-self-center">
                  <Image src={img2} alt="icon" className="lazy-img" />
                </div>
                <h4
                  className="fw-bold mt-30 mb-30 text-center text-capitalize"
                  style={{ color: "#012d50" }}
                >
                  IT Operations Management (ITOM)
                </h4>
                <ul>
                  <li>Gain end-to-end visibility into your infrastructure.</li>
                  <li>Discovery & dependency mapping</li>
                  <li>Event correlation & root cause analysis</li>
                  {/* <li>Predictive analytics for downtime prevention</li> */}
                </ul>
                {/* <p className="text-center">{item.desc}</p> */}
              </div>
            </div>
            <div
              className="col-md-4 d-flex wow fadeInUp"
              data-wow-delay={`0.1s`}
            >
              <div
                className="card-style-eight rounded-5 vstack tran3s w-100 mb-30"
                style={{ padding: "20px 15px 10px;" }}
              >
                <div className="icon d-flex align-self-center">
                  <Image src={img2} alt="icon" className="lazy-img" />
                </div>
                <h4
                  className="fw-bold mt-30 mb-30 text-center text-capitalize"
                  style={{ color: "#012d50" }}
                >
                  IT Asset Management (ITAM)
                </h4>
                <ul>
                  <li>Hardware & Software Lifecycle Management</li>
                  <li>Vendor Compliance and Cost Control</li>
                  <li>CMDB Integration</li>
                </ul>
                {/* <p className="text-center">{item.desc}</p> */}
              </div>
            </div>
            <div
              className="col-md-4 d-flex wow fadeInUp"
              data-wow-delay={`0.1s`}
            >
              <div
                className="card-style-eight rounded-5 vstack tran3s w-100 mb-30"
                style={{ padding: "20px 15px 10px;" }}
              >
                <div className="icon d-flex align-self-center">
                  <Image src={img2} alt="icon" className="lazy-img" />
                </div>
                <h4
                  className="fw-bold mt-30 mb-30 text-center text-capitalize"
                  style={{ color: "#012d50" }}
                >
                  Customer Service Management (CSM)
                </h4>
                <ul>
                  <li>Deliver seamless omnichannel customer support.</li>
                  <li>Case & task automation</li>
                  <li>Self-service portals & chatbots</li>
                  <li>SLA-based escalations</li>
                </ul>
                {/* <p className="text-center">{item.desc}</p> */}
              </div>
            </div>
            <div
              className="col-md-4 d-flex wow fadeInUp"
              data-wow-delay={`0.1s`}
            >
              <div
                className="card-style-eight rounded-5 vstack tran3s w-100 mb-30"
                style={{ padding: "20px 15px 10px;" }}
              >
                <div className="icon d-flex align-self-center">
                  <Image src={img2} alt="icon" className="lazy-img" />
                </div>
                <h4
                  className="fw-bold mt-30 mb-30 text-center text-capitalize"
                  style={{ color: "#012d50" }}
                >
                  HR Service Delivery (HRSD)
                </h4>
                <ul>
                  <li>
                    Streamline employee onboarding, requests, and case
                    management.
                  </li>
                  <li>Employee experience portals</li>
                  <li>Automated HR workflows</li>
                  <li>Compliance & audit trail management</li>
                </ul>
                {/* <p className="text-center">{item.desc}</p> */}
              </div>
            </div>
            <div
              className="col-md-4 d-flex wow fadeInUp"
              data-wow-delay={`0.1s`}
            >
              <div
                className="card-style-eight rounded-5 vstack tran3s w-100 mb-30"
                style={{ padding: "20px 15px 10px;" }}
              >
                <div className="icon d-flex align-self-center">
                  <Image src={img2} alt="icon" className="lazy-img" />
                </div>
                <h4
                  className="fw-bold mt-30 mb-30 text-center text-capitalize"
                  style={{ color: "#012d50" }}
                >
                  Creator Workflows (Low-Code Apps)
                </h4>
                <ul>
                  <li>
                    Build and deploy apps quickly using ServiceNow’s App Engine.
                  </li>
                  <li>Custom portals and dashboards</li>
                  <li>Integration with third-party tools</li>
                  <li>Citizen development enablement</li>
                </ul>
                {/* <p className="text-center">{item.desc}</p> */}
              </div>
            </div>
            <div
              className="col-md-4 d-flex wow fadeInUp"
              data-wow-delay={`0.1s`}
            >
              <div
                className="card-style-eight rounded-5 vstack tran3s w-100 mb-30"
                style={{ padding: "20px 15px 10px;" }}
              >
                <div className="icon d-flex align-self-center">
                  <Image src={img2} alt="icon" className="lazy-img" />
                </div>
                <h4
                  className="fw-bold mt-30 mb-30 text-center text-capitalize"
                  style={{ color: "#012d50" }}
                >
                 ServiceNow Implementation & Integration
                </h4>
                <ul>
                  <li>
                   From blueprint to go-live, we ensure successful delivery.
                  </li>
                  <li>End-to-end deployment</li>
                  <li>Integration with tools like Microsoft Teams, Jira, SAP</li>
                  <li>Migration from legacy systems</li>
                </ul>
                {/* <p className="text-center">{item.desc}</p> */}
              </div>
            </div>
            <div
              className="col-md-4 d-flex wow fadeInUp"
              data-wow-delay={`0.1s`}
            >
              <div
                className="card-style-eight rounded-5 vstack tran3s w-100 mb-30"
                style={{ padding: "20px 15px 10px;" }}
              >
                <div className="icon d-flex align-self-center">
                  <Image src={img2} alt="icon" className="lazy-img" />
                </div>
                <h4
                  className="fw-bold mt-30 mb-30 text-center text-capitalize"
                  style={{ color: "#012d50" }}
                >
                  Managed Services & Support
                </h4>
                <ul>
                  <li>
                    24x7 support, upgrades, and continuous optimization.</li>
                  <li>Dedicated support teams</li>
                  <li>Governance & compliance monitoring</li>
                  <li>SLA-based managed services</li>
                </ul>
                {/* <p className="text-center">{item.desc}</p> */}
              </div>
            </div>

          </div>
        </div>
        <Image src={shape_1} alt="shape" className="lazy-img shapes shape_01" />
        <Image src={shape_2} alt="shape" className="lazy-img shapes shape_02" />
      </div>

      <section className="py-5 text-center">
      <div className="container">
        <h2 className="fw-bold mb-4">One platform, any industry</h2>
        <div className="row g-4 justify-content-center">
          {industries.map((industry, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={index}>
              <div className="industry-card">
                <div className="industry-icon">
                  <Image
                    src={industry.icon}
                    alt={industry.name}
                    width={30}
                    height={30}
                  />
                </div>
                <p className="industry-name">{industry.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

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

export default ServicenNowlpsection;
