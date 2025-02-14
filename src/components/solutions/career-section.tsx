import React from "react";
import Link from "next/link";
import Slider from "react-slick";
// internal
import faq_data from "@/data/faq-data";
import Image, { StaticImageData } from "next/image";
import service_data from "@/data/service-data";
import shape_1 from "@/assets/images/shape/shape_11.svg";
import shape_2 from "@/assets/images/shape/shape_05.svg";
import icon_1 from "@/assets/images/icon/icon_82.svg";
import icon_2 from "@/assets/images/icon/icon_83.svg";
import icon_3 from "@/assets/images/icon/icon_64.svg";
import img1 from "@/assets/images/solutions/oracle/oracle_capibilty.png";
import img2 from "@/assets/images/solutions/oracle/oracle2.png";
import icon_4 from "@/assets/images/assets/ils_07.svg";
import bg_image from "@/assets/images/solutions/mendix.jpg";
import portfolio1 from "@/assets/images/solutions/oracle/portfolio1.jpg";
import portfolio2 from "@/assets/images/solutions/oracle/portfolio2.jpg";
import portfolio3 from "@/assets/images/solutions/oracle/portfolio3.png";
import TextFeatureTwo from "../text-feature/text-feature-two";
import Finacle5 from "@/assets/images/solutions/Finacle/digitaltransformation.jpg";
import Integration from "@/assets/images/solutions/servicenow/Integration.jpg";
import ContactForm from "../forms/contact-form";
import CVForm from "../forms/cv-form";

const backImg = {
  backgroundImage: `url('${bg_image.src}')`,
};

// card item
function CardItem({
  icon,
  title,
  subtitle,
}: {
  icon: StaticImageData;
  title?: string;
  subtitle: string;
}) {
  return (
    <div className="card-style-sixteen text-center mt-40 md-mt-20">
      <div className="m-auto tran3s d-flex align-items-center justify-content-center">
        <Image
          src={icon}
          alt="icon"
          width={300}
          height={300}
          className="lazy-img rounded"
        />
      </div>
      <h4 className="fw-bold mt-35 md-mt-30 mb-15">{title}</h4>
      <p className="m0 fs-5 lh-base">{subtitle}</p>
    </div>
  );
}

// card item
function CardItem2({
  icon,
  title,
  subtitle,
}: {
  icon: StaticImageData;
  title?: string;
  subtitle: string;
}) {
  return (
    <div className="card-style-sixteen text-center mt-40 md-mt-20">
      <div className="icon m-auto tran3s rounded-circle d-flex align-items-center justify-content-center">
        <Image src={icon} alt="icon" className="lazy-img rounded-circle" />
      </div>
      <h4 className="fw-bold mt-35 md-mt-30 mb-15">{title}</h4>
      <p className="m0 fs-5 lh-base">{subtitle}</p>
    </div>
  );
}

const CareerSection = ({ cls }: { cls?: string }) => {
  const service_items = service_data.filter((s) => s.page === "oracle");
  return (
    <>
      {/* first section starts from here  */}
      <div className="text-feature-one service-details pt-80 lg-pt-80 pb-80 lg-pb-80">
        <div className="container">
          <div className="row align-items-center details-meta">
            <div className="title-one">
              {/* <div className="upper-title text-center">Oracle Capability</div> */}
              <h1 className="text-center pb-40">
                Exciting Career Opportunities at CGB Solutions{" "}
              </h1>
              <p className="text-lg  px-4 mb-35 md-mb-30 text-sm-justify">
                At <b>CGB Solutions</b>, we connect skilled professionals with
                top organizations, offering both permanent and contract-based
                roles across diverse industries. As part of our expanding
                recruitment drive, we are actively hiring for the following
                positions:
              </p>
            </div>
            <div className="col-xl-6 col-lg-6 wow fadeInLeft">
              <Image
                src={Finacle5}
                layout="responsive"
                alt="About us"
                className="w-100 h-auto"
              ></Image>
            </div>
            <div className="col-xl-6 col-lg-6 wow fadeInRight">
              {/* <h3 className="fw-bold text-center mt-20 mb-15">Studio (Web)</h3> */}
              <div className="details-meta ps-xxl-5 ps-xl-3">
                <ul className="style-none list-item pb-20">
                  <li className="m-0 pb-2 lh-base">Technical Lead</li>
                  <li className="m-0 pb-2 lh-base">
                    Cloud Engineer - Identity
                  </li>
                  <li className="m-0 pb-2 lh-base">
                    Cloud Engineer - Operating Systems
                  </li>
                  <li className="m-0 pb-2 lh-base">
                    Integration Software Engineer
                  </li>
                  <li className="m-0 pb-2 lh-base">
                    Senior Integration Software Engineer
                  </li>
                </ul>
                <p className="text-lg mb-35 md-mb-30 text-sm-justify">
                  We are looking for dynamic, results-driven professionals ready
                  to contribute their expertise to innovative projects and
                  collaborate with industry leaders. Whether you&apos;re an
                  experienced specialist or seeking the next step in your
                  career, we provide opportunities that foster growth, career
                  progression, and technical excellence. <br />
                  Our streamlined hiring process ensures a seamless experience,
                  connecting you with roles that align with your skills and
                  aspirations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* first section Ends from here  */}
      {/* card starts from here  */}
      <div className="service-details pt-40 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-lg-7 d-flex align-items-center  order-last order-md-first wow fadeInRight">
              <div className="details-meta ps-xxl-5 ps-xl-3">
                <h3>Why Choose CGB Solutions?</h3>
                <p className="">
                  At CGB Solutions, we go beyond recruitment—we help
                  professionals build lasting careers. Our industry expertise
                  and strong network of hiring partners ensure that you work on
                  impactful projects, stay ahead in an evolving job market, and
                  unlock new career possibilities.
                </p>
                <ul className="style-none list-item pb-20">
                  <li className="m-0 pb-2 lh-base">
                    Access to exclusive job opportunities with leading
                    companies.
                  </li>
                  <li className="m-0 pb-2 lh-base">
                    Efficient, hassle-free recruitment process.
                  </li>
                  <li className="m-0 pb-2 lh-base">
                    Expert career guidance at every stage.
                  </li>
                  <li className="m-0 pb-2 lh-base">
                    Opportunities in high-demand technology sectors.
                  </li>
                  <li className="m-0 pb-2 lh-base">
                    A trusted hiring partner for top-tier organizations.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-5 col-lg-5 order-first order-md-last wow fadeInLeft d-flex align-items-center ">
              <Image
                src={Integration}
                alt="screen"
                className="lazy-img w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="contact-us-section">
      <div className="container">
        <div className="position-relative">
          <div className="bg-wrapper">
            <div className="row justify-content-center">
              {/* <div className="col-lg-5">
                <div className="d-flex flex-column flex-lg-column-reverse">
                  <div className="row">
                    <div className="col-md-8 col-6 me-auto ms-auto">
                      <Image
                        src={icon_4}
                        alt="icon"
                        className="lazy-img me-auto ms-auto"
                      />
                    </div>
                  </div>
                  <div className="title-one text-center text-lg-start md-mt-20 mb-70 md-mb-30">
                    <h2>Have inquiry? Reach to out us via message...</h2>
                  </div>
                </div>
              </div> */}
              <div className="col-lg-7 light-bg rounded" style={{padding:"30px"}}>
                <div className="form-style-one" id="cv">
                  {/* form start */}
                  {/* <ContactForm /> */}
                  <CVForm />
                  {/* form end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default CareerSection;
