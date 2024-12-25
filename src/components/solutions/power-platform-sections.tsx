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
import icon_1 from "@/assets/images/icon/icon_1027.png";
import icon_2 from "@/assets/images/icon/icon_1028.png";
import img1 from "@/assets/images/solutions/contract-staffing/contract-staffing1.svg";
import img_2 from "@/assets/images/solutions/outsystems/outsystem1.jpg";
import icon_3 from "@/assets/images/icon/icon_1029.png";
import icon_4 from "@/assets/images/icon/icon_65.svg";
import icon_5 from "@/assets/images/icon/icon_66.svg";
import icon_6 from "@/assets/images/icon/icon_67.svg";
import shape from "@/assets/images/shape/shape_05.svg";
import Finacle1 from "@/assets/images/solutions/Finacle/company_overview.jpg";
import Finacle4 from "@/assets/images/solutions/Finacle/wipro_finacle.jpg";
import Finacle5 from "@/assets/images/solutions/Finacle/digitaltransformation.jpg";
import ImgTextOne from "../img-text-feature/img-text-one";

// card item
function CardItem3({
  icon,
  title,
  subtitle,
}: {
  icon: StaticImageData;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="card-style-twelve w-100 text-center mt-30">
      <div className="m-auto tran3s d-flex align-items-center justify-content-center rounded-circle">
        <Image
          src={icon}
          alt="icon"
          className="lazy-img"
          width={70}
          height={70}
        />
      </div>
      <h4 className="fw-bold mt-20 mb-15">{title}</h4>
      <p className="ps-xl-4 pe-xl-4">{subtitle}</p>
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
  title: string;
  subtitle: string;
}) {
  return (
    <div className="card-style-sixteen d-flex mt-60 lg-mt-40 mb-60 lg-mb-10">
      <div className="tran3s rounded-circle d-flex align-items-center justify-content-center">
        <Image
          src={icon}
          alt="icon"
          className="lazy-img"
          width={70}
          height={70}
        />
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
      <div className="m-auto tran3s rounded-circle d-flex align-items-center justify-content-center">
        <Image
          src={icon}
          alt="icon"
          className="lazy-img"
          width={70}
          height={70}
        />
      </div>
      <h4 className="fw-bold mt-35 md-mt-30 mb-15">{title}</h4>
      <p className="m0 fs-5 lh-base">{subtitle}</p>
    </div>
  );
}

const PowerPlatformSection = ({ cls }: { cls?: string }) => {
  const service_items = service_data.filter((s) => s.page === "outsystems");
  return (
    <>
      {/* starts from here  */}
      <div className="text-feature-one service-details pt-80 lg-pt-80 pb-80 lg-pb-80">
        <div className="container">
          <div className="row align-items-center details-meta">
            <div className="col-xl-5 col-lg-6 order-2 order-lg-1 wow fadeInRight">
              <div className="ms-auto pe-xxl-5 pe-4 ps-xxl-5 ps-4 pb-35 md-mt-60 d-flex align-items-end">
                <Image
                  src={img_2}
                  alt="cgb aboutus"
                  className="shap-animate"
                  style={{ height: "auto" }}
                ></Image>
                {/* <ul className="style-none">
                        <li>Mobile app easy management & access</li>
                        <li>Ton’s of features for handle the card easily</li>
                        <li>Strong security system.</li>
                    </ul> */}
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 order-1 order-lg-2 wow fadeInLeft">
              <div className="title-one">
                <div className="upper-title">Lightning Speed With an</div>
                <h3>
                  Empower Your Business with Microsoft Power Platform and
                  Dynamics 365
                </h3>
              </div>
              <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20">
                In today&nbop;s fast-paced digital world, organizations need
                robust solutions to drive efficiency, enhance decision-making,
                and adapt to ever-changing business landscapes. Microsoft Power
                Platform and Dynamics 365 provide the perfect ecosystem to
                empower your business for success. At CGB Solution, we bring you
                unparalleled expertise in leveraging these cutting-edge
                technologies to transform your operations and fuel growth.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Ends from here  */}

      {/*--------------------Img and orderList tag Staring------------------ */}
      <ImgTextOne
        /* Main Heading   */
        img={Finacle1}
        subtitle="Why Choose Microsoft Power Platform?"
        subpara={`The Microsoft Power Platform offers a suite of tools—Power BI, Power Apps, Power Automate, and Power Virtual Agents—designed to unlock the full potential of your data and workflows. With these tools, you can:
        `}
        filter_data="powerplatform-1"
        cls="d-none"
      />
      {/*--------------------Img and orderList tag End------------------ */}

      {/*--------------------Img and orderList tag Staring------------------ */}
      <ImgTextOne
        img={Finacle4}
        subtitle="Revolutionize Business with Dynamics 365"
        subpara="Microsoft Dynamics 365 is a comprehensive suite of intelligent business applications that integrate seamlessly with the Power Platform. These applications help you:"
        filter_data="powerplatform-2"
        style_2={true}
      />
      {/*--------------------Img and orderList tag Staring------------------ */}
      {/*--------------------Img and orderList tag End------------------ */}
      <ImgTextOne
        img={Finacle5}
        subtitle="Why Partner with CGB Solution?"
        subpara="At CGB Solution, we specialize in implementing and customizing Microsoft Power Platform and Dynamics 365 to meet your unique business needs. Our dedicated team of experts ensures a seamless deployment process, providing:"
        filter_data="powerplatform-3"
        cls="d-none"
      />
      {/*--------------------Img and orderList tag End------------------ */}

      {/* starts from here  */}
      <div className="text-feature-one service-details pt-80 lg-pt-80 pb-80 lg-pb-80">
        <div className="container">
          <div className="row align-items-center details-meta">
            <div className="col-lg-12 wow fadeInLeft">
              <div className="title-one">
                {/* <div className="upper-title">Lightning Speed With an </div> */}
                <h3>Unlock Your Business Potential Today</h3>
              </div>
              <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20">
                The integration of{" "}
                <b> Microsoft Power Platform and Dynamics 365</b>
                enables organizations to harness the power of data, automate
                processes, and drive smarter decisions. Partner with CGB
                Solution to embark on a journey of digital transformation. Let
                us help you redefine success in your industry.
                <br /> <br />
                <b>Get started today.</b> Contact us to learn how Microsoft
                Power Platform and Dynamics 365 can revolutionize your business.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Ends from here  */}
    </>
  );
};

export default PowerPlatformSection;
