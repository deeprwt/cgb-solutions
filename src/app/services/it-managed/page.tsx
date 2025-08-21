import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
// import FooterThree from "@/layout/footer/footer-three";
import icons from "@/assets/images/icon/icon_09.svg";
import FooterOne from "@/layout/footer/footer-one";
import about_bg from "@/assets/images/media/Aboutbanner.png";
import mission from "@/assets/images/icon/mission.svg";
import vision from "@/assets/images/icon/vision.svg";
import shape from "@/assets/images/shape/shape_05.svg";
import ContactForm from "@/components/forms/contact-form";
import icon_4 from "@/assets/images/assets/ils_07.svg";
import HeroVideoOne from "@/components/hero-banner/hero-video-one";
import TabsData from "@/components/tabs/tabs";
import TabsTwoData from "@/components/tabs/tabstwo";
import TextFeatureHome from "@/components/text-feature/text-feature-home";
import CounterUp from "@/components/common/counter-up";
import WhatsNew from "@/components/home-data/whats-new";
import PartnerLogo from "@/components/partners/partners-logo";
import PartnersLogosTwo from "@/components/partners/partners-logo-2";
import PartnersSliderOne from "@/components/partners/partners-slider-one";
import img1 from "@/assets/images/solutions/Finacle/icon/API-connect.webp";
import img2 from "@/assets/images/solutions/Finacle/icon/Alerts-Solution-icon.svg";
import img3 from "@/assets/images/solutions/Finacle/icon/Analytics-Solution-icon.svg";
import bg_image from "@/assets/images/background/bg-1.jpeg";
import LogoGrid from "@/components/clint-logo/logogrid";

