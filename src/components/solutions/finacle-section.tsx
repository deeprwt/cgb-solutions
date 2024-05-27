import React from "react";
import Link from "next/link";
import Slider from "react-slick";
// internal
import faq_data from "@/data/faq-data";
import Image, { StaticImageData } from "next/image";
import service_data from "@/data/service-data";
import shape_1 from "@/assets/images/shape/shape_11.svg";
import shape_2 from "@/assets/images/shape/shape_05.svg";
import Finacle2 from "@/assets/images/solutions/Finacle/who_we_are.jpg";
import Finacle3 from "@/assets/images/solutions/Finacle/Fincale-3.png";
import Finacle1 from "@/assets/images/solutions/Finacle/company_overview.jpg";
import Finacle4 from "@/assets/images/solutions/Finacle/wipro_finacle.jpg";
import Finacle5 from "@/assets/images/solutions/Finacle/digitaltransformation.jpg";
import Finacle6 from "@/assets/images/solutions/Finacle/Fincale-6.png";
import ImgTextOne from "../img-text-feature/img-text-one";
import DataLoader from "../data-load/finacle-soluions-data";
import FinacleSolutionsSlide from "../new-compo/finacle-solutions-slide";

// internal
import icon from "@/assets/images/icon/icon_09.svg";
import shape from "@/assets/images/shape/shape_16.svg";
import FancyBannerFive from "../fancy-banner/fancy-banner-five";

// image style
const imgStyle = {
  height: "auto",
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

const FinacleSecton = ({ cls }: { cls?: string }) => {
  const service_items = service_data.filter((s) => s.page === "finacle");
  return (
    <>
      {/* starts from here  */}
      <div className="text-feature-one service-details pt-80 lg-pt-80 pb-80 lg-pb-80">
        <div className="container">
          <div className="row align-items-center details-meta">
            <div className="col-xxl-4 col-md-4 order-lg-first wow fadeInLeft">
              <Image
                src={Finacle2}
                alt="screen"
                className="lazy-img w-full h-auto rounded"
              />
            </div>
            <div className="col-xxl-8 col-md-8 order-lg-first wow fadeInRight">
            <div className="details-meta ps-xxl-5 ps-xl-3">
              <h3 className="">Who We Are</h3>
              <p className="text-lg">
                Finacle is an industry leader in digital banking solutions. We
                partner with emerging and established financial institutions to
                inspire better banking. Our cloud-native solution suite and SaaS
                services help banks to engage, innovate, operate, and transform
                better.
              </p>
              <p className="text-lg">
                We are a business unit of CGB Solutions Systems, a wholly-owned
                product subsidiary of Infosys - a global technology leader with
                over USD 15 billion in annual revenues.
              </p>
              <p className="text-lg">
                We are differentiated by our functionally-rich solution suite,
                composable architecture, culture, and entrepreneurial spirit of
                a start-up. We are also known for an impeccable track record of
                helping financial institutions of all sizes drive digital
                transformation at speed and scale.
              </p>
              <p className="text-lg">
                Today, financial institutions in more than 100 countries rely on
                Finacle to help more than a billion people and millions of
                businesses to save, pay, borrow, and invest better.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
      {/* Ends from here  */}

      {/* card starts from here  */}
      <div className="block-feature-six service-details bg-two position-relative pt-50 lg-pt-60 pb-80 lg-pb-40">
        <div className="container details-meta">
          <div className="row gx-lg-5">
            <div className="col-lg-12">
              <div className="row">
                <div className="title-one">
                  {/* <div className="upper-title">Core aspects of</div> */}
                  <h3 className="text-center">What We Offer</h3>
                  <p className="text-lg">
                    Finacle solutions address the core banking, lending, digital
                    engagement, payments, cash management, wealth management,
                    treasury, analytics, AI and blockchain requirements of
                    financial institutions
                  </p>
                  <p className="text-lg">
                    Finacle solutions support various modern and traditional
                    customer engagement channels, enterprise capabilities, line
                    of business components, and business segments, such as
                    Retail, Wealth, Islamic, Business, and Corporate banking.
                  </p>
                  <p className="text-lg">
                    Finacle’s componentized structure allows banks to deploy and
                    upgrade solutions flexibly as per their business priorities.
                    Our comprehensive and versatile suite powers truly digital
                    transformation for financial institutions of all types –
                    traditional or emerging, global or regional, omnichannel or
                    digital-only.
                  </p>
                </div>
                <FinacleSolutionsSlide
                  filter_co="staffing-1"
                  title="Digital Corporate Banking"
                />
                <FinacleSolutionsSlide
                  filter_co="staffing-2"
                  title="Digital Business Engines"
                />
                <FinacleSolutionsSlide
                  filter_co="staffing-3"
                  title="Digital Engagement Suite"
                />
              </div>
            </div>
          </div>
        </div>
        <Image src={shape_1} alt="shape" className="lazy-img shapes shape_01" />
        <Image src={shape_2} alt="shape" className="lazy-img shapes shape_02" />
      </div>
      {/* card end */}

      <div className="block-feature-eight service-details position-relative pt-80 pb-60">
        <div className="container">
          <div className="position-relative">
            <div className="details-meta mb-20 lg-mb-10">
              <h3>Finacle Solutions</h3>
            </div>
            {/* <p className="text-lg mb-45 lg-mb-10">
              Digital agency with top rated talented people provide quality
            </p> */}
            <div className="row">
              <DataLoader />
            </div>
          </div>
        </div>
        <Image
          src={shape}
          alt="shape"
          className="lazy-img shapes shape_01"
          style={imgStyle}
        />
      </div>

      <FancyBannerFive style_4={true} />

      {/*--------------------Img and orderList tag Staring------------------ */}
      <ImgTextOne
        /* Main Heading   */
        img={Finacle1}
        subtitle="Company Overview"
        subpara={`Wipro Limited is a leading technology services and consulting company focused on building innovative solutions that address clients' most complex digital transformation needs. With over 250,000 employees and business partners across 66 countries, Wipro delivers on the promise of helping our customers, colleagues, and communities thrive in an ever-changing world.
        Wipro's Finacle expertise is centered around:
        `}
        filter_data="finacel-1"
        cls="d-none"
      />
      {/*--------------------Img and orderList tag End------------------ */}

      {/*--------------------Img and orderList tag Staring------------------ */}
      <ImgTextOne
        img={Finacle4}
        subtitle="Digital Transformation of
        Indian Co-operative Banks"
        subpara="Wipro led the end-to-end digital transformation and implementation of Finacle Core Banking and allied applications at multiple Co-operative Banks in India. Key client benefits include:"
        filter_data="finacel-2"
        style_2={true}
      />
      {/*--------------------Img and orderList tag Staring------------------ */}
      {/*--------------------Img and orderList tag End------------------ */}
      <ImgTextOne
        img={Finacle5}
        subtitle="Wipro and Finacle"
        subpara="Wipro and Finacle have two decades of strong partnership in implementing Finacle Core Banking Solutions. Highlights include:"
        filter_data="finacel-3"
        cls="d-none"
      />
      {/*--------------------Img and orderList tag End------------------ */}
    </>
  );
};

export default FinacleSecton;
