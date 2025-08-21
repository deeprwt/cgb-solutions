import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterThree from "@/layout/footer/footer-three";
import service_bg from "@/assets/images/media/img_32.jpg";
import FooterOne from "@/layout/footer/footer-one";
import Company from "@/components/services/company";
import VisionSection from "@/components/company/vision-section";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// internal
import bg_image from "@/assets/images/solutions/mendix.jpg";
import icon_4 from "@/assets/images/assets/ils_07.svg";
import icons from "@/assets/images/icon/icon_09.svg";
import icon_2 from "@/assets/images/icon/icon_10.svg";
import icon_3 from "@/assets/images/icon/icon_11.svg";
import shape from "@/assets/images/shape/shape_05.svg";
import about from "@/assets/images/assets/screen_14.png";
import mission from '@/assets/images/icon/icon_1021.png';
import vision from '@/assets/images/icon/icon_1023.png';
import ContactForm from "@/components/forms/contact-form";

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
      <Image src={icon} alt="icon" className="lazy-img" width={70} height={70} />
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

export const metadata: Metadata = {
  title: " Digital Process Automation Solutions | CGB Solutions",
  description : "Enhance efficiency with CGB Solutions' Digital Process Automation services. Our expertise in Automation Anywhere, Outsystems, and Mendix streamlines your business processes for optimal performance.",
  keywords : "Digital Process Automation,Business Process Automation,Automation Anywhere,ServiceNow,Digital Process Automation Services,Business Process Automation Solutions,Automation Anywhere,ServiceNow Integration,digital business automation, automated workflows, business process optimization, digital transformation solutions, automated business systems, productivity improvement strategies, process automation tools, digital workflow design, IT process automation, scalable automation solutions, Services Consulting,ServiceNow,Implementation",
};

const Vision = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Digital Process Automation Solutions"
            subtitle="Drive efficiency and Transform your IT business services with Digital Process Automation"
            page="Digital Process Automation Solutions"
            // // shape={shape}
            bg_img={service_bg}
            style_2={true}
            cls="me-xl-4"
          />
          {/* breadcrumb end */}

          <div className="text-feature-one service-details pt-80 lg-pt-80 pb-80 lg-pb-80">
        <div className="container">
          <div className="row align-items-center details-meta">
            <div className="col-md-12 wow fadeInUp">
              <h3 className="ps-xxl-5 ps-xl-3">
                ServiceNow Services
              </h3>
              <div className="details-meta ps-xxl-5 ps-xl-3">
                <p className="text-lg mb-35 md-mb-30">
                CGB Solutions is a trusted partner for <b>Digital Process Automation Services</b>, specializing in building and managing comprehensive RPA ecosystems with <b>Automation Anywhere</b>. Our expertise ensures businesses can identify automation opportunities, implement tailored solutions, and optimize workflows for efficiency.

                </p>
                <p className="text-lg mb-35 md-mb-30">
                By automating tedious and repetitive tasks, our services free up your workforce to focus on strategic priorities, improving productivity and reducing operational costs. Our team of certified experts ensures seamless integration, scalable automation strategies, and end-to-end support for sustained success.
                </p>
                <p className="text-lg mb-35 md-mb-30">
                <b>Digital Process Automation Services</b> help organizations enhance process efficiency by automating workflows across departments such as finance, HR, and IT. Leveraging tools like Automation Anywhere, CGB Solutions delivers intelligent solutions that drive agility, scalability, and measurable ROI. From process mapping to bot management, our services ensure businesses stay ahead in their digital transformation journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

          {/* service details area start */}
          <div className="text-feature-one mt-80 lg-mt-80 service-details">
            <div className="container">
              <div className="line-wrapper position-relative">
                <div className="row align-items-center">
                  <div className="col-lg-6 wow fadeInLeft">
                    <div className="title-one details-meta">
                      {/* <div className="upper-title">About us</div> */}
                      <h3>Automation Anywhere</h3>
                    </div>
                    <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-30">
                    CGB Solution is a preferred Automation Anywhere consulting
                  partner for small and large enterprises. We specialize in
                  helping businesses build and manage complete RPA ecosystems,
                  ensuring success every step of the way. Our team of Automation
                  Anywhere experts work with businesses to determine where
                  automation is feasible, and then take care of the hard work so
                  you don&apos;t have to. This way, you can focus on what
                  you&apos;re good at and leave the tedious tasks to the Bots.
                    </p>
                    <Link
                      href="/solutions/automation-anywhere"
                      className="btn-three icon-link mt-15 md-mb-40"
                    >
                      <span>Read more</span>
                      <Image
                        src={icons}
                        alt="icon"
                        className="lazy-img icon ms-1"
                      />
                    </Link>
                  </div>
                  <div className="col-lg-6 ms-auto wow fadeInRight">
                    <CardItem
                      icon={vision}
                      link="/solutions/outsystems"
                      title="Outsystems"
                      desc="We aspire to be the visionary of a future where the seamless integration of unparalleled talent and cutting-edge technology not only redefines success for businesses but sets an entirely new standard for global excellence"
                    />
                    <CardItem
                      icon={mission}
                      link="/solutions/mendix"
                      title="Mendix"
                      desc="
                    We are on a relentless mission to shatter the ordinary, empowering businesses with extraordinary staffing and technology solutions. At CGB Solutions, we don't just adapt to change; we sculpt it, ensuring our clients lead the way in innovation and triumph.
                    "
                    />
                  </div>
                </div>
                <Image
                  src={shape}
                  alt="shape"
                  className="lazy-img shapes shape_01"
                />
              </div>
            </div>
          </div>
          {/* service details area end */}
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

export default Vision;
