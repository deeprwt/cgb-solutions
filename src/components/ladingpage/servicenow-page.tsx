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
import itsm from "@/assets/images/lp/servicenow/IT Service Management (ITSM).svg";
import itom from "@/assets/images/lp/servicenow/IT Operations Management (ITOM).svg";
import itam from "@/assets/images/lp/servicenow/IT Asset Management (ITAM).svg";
import csm from "@/assets/images/lp/servicenow/Customer Service Management.svg";
import hr from "@/assets/images/lp/servicenow/HR Service Delivery (HRSD).svg";
import workflows from "@/assets/images/lp/servicenow/Creator Workflows (Low-Code Apps).svg";
import Inte from "@/assets/images/lp/servicenow/ServiceNow Implementation & Integration.svg";
import support from "@/assets/images/lp/servicenow/Managed Services & Support.svg";
import icon_3 from "@/assets/images/icon/icon_64.svg";
import icon_4 from "@/assets/images/icon/icon_65.svg";
import icon_5 from "@/assets/images/icon/icon_66.svg";
import icon_6 from "@/assets/images/icon/icon_67.svg";
import shape from "@/assets/images/shape/shape_05.svg";
import bulb from "@/assets/images/solutions/servicenow/bulb.png";
import digital from "@/assets/images/lp/servicenow/an_outline.png";
import digital2 from "@/assets/images/lp/servicenow/service-capability.svg";
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
import TestimonialPage from "@/app/testimonial/page";
import FeedbackFour from "@/components/feedback/feedback-four";
import FeedbackOne from "@/components/feedback/feedback-one";
import FeedbackFive from "@/components/feedback/feedback-five";
import FeedbackThree from "@/components/feedback/feedback-three";