const backImg = {
  backgroundImage: `linear-gradient(rgba(52,55,65,0.68), rgba(52,55,65,0.68)), url('${bg_image.src}')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "scroll",
};

// counter block
function CounterBlock({
  num,
  text,
  title,
  prev_text,
  delay,
  decimal = false,
}: {
  num: number;
  text: string;
  title: string;
  delay?: string;
  prev_text?: string;
  decimal?: boolean;
}) {
  return (
    <div
      className="counter-block-two text-center mt-20 mb-20 wow fadeInUp"
      data-wow-delay={`0.${delay}s`}
    >
      <div className="main-count fw-500 text-dark d-flex justify-content-center">
        {prev_text && prev_text}
        <span className="counter">
          <CounterUp number={num} text={text} decimal={decimal} />
        </span>
      </div>
      <p className="m0 text-md">{title}</p>
    </div>
  );
}

export const metadata: Metadata = {
  title: "IT Managed Services",
  description:
    "Unlock financial growth with CGB Solutions experienced IT consulting & insightful solutions. Navigate your journey with us!",
  keywords: "IT consulting, financial growth, insightful solutions",
};

// card item
function CardItem({
  icon,
  title,
  desc,
  link,
}: {
  icon: StaticImageData;
  title: string;
  desc: string;
  link: string;
}) {
  return (
    <div className="card-style-three d-flex pt-75 lg-pt-40 pb-45 lg-pb-20">
      <Image src={icon} alt="icon" className="lazy-img icon" />
      <div className="ps-4">
        <h4 className="fw-bold mb-20">{title}</h4>
        <p> {desc} </p>
        <Link href={link} className="btn-three icon-link mt-15 md-mb-40">
          <span>Read More</span>
          <Image src={icons} alt="icon" className="lazy-img icon ms-1" />
        </Link>
      </div>
    </div>
  );
}

const AboutUsPage = () => {
  return (
    <Wrapper>
      <style>
        {`
          .counter-block-two span,
          .counter-block-two p {
            color: #fff;
          }
        `}
      </style>

      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <HeroVideoOne />

          <WhatsNew />

          {/* tabs are for solutions start */}
          <TabsTwoData />
          {/* tabs are for solutions start */}
          <div className="full position-relative service-details">
            <div className="overlayStyle"></div>
            <div
              className="container position-relative"
              style={{ zIndex: "1" }}
            >
              <div className="counter-wrapper pt-40 pb-40">
                <div className="row details-meta">
                  <div className="title-one">
                    {/* <div className="upper-title"></div> */}
                    {/* <h3 className="text-center">What&apos;s New</h3> */}
                  </div>
                  <div
                    className="col-md-8 mb-20 mt-20  wow fadeInUp transition delay-150 duration-300 ease-in-out"
                    data-wow-delay="0.0s"
                  >
                    <div className="title-one">
                      <div className="upper-title">Our Solutions</div>
                      <h3 className="">
                        Transform Your Business With Our Solution
                      </h3>
                      <div className="section-btn sm-mt-40">
                        <Link href="/contact" className="btn-five icon-link">
                          <span className="text">Contact Us</span>
                          <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-arrow-up-right"></i>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 mb-20 mt-20  wow fadeInUp "
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
                        Cloud Security
                      </h4>
                      <p className="text-center">
                        Elevate your business with cloud solutions. Harness the
                        power of remote data storage and processing for enhanced
                        efficiency and accessibility.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-md-4 mb-20 mt-20  wow fadeInUp"
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
                        Cyber Security
                      </h4>
                      <p className="text-center">
                        Advanced cybersecurity solutions to protect your
                        organization from evolving cyber threats.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-md-4 mb-20 mt-20  wow fadeInUp "
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
                        Network Infrastructure
                      </h4>
                      <p className="text-center">
                        Secure infrastructure services that ensure the
                        reliability and availability of your critical systems.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-md-4 mb-20 mt-20  wow fadeInUp "
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
                        Data Management
                      </h4>
                      <p className="text-center">
                        Secure and reliable data center services to ensure the
                        protection and availability of your data.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* number counter start  */}
          <div className="text-feature-one service-details" style={backImg}>
            <div className="container">
              <div className="counter-wrapper pt-80 lg-pt-40 pb-80 lg-pb-40 service-details">
                <div className="row">
                  {/* <div className="title-one details-meta text-center">
                    <h3>Your search ends here.</h3>
                    <div className="upper-title">
                      Learn why businesses trust CGB Solutions to power growth
                    </div>
                  </div> */}
                  <div className="col-md-3 col-6">
                    <CounterBlock num={160} text="+" title="Clients" />
                  </div>
                  <div className="col-md-3 col-6">
                    <CounterBlock
                      num={12}
                      text="+"
                      title="Years of Establishment"
                      // prev_text="$"
                      delay="1"
                      // decimal={true}
                    />
                  </div>
                  <div className="col-md-3 col-6">
                    <CounterBlock
                      num={250}
                      text="+"
                      title="Skilled Experts"
                      delay="2"
                    />
                  </div>
                  <div className="col-md-3 col-6">
                    <CounterBlock
                      num={6}
                      text="+"
                      title="Global Delivery Center"
                      // prev_text="$"
                      delay="3"
                      // decimal={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* number counter end */}

          {/* <PartnersSliderOne /> */}
          <LogoGrid />
          <div className="contact-us-section pt-80 pb-80 lg-pt-80" id="contact"  style={{background:"#E3F0FF"}}> 
            <div className="container">
              <div className="position-relative">
                <div className="bg-wrapper light-bg mt-80 lg-mt-40 service-details" style={{padding:"0px"}}>
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="d-flex flex-column flex-lg-column-reverse form-section-style">
                        <div className="title-one text-center text-lg-start  details-meta">
                          <h3>Let&apos;s Transform Your Business Together</h3>
                          <p>
                            Your Trusted IT Solutions & Business Consulting
                            Partner
                          </p>
                          <ul className="list-none">
                            <li>
                              <h4
                                className="fw-bold mt-2 mb-2 text-capitalize"
                                style={{ color: "#012d50" }}
                              >
                                <span className="pr-3">
                                  <i className="bi icon-color bi-trophy"></i>
                                </span>
                                15+ Years of Expertise
                              </h4>
                              <p>
                                We specialize in delivering complex IT and
                                business solutions with precision and speed.
                              </p>
                            </li>
                            <li>
                              <h4
                                className="fw-bold mt-2 mb-2 text-capitalize"
                                style={{ color: "#012d50" }}
                              >
                                <span className="pr-3">
                                  <i className="bi icon-color bi-globe-americas"></i>
                                </span>
                                200+ Clients Across Industries
                              </h4>
                              <p>
                                From high-growth startups to global enterprises
                                — we’ve powered every stage of digital growth.
                              </p>
                            </li>
                            <li>
                              <h4
                                className="fw-bold mt-2 mb-2 text-capitalize"
                                style={{ color: "#012d50" }}
                              >
                                <span className="pr-3">
                                  <i className="bi icon-color bi-person-workspace"></i>
                                </span>
                                75+ Certified Experts In-House
                              </h4>
                              <p>
                                Top 1% talent delivering Microsoft Power
                                Platform, Dynamics 365, ServiceNow, OutSystems,
                                and more.
                              </p>
                            </li>
                            <li>
                              <h4
                                className="fw-bold mt-2 mb-2 text-capitalize"
                                style={{ color: "#012d50" }}
                              >
                                <span className="pr-3">
                                  <i className="bi icon-color bi-rocket-takeoff"></i>
                                </span>
                                End-to-End Business & IT Consulting
                              </h4>
                              <p>
                                We don’t just deliver tech — we build scalable
                                strategies that drive measurable results.
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="form-style-one ps-xl-5 p-4">
                        <h3 className="font-weight-bolder" style={{fontWeight:"700"}}>Book Your Free Consultation</h3>
                        <p>
                          Get a Response Within 24 Business Hours — Guaranteed
                        </p>
                        {/* form start */}

                        <ContactForm />
                        {/* form end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* footer start */}
        {/* <FooterThree style_2={true} /> */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default AboutUsPage;
