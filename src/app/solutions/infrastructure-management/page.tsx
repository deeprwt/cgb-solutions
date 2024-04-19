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

export const metadata: Metadata = {
  title: "Infrastructure Management",
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
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Infrastructure Management"
            subtitle="Navigating Your Financial Growth With Experience & Insightful Solutions."
            page="Infrastructure Management"
            bg_img={about_bg}
            // // shape={shape}
            style_2={true}
          />
          {/* breadcrumb end */}

          <div className="text-feature-one mt-80 lg-mt-80 mb-80 lg-mb-80 service-details">
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
                      helping businesses build and manage complete RPA
                      ecosystems, ensuring success every step of the way. Our
                      team of Automation Anywhere experts work with businesses
                      to determine where automation is feasible, and then take
                      care of the hard work so you don&apos;t have to. This way,
                      you can focus on what you&apos;re good at and leave the
                      tedious tasks to the Bots.
                    </p>
                    {/* <Link href="/contact" className="btn-three icon-link mt-15 md-mb-40">
                    <span>Request a Callback</span>
                    <Image src={icon} alt="icon" className="lazy-img icon ms-1"/>
                  </Link> */}
                  </div>
                  <div className="col-lg-6 ms-auto wow fadeInRight">
                    <CardItem
                      icon={vision}
                      link="/solutions/outsystems"
                      title="Our Vision"
                      desc="We aspire to be the visionary of a future where the seamless integration of unparalleled talent and cutting-edge technology not only redefines success for businesses but sets an entirely new standard for global excellence"
                    />
                    <CardItem
                      icon={mission}
                      link="/solutions/mendix"
                      title="Mendix"
                      desc="
                      Mendix is a low-code application development platform that allows users to create custom software without needing extensive coding knowledge. With its intuitive visual interface, users can easily drag and drop components to build and deploy applications quickly. Mendix is ideal for businesses that want to rapidly create software solutions to meet their specific needs, without the time and expense of traditional software development.
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

              {/* <div className="counter-wrapper mt-80 lg-mt-20">
              <div className="row">

              </div>
            </div> */}
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