const industries = [
  { name: "Automotive", icon: auto },
  { name: "Banking", icon: bank },
  { name: "Government", icon: govt },
  { name: "Healthcare", icon: health },
  { name: "Insurance", icon: insurance },
  { name: "Life Sciences", icon: life },
  { name: "Nonprofit", icon: nonprofit },
  { name: "Retail", icon: retail },
  { name: "Technology", icon: tech },
  { name: "Telecom", icon: tele },
  { name: "Consumer Packaged Goods", icon: consumer },
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
            <div className="col-md-6 wow fadeInLeft order-last">
              <div className="row d-flex flex-column">
                <div
                  className="col-md-12 d-flex wow fadeInUp"
                  data-wow-delay={`0.1s`}
                >
                  <div
                    className="card-style-eight rounded-5 vstack tran3s w-100 mb-30"
                    style={{ padding: "20px 15px 10px;" }}
                  >
                    <div className="icon d-flex align-self-start align-items-center mt-2 mb-2">
                      <Image
                        src={itam}
                        alt="icon"
                        className="lazy-img"
                        layout="responsive"
                      />
                      <h4
                        className="fw-bold text-center text-capitalize px-4 mb-0"
                        style={{ color: "#012d50" }}
                      >
                        Smart
                      </h4>
                    </div>
                    <p className="">
                      Automate and enhance repetitive and time-consuming
                      processes and reduce errors across your organization. Run
                      multiple application consistently with the same custom
                      data source.
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-12 d-flex wow fadeInUp"
                  data-wow-delay={`0.1s`}
                >
                  <div
                    className="card-style-eight rounded-5 vstack tran3s w-100 mb-30"
                    style={{ padding: "20px 15px 10px;" }}
                  >
                    <div className="icon d-flex align-self-start align-items-center mt-2 mb-2">
                      <Image
                        src={itam}
                        alt="icon"
                        className="lazy-img"
                        layout="responsive"
                      />
                      <h4
                        className="fw-bold text-center text-capitalize px-4 mb-0"
                        style={{ color: "#012d50" }}
                      >
                        Scale
                      </h4>
                    </div>
                    <p className="">
                      See productivity, agility and resource utilization gains
                      of a robust low-code backend development platform in
                      addition to low-code front-end development that helps you
                      scale and run thousands of applications of any complexity
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-12 d-flex wow fadeInUp"
                  data-wow-delay={`0.1s`}
                >
                  <div
                    className="card-style-eight rounded-5 vstack tran3s w-100 mb-30"
                    style={{ padding: "20px 15px 10px;" }}
                  >
                    <div className="icon d-flex align-self-start align-items-center mt-2 mb-2">
                      <Image
                        src={itam}
                        alt="icon"
                        className="lazy-img"
                        layout="responsive"
                      />
                      <h4
                        className="fw-bold text-center text-capitalize px-4 mb-0"
                        style={{ color: "#012d50" }}
                      >
                        Secure
                      </h4>
                    </div>
                    <p className="">
                      GDPR compliance and built in enterprise grade security. No
                      compromises on governance and security. One centralized
                      view and management of all your 1 & 3rd party apps,
                      eliminating shadow IT.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow fadeInRight order--first ">
              <div className="title-one details-meta pb-10 wow fadeInLeft ">
                <h3>Why CGB Solutions — Your Trusted ServiceNow Partner</h3>
              </div>
              <div className="details-meta ">
                <p className="text-lg mb-35 md-mb-30 text-justify">
                  At CGB Solutions, we help global enterprises unlock the full
                  potential of ServiceNow. Our certified consultants,
                  developers, and architects bring deep domain expertise in
                  designing, implementing, and optimizing ServiceNow solutions
                  that drive measurable business outcomes.
                </p>
                <ul>
                  <li>
                    Our ServiceNow Practice covers every aspect of the
                    ServiceNow Platform with Solutions Architects , Developers
                    and Consultants
                  </li>
                  <li>
                    5 Delivery Centers Globally acting as COE for ServiceNow
                    Capability 100+ Members across different stacks of
                    ServiceNow
                  </li>
                  <li>Implementation , Consulting & Support Capability</li>
                </ul>
                <div className="d-flex flex-wrap pb-4">
                  <Link
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#PopModal"
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
                  <Image src={itsm} alt="icon" className="lazy-img" />
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
                  <Image src={itom} alt="icon" className="lazy-img" />
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
                  <Image src={itam} alt="icon" className="lazy-img" />
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
                  <Image src={csm} alt="icon" className="lazy-img" />
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
                  <Image src={hr} alt="icon" className="lazy-img" />
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
                  <Image src={workflows} alt="icon" className="lazy-img" />
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
                  <Image src={Inte} alt="icon" className="lazy-img" />
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
                  <li>
                    Integration with tools like Microsoft Teams, Jira, SAP
                  </li>
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
                  <Image src={support} alt="icon" className="lazy-img" />
                </div>
                <h4
                  className="fw-bold mt-30 mb-30 text-center text-capitalize"
                  style={{ color: "#012d50" }}
                >
                  Managed Services & Support
                </h4>
                <ul>
                  <li>24x7 support, upgrades, and continuous optimization.</li>
                  <li>Dedicated support teams</li>
                  <li>Governance & compliance monitoring</li>
                  <li>SLA-based managed services</li>
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
                  <Image src={support} alt="icon" className="lazy-img" />
                </div>
                <h4
                  className="fw-bold mt-30 mb-30 text-center text-capitalize"
                  style={{ color: "#012d50" }}
                >
                  Custom Integrations
                </h4>
                <ul>
                  <li>Connect ServiceNow with ERP, CRM, and enterprise apps</li>
                  <li>Automate workflows across multiple business systems</li>
                  <li>Ensure real-time, secure data exchange</li>
                  <li>Build scalable integrations tailored to your needs</li>
                </ul>
                {/* <p className="text-center">{item.desc}</p> */}
              </div>
            </div>
          </div>
        </div>
        <Image src={shape_1} alt="shape" className="lazy-img shapes shape_01" />
        <Image src={shape_2} alt="shape" className="lazy-img shapes shape_02" />
      </div>

      <section className="py-5 text-center service-details">
        <div className="container details-meta">
          <h3 className="fw-bold mb-4 pb-4">One Platform, Any Industry</h3>
          <div className="row g-4 justify-content-center">
            {industries.map((industry, index) => (
              <div className="col-6 col-md-4 col-lg-3" key={index}>
                <div className="industry-card flex-md-row flex-column">
                  <div className="industry-icon">
                    <Image
                      src={industry.icon}
                      alt={industry.name}
                      width={50}
                      height={50}
                    />
                  </div>
                  <p className="industry-name">{industry.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* card starts from here  */}
      <div className="block-feature-six service-details bg-two position-relative pt-50 lg-pt-60 pb-80 lg-pb-40">
        <div className="container details-meta">
          <div className="row gx-lg-5">
            <div className="col-lg-12">
              <div className="row">
                <div className="title-one">
                  {/* <div className="upper-title">Core aspects of</div> */}
                  <h3 className="text-center pb-50">
                    An Outline of Our A-to-Z ServiceNow Services{" "}
                  </h3>
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

      {/* card starts from here  */}
      <div className="block-feature-six service-details bg-white position-relative pt-50 lg-pt-40 pb-20 lg-pb-20">
        <div className="container details-meta">
          <div className="row gx-lg-5">
            <div className="col-lg-12">
              <div className="row">
                <div className="title-one">
                  {/* <div className="upper-title">Core aspects of</div> */}
                  <h3 className="text-center pb-4">
                    ServiceNow Capability by the Numbers
                  </h3>
                </div>
                {/* <p className="text-lg text-dark mb-35 py-3 md-mb-30">
                  Right here what you need
                </p> */}
              </div>
            </div>
            <div className="col-md-12 m-auto md-mt-50">
              <Image
                src={digital2}
                alt="screen"
                className="lazy-img w-full h-auto m-auto rounded"
              />
            </div>
          </div>
        </div>
      </div>
      {/* card end */}

      {/* testimonial four area start */}
      <FeedbackFour spacing="mt-80 lg-mt-40" />
      {/* testimonial four area end */}
    </>
  );
};

export default ServicenNowlpsection;
