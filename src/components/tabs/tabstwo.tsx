import React from "react";
import Link from "next/link";
import FaqItem from "../faq/faq-item";
import Image from "next/image";

import OracleImg from "@/assets/images/cgbhome/cgb-meta.jpg";
import icon from "@/assets/images/icon/icon_09.svg";
import img1 from "@/assets/images/cgbhome/services/Cyber Security Solutions.jpg";
import img2 from "@/assets/images/cgbhome/services/2.jpg";
import img3 from "@/assets/images/cgbhome/services/Managed Services.jpg";
import img4 from "@/assets/images/cgbhome/services/Application Security.jpg";
import img5 from "@/assets/images/cgbhome/services/Data Centre Service.jpg";
import img6 from "@/assets/images/cgbhome/services/6.jpg";
import img7 from "@/assets/images/cgbhome/services/Infrastructure Services.jpg";
import img8 from "@/assets/images/cgbhome/services/8.jpg";
import img9 from "@/assets/images/cgbhome/services/devops.jpg";
import img10 from "@/assets/images/cgbhome/services/10.jpg";

const TabsTwoData = () => {
  return (
    <div className="faq-section-three light-bg border-top pt-120 lg-pt-80 pb-150 lg-pb-80 service-details">
      <div className="container">
        <div className="title-one text-center mb-60 details-meta">
          <div className="upper-title">Our Services</div>
          <h2>Expert Services for All Your Needs</h2>
        </div>
        <nav>
          <div
            className="nav nav-tabs justify-content-center flex-column flex-md-row"
            id="nav-tab"
            role="tablist"
          >
            <button
              className="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#nav-oracle"
              type="button"
              role="tab"
              aria-selected="true"
              tabIndex={-1}
            >
              Cyber Security Solutions
            </button>
            <button
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#nav-finacle"
              type="button"
              role="tab"
              aria-selected="false"
              tabIndex={-1}
            >
              Managed Services
            </button>
            <button
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#nav-servicenow"
              type="button"
              role="tab"
              aria-selected="false"
              tabIndex={-1}
            >
              Application Security
            </button>
            <button
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#nav-lowcode"
              type="button"
              role="tab"
              aria-selected="false"
              tabIndex={-1}
            >
              Data Centre Service
            </button>
            <button
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#nav-salesforce"
              type="button"
              role="tab"
              aria-selected="false"
              tabIndex={-1}
            >
              Infrastructure Services
            </button>
            {/* <button
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#nav-devops"
              type="button"
              role="tab"
              aria-selected="false"
              tabIndex={-1}
            >
              Consulting & Services
            </button> */}
          </div>
        </nav>
        <div className="tab-content mt-60 lg-mt-40">
          <div
            className="tab-pane fade show active"
            id="nav-oracle"
            role="tabpanel"
            tabIndex={0}
          >
            <div
              className="accordion accordion-style-one service-details"
              id="accordionOne"
            >
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 wow fadeInLeft">
                  <div className="title-one details-meta pt-4">
                    {/* <div className="upper-title">Services</div> */}
                    <h3>Cyber Security Solutions</h3>
                  </div>
                  <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20">
                    Cybersecurity solutions safeguard digital assets and data
                    from evolving threats, ensuring the resilience and integrity
                    of digital ecosystems
                  </p>
                  {/* <div className="d-inline-flex flex-wrap align-items-center pb-4">
                    <Link
                      href="/solutions/oracle"
                      className="btn-three icon-link mt-15"
                    >
                      <span>Read More</span>
                      <Image
                        src={icon}
                        alt="icon"
                        className="lazy-img icon ms-1"
                      />
                    </Link>
                  </div> */}
                </div>
                <div className="col-xl-6 col-lg-6 wow fadeInRight">
                  <Image
                    src={img1}
                    layout="responsive"
                    width={1707}
                    height={1138}
                    alt="About us"
                    className="w-100"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-finacle"
            role="tabpanel"
            tabIndex={0}
          >
            <div
              className="accordion accordion-style-one service-details"
              id="accordionTwo"
            >
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6">
                  <div className="title-one details-meta pt-4">
                    {/* <div className="upper-title">Services</div> */}
                    <h3>Managed Services</h3>
                  </div>
                  <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20">
                 In Managed services, we provide organizations with our expertise and support to optimize and maintain our customers IT infrastructure, allowing them to focus on their core business objectives and leave the hard part to us.
                  </p>
                  {/* <div className="d-inline-flex flex-wrap align-items-center pb-4">
                    <Link
                      href="/solutions/finacle"
                      className="btn-three icon-link mt-15"
                    >
                      <span>Read More</span>
                      <Image
                        src={icon}
                        alt="icon"
                        className="lazy-img icon ms-1"
                      />
                    </Link>
                  </div> */}
                </div>
                <div className="col-xl-6 col-lg-6">
                  <Image
                    src={img3}
                    layout="responsive"
                    width={1707}
                    height={1138}
                    alt="About us"
                    className="w-100"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-servicenow"
            role="tabpanel"
            tabIndex={0}
          >
            <div
              className="accordion accordion-style-one service-details"
              id="accordionThree"
            >
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6">
                  <div className="title-one details-meta pt-4">
                    {/* <div className="upper-title">Services</div> */}
                    <h3>Application Security</h3>
                  </div>
                  <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20">
                    Application security, we encompass measures and practices to protect software and digital applications from vulnerabilities and cyber threats, safeguarding data and user trust.
                  </p>
                  {/* <div className="d-inline-flex flex-wrap align-items-center pb-4">
                    <Link
                      href="/solutions/servicenow"
                      className="btn-three icon-link mt-15"
                    >
                      <span>Read More</span>
                      <Image
                        src={icon}
                        alt="icon"
                        className="lazy-img icon ms-1"
                      />
                    </Link>
                  </div> */}
                </div>
                <div className="col-xl-6 col-lg-6">
                  <Image
                    src={img4}
                    layout="responsive"
                    width={1707}
                    height={1138}
                    alt="About us"
                    className="w-100"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-lowcode"
            role="tabpanel"
            tabIndex={0}
          >
            <div
              className="accordion accordion-style-one service-details"
              id="accordionFour"
            >
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6">
                  <div className="title-one details-meta pt-4">
                    {/* <div className="upper-title">Services</div> */}
                    <h3>Data Centre Service</h3>
                  </div>
                  <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20">
                   Data centre services, we offer secure and scalable infrastructure and management solutions for housing, processing, and protecting digital data and application.
                  </p>
                  {/* <div className="d-inline-flex flex-wrap align-items-center p-4">
                    <Link
                      href="/solutions/outsystems"
                      className="btn-three icon-link mt-15"
                    >
                      <span>Outsystems</span>
                      <Image
                        src={icon}
                        alt="icon"
                        className="lazy-img icon ms-1"
                      />
                    </Link>
                  </div> */}
                  {/* <div className="d-inline-flex flex-wrap align-items-center p-4">
                    <Link
                      href="/solutions/mendix"
                      className="btn-three icon-link mt-15"
                    >
                      <span>Mendix</span>
                      <Image
                        src={icon}
                        alt="icon"
                        className="lazy-img icon ms-1"
                      />
                    </Link>
                  </div> */}
                </div>
                <div className="col-xl-6 col-lg-6">
                  <Image
                    src={img5}
                    layout="responsive"
                    width={1707}
                    height={1138}
                    alt="About us"
                    className="w-100"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-salesforce"
            role="tabpanel"
            tabIndex={0}
          >
            <div
              className="accordion accordion-style-one service-details"
              id="accordionFive"
            >
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6">
                  <div className="title-one details-meta pt-4">
                    {/* <div className="upper-title">Services</div> */}
                    <h3>Infrastructure Services</h3>
                  </div>
                  <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20">
                    In infrastructure services, we provide the foundation for IT operations, encompassing hardware, networking, and cloud resources to support the efficient and reliable functioning of digital systems.
                  </p>
                  {/* <div className="d-inline-flex flex-wrap align-items-center pb-4">
                    <Link href="/contact" className="btn-three icon-link mt-15">
                      <span>Read More</span>
                      <Image
                        src={icon}
                        alt="icon"
                        className="lazy-img icon ms-1"
                      />
                    </Link>
                  </div> */}
                </div>
                <div className="col-xl-6 col-lg-6">
                  <Image
                    src={img7}
                    layout="responsive"
                    width={1707}
                    height={1138}
                    alt="About us"
                    className="w-100"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-devops"
            role="tabpanel"
            tabIndex={0}
          >
            <div
              className="accordion accordion-style-one service-details"
              id="accordionSix"
            >
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6">
                  <div className="title-one details-meta pt-4">
                    {/* <div className="upper-title">Services</div> */}
                    <h3>DevOps</h3>
                  </div>
                  <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20">
                    At CGB, we are your trusted partner in accelerating your
                    software development lifecycle through cutting-edge DevOps
                    practices. Our DevOps services seamlessly integrate
                    development and operations, ensuring faster time-to-market,
                    enhanced collaboration, and continuous innovation.
                  </p>
                  <div className="d-inline-flex flex-wrap align-items-center pb-4">
                    <Link href="/contact" className="btn-three icon-link mt-15">
                      <span>Read More</span>
                      <Image
                        src={icon}
                        alt="icon"
                        className="lazy-img icon ms-1"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <Image
                    src={img9}
                    layout="responsive"
                    width={1707}
                    height={1138}
                    alt="About us"
                    className="w-100"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsTwoData;
