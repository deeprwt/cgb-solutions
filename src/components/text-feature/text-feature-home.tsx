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
        <div className="text-feature-one service-details mt-150 lg-mt-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6 wow fadeInLeft">
                <div className="title-one details-meta">
                  <div className="upper-title">About Us</div>
                  <h3>Where Technology Meets Excellence</h3>
                </div>
                <p className="text-lg">
                Experience the extraordinary with CGB Solutions. We innovate relentlessly, 
                transforming challenges into seamless solutions for unparalleled client excellence. 
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
              <div className="col-xl-7 col-lg-6 wow fadeInRight">
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
            <div className="counter-wrapper lg-mt-20 lg-mb-20">
              <div className="row">
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
