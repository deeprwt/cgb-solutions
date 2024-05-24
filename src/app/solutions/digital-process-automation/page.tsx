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

import icons from "@/assets/images/icon/icon_09.svg";
import icon_2 from "@/assets/images/icon/icon_10.svg";
import icon_3 from "@/assets/images/icon/icon_11.svg";
import shape from "@/assets/images/shape/shape_05.svg";
import about from "@/assets/images/assets/screen_14.png";
import mission from '@/assets/images/icon/icon_1021.png';
import vision from '@/assets/images/icon/icon_1023.png';

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
  title: "Digital Process Automation - CGB's",
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
            title="Digital Process Automation"
            subtitle="To achieve innovation, excellence, and ingenuity"
            page="Digital Process Automation"
            // // shape={shape}
            bg_img={service_bg}
            style_2={true}
            cls="me-xl-4"
          />
          {/* breadcrumb end */}

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
        </main>

        {/* footer start */}
        {/* <FooterThree style_2={true} /> */}
        <FooterOne />
        {/* footer end */}
      </div>
                    {/* add tidio scritp for chat bot */}
                    <script src="//code.tidio.co/ohsdb1pchgfjw1yfgmpk8nx3haysxugt.js" async></script>
        {/* add tidio scritp for chat bot */}
    </Wrapper>
  );
};

export default Vision;
