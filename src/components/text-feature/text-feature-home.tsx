import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import CounterUp from "../common/counter-up";

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
      className="counter-block-two text-center mt-35 mb-35 wow fadeInUp"
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

const TextFeatureHome = ({ style_2 = false }: { style_2?: boolean }) => {
  return (
    <>
      {!style_2 && (
        <div className="text-feature-one service-details mt-80 lg-mt-80">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 wow fadeInLeft">
                <div className="title-one details-meta">
                  <div className="upper-title">About Us</div>
                  <h3>
                    Your Vision, Our Expertise: Excellence in Global IT
                    Consulting Services
                  </h3>
                </div>
                <p className="text-lg">
                  Experience extraordinary with CGB Solutions, your trusted
                  partner for <b>IT Business Services in India</b> and a leading
                  provider of <b>offshore IT staff augmentation India.</b> We
                  innovate relentlessly, transforming challenges into seamless
                  solutions for unparalleled client excellence by enabling
                  global organizations to{" "}
                  <b>hire remote developers India for US</b> projects and build
                  strong technology teams.
                </p>
                <p className="text-lg">
                  CGB Solutions, a trusted name in the industry, excels in
                  offering cutting-edge <b>IT solutions and services in India,</b>
                  tailored to empower businesses with innovative technologies
                  and strategic expertise. As a premier <b>enterprise IT
                  outsourcing company</b>, we help clients access <b>certified
                  developers from India</b> through flexible engagement models like
                  <b> on-demand remote IT developers</b> and <b>contract developers India
                  for US projects</b>. With proven experience as an <b>IT outsourcing
                  partner for US companies</b>, we deliver <b>digital transformation
                  services India</b> and scalable <b>global technology staffing
                  solutions</b>, enabling organizations to establish a dedicated
                   <b> offshore development team India</b> for faster delivery and
                  optimized cost. Our client-centric approach and commitment to
                  excellence make us the preferred partner for organizations
                  aiming to achieve digital transformation and operational
                  agility in today&apos;s dynamic market.
                </p>
                <div className="d-inline-flex flex-wrap align-items-center">
                  <Link href="/about-us" className="btn-four mt-15 me-4">
                    More About Us
                  </Link>
                  {/* <Link href="/contact" className="btn-three icon-link mt-15">
                    <span>Request a Callback</span>
                    <Image src={icon} alt="icon" className="lazy-img icon ms-1"/>
                  </Link> */}
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 wow fadeInRight">
                {/* <Image src={ab} alt="About us" className="w-100"></Image> */}
                <div className="media-list-item ms-auto pe-xxl-5 pe-4 ps-xxl-5 ps-4 pb-35 md-mt-60 d-flex align-items-end">
                  <ul className="style-none">
                    <li>IT Consulting</li>
                    <li>Workforce Solutions </li>
                    <li>Digital Growth Services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {style_2 && (
        <div className="container">
          <div className="counter-wrapper pt-80 lg-pt-40 pb-80 lg-pb-40 service-details">
            <div className="row">
              <div className="title-one details-meta text-center">
                <h3>Your search ends here.</h3>
                <div className="upper-title">
                  Learn why businesses trust CGB Solutions to power growth
                </div>
              </div>
              <div className="col-md-3 col-6">
                <CounterBlock num={160} text="+" title="Clients" />
              </div>
              <div className="col-md-3 col-6">
                <CounterBlock
                  num={750}
                  text="+"
                  title="Contractor Pool"
                  // prev_text="$"
                  delay="1"
                  // decimal={true}
                />
              </div>
              <div className="col-md-3 col-6">
                <CounterBlock
                  num={250}
                  text="+"
                  title="Staffing Team"
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
      )}
    </>
  );
};

export default TextFeatureHome;
