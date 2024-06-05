import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// internal
import screen from "@/assets/images/assets/screen_15.png";
import icon_1 from "@/assets/images/icon/icon_2030.png";
import icon_2 from "@/assets/images/icon/icon_1023.png";
import icon_3 from "@/assets/images/icon/icon_1031.png";
import icon_4 from "@/assets/images/icon/icon_1032.png";
import icon_5 from "@/assets/images/icon/icon_1033.png";
import icon_6 from "@/assets/images/icon/icon_1034.png";
import icon_7 from "@/assets/images/icon/icon_1035.png";
import icon_8 from "@/assets/images/icon/icon_1036.png";
import screen2 from "@/assets/images/shape/element_3.svg";
import bg_image from "@/assets/images/solutions/mendix/mendix.jpg";

// image style
const imgStyle = {
  height: "auto",
};

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
    <div className="card-style-sixteen w-100 text-center mt-30">
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

const MendixFeature = () => {
  return (
    <>
      {/* starts from here  */}
      <div className="text-feature-one service-details pt-80 lg-pt-80 pb-80 lg-pb-80">
        <div className="container">
          <div className="row align-items-center details-meta">
            <div className="col-xxl-5 col-md-5 wow fadeInLeft order-2 order-lg-1">
              <Image
                src={bg_image}
                alt="screen"
                className="lazy-img w-full h-auto rounded"
              />
            </div>
            <div className="col-xxl-7 col-md-7 wow fadeInRight order-1 order-lg-2">
              <h3 className="ps-xxl-5 ps-xl-3">Low Code Platform</h3>
              <div className="details-meta ps-xxl-5 ps-xl-3">
                <p className="text-lg">
                  Mendix is a low-code application development platform that
                  allows users to create custom software without needing
                  extensive coding knowledge. With its intuitive visual
                  interface, users can easily drag and drop components to build
                  and deploy applications quickly. Mendix is ideal for
                  businesses that want to rapidly create software solutions to
                  meet their specific needs, without the time and expense of
                  traditional software development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Ends from here  */}

      <div className="text-feature-seven mt-40 service-details">
        <div className="container">
          <div className="border-bottom pb-50 sm-pb-30 details-meta">
            <div className="row">
              <div className="title-one lg-mb-10 wow fadeInUp">
                <h3>Features of Mendix</h3>
              </div>
              <p className="text-xl text-dark mb-30 lg-mb-10">
                Exploring the Powerful Capabilities and Benefits of Mendix: A
                Low-Code Development Platform
              </p>
              <div className="col-lg-4 d-flex wow fadeInUp">
                <CardItem
                  icon={icon_1}
                  title="Visual Modeling"
                  subtitle="The platform offers a drag-and-drop visual modeling interface that allows users to easily create data models, workflows, user interfaces, and more."
                />
              </div>
              <div
                className="col-lg-4 d-flex wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <CardItem
                  icon={icon_2}
                  title="Rapid App Development"
                  subtitle="Enable diverse co-creation using a shared visual language and IDEs for efficient, rapid business app development."
                />
              </div>
              <div
                className="col-lg-4 d-flex wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <CardItem
                  icon={icon_3}
                  title="Cloud Hosting"
                  subtitle="WCreate and deploy resilient apps, no expertise needed. Click once to deploy anywhere, with portability and scalability."
                />
              </div>
              <div
                className="col-lg-4 d-flex wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <CardItem
                  icon={icon_4}
                  title="Cross Model Experience"
                  subtitle="Develop visually stunning and smart applications for exceptional cross-modal experiences across touchpoints."
                />
              </div>
              <div
                className="col-lg-4 d-flex wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <CardItem
                  icon={icon_5}
                  title="Collaboration"
                  subtitle="Mendix enables teams to work collaboratively on application development, with features like version control, commenting, and project management."
                />
              </div>
              <div
                className="col-lg-4 d-flex wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <CardItem
                  icon={icon_6}
                  title="Artificial Intelligence"
                  subtitle="Leverage smart applications; seamlessly integrate AI and cognitive services to elevate the effectiveness of your solutions."
                />
              </div>
              <div
                className="col-lg-4 d-flex wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <CardItem
                  icon={icon_7}
                  title="
                Smart Automation"
                  subtitle="Deliver seamless end-to-end process automation with integrated applications that connect people, data, and systems."
                />
              </div>
              <div
                className="col-lg-4 d-flex wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <CardItem
                  icon={icon_8}
                  title="Data Integration"
                  subtitle="Be open and extensible at all levels: platform, models, and apps. Integrate data and logic from any service, system, or source."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MendixFeature;
