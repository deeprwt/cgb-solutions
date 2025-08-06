import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// internal
import certificate1 from "../../../public/pdf/information_security_management_system.jpg";
import certificate2 from "../../../public/pdf/service-management.jpg";
import certificate3 from "../../../public/pdf/it-services.jpg";
import awardsimg from "@/assets/images/company/awards/talentlinkedin.svg";
import awardsimg2 from "@/assets/images/company/awards/grat-work.jpg";
import awardsimg3 from "@/assets/images/company/awards/indian-achive-logo.png";
import icon_10 from "@/assets/images/icon/icon_81.svg";
import SideBar from "./side-bar";

// CardItem
function CardItem({
  icon,
  link,
  title,
  subtitle,
}: {
  icon: StaticImageData;
  link: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="card-style-sixteen text-center mt-40">
      <div className=" m-auto  d-flex align-items-center justify-content-center">
        <Link
          href={link}
          className="w-50 align-items-center justify-content-center d-flex"
          target="_blank"
          rel="noopener noreferrer"
          locale={false}
        >
          <Image src={icon} alt="icon" className="lazy-img" layout="responsive" />
        </Link>
      </div>
      <h4 className="fw-bold mt-35 lg-mt-30 mb-15">{title}</h4>
      <p className="m0">{subtitle}</p>
    </div>
  );
}
// style
const imgStyle = {
  height: "auto",
};
const RecognitionSection = () => {
  return (
    <div className="service-details mt-150 lg-mt-80 mb-100 lg-mb-80">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12 col-lg-12">
            <div className="details-meta ps-xxl-5 ps-xl-3">
              <h2>Our Recognition</h2>
              <p>
                We are proud to be globally certified for our commitment to delivering top-tier IT services, maintaining robust security protocols, and ensuring consistent service excellence. These recognitions reflect our dedication to industry best practices, continual improvement, and customer satisfaction. Our certifications validate the quality, reliability, and integrity that define every aspect of our work.
              </p>
              <div className="line-wrapper pb-30 mt-60 lg-mt-40 mb-70 lg-mb-40">
                <div className="row">
                  <div className="col-md-4 wow fadeInUp">
                    <CardItem
                      icon={certificate1}
                      link={"/pdf/information_security_management_system.pdf"}
                      title="ISO/IEC 27001:2022"
                      subtitle="Recognized for robust information security management practices."
                    />
                  </div>
                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                    <CardItem
                      icon={certificate2}
                      link={"/pdf/service-management.pdf"}
                      title="ISO/IEC 20000-1:2018"
                      subtitle="Certified for delivering high-quality IT service management standards."
                    />
                  </div>
                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                    <CardItem
                      icon={certificate3}
                      link={"/pdf/it-services.pdf"}
                      title="MSME Registered"
                      subtitle="Officially recognized as a certified Micro, Small & Medium Enterprise."
                    />
                  </div>
                </div>
              </div>
              {/* <div className="img-meta mb-60 lg-mb-40">
                <Image src={service_img} alt="service_img" className="lazy-img w-100 rounded-4" 
                style={imgStyle}/>
              </div> */}
            </div>
          </div>
          {/* <div className="col-xxl-3 col-lg-3">
            <aside className="md-mt-40">
              <div className="service-nav-item">
                <SideBar
                  active_data={false}
                  active_data1={false}
                  active_data2={false}
                  active_data3={false}
                  active_data4={true}
                  active_data5={false}
                  active_data6={false}
                  active_data7={false}
                />
              </div>
            </aside>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default RecognitionSection;
