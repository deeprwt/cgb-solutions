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
import icon_1 from "@/assets/images/icon/icon_82.svg";
import icon_2 from "@/assets/images/icon/icon_83.svg";

// starting new icon

import icon_100 from "@/assets/images/icon/icon_100.png";
import icon_101 from "@/assets/images/icon/icon_1000.png";
import icon_1001 from "@/assets/images/icon/icon_1001.png";
import icon_1002 from "@/assets/images/icon/icon_1002.png";
import icon_1003 from "@/assets/images/icon/icon_1003.png";
import icon_1004 from "@/assets/images/icon/icon_1004.png";
import icon_1005 from "@/assets/images/icon/icon_1005.png";
import icon_1006 from "@/assets/images/icon/icon_1006.png";
import icon_1007 from "@/assets/images/icon/icon_1007.png";

// starting new icon

import icon_6 from "@/assets/images/icon/icon_67.svg";
import shape from "@/assets/images/shape/shape_05.svg";
import automation1 from "@/assets/images/solutions/automation/automation1.png";
import automation2 from "@/assets/images/solutions/automation/automation2.png";
import automation3 from "@/assets/images/solutions/automation/automation3.png";
import img1 from "@/assets/images/solutions/automation/1.png";
import img2 from "@/assets/images/solutions/automation/2.png";
import img3 from "@/assets/images/solutions/automation/3.png";
import img4 from "@/assets/images/solutions/automation/4.png";

// CardItemImg
function CardItemImg({ icon }: { icon: StaticImageData }) {
  return (
    <div className="card-style-sixteen text-center mt-40">
      <div className=" m-auto d-flex align-items-center justify-content-center">
        <Image src={icon} alt="icon" className="lazy-img" />
      </div>
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
  subtitle2,
}: {
  icon: StaticImageData;
  title: string;
  subtitle: string;
  subtitle2?: string;
}) {
  return (
    <div className="card-style-sixteen text-center mt-40 md-mt-20 md-mb-20 mb-40">
      <div className="m-auto tran3s rounded-circle d-flex align-items-center justify-content-center">
        <Image src={icon} alt="icon" width={70} height={70} className="h-auto lazy-img" />
      </div>
      <h4 className="fw-bold mt-35 md-mt-30 mb-15">{title}</h4>
      <p className="m0 fs-5 lh-base">{subtitle}</p>
      <p className="m0 fs-5 lh-base">{subtitle2}</p>
    </div>
  );
}

const AutomationAnywhereSecton = ({ cls }: { cls?: string }) => {
  const service_items = service_data.filter(
    (s) => s.page === "automationanywhere"
  );
  return (
    <>
      {/* starts from here  */}
      <div className="text-feature-one service-details pt-80 lg-pt-80 pb-80 lg-pb-80">
        <div className="container">
          <div className="row align-items-center details-meta">
            <h3 className="text-center">
              RPA Journey with Automation Anywhere
            </h3>
            <div className="col-xxl-5 col-md-5 wow fadeInLeft">
              <Image
                src={automation2}
                alt="screen"
                className="lazy-img w-full h-auto rounded"
              />
            </div>
            <div className="col-xxl-7 col-md-7 wow fadeInRight">
              <div className="details-meta ps-xxl-5 ps-xl-3">
                <p className="text-lg">
                  Automation Anywhere is one of the most popular RPA vendors
                  offering powerful and user-friendly RPA capabilities to
                  execute rules-based business processes by observing human
                  digital actions. Automation Anywhere is a Cloud-based
                  management system that includes a Control Room to operate Bots
                  end-to-end, round the clock, non stop, much faster and with
                  100 % accuracy for companies.
                </p>
                <p className="text-lg">
                  CGB Solution is a preferred Automation Anywhere consulting
                  partner for small and large enterprises. We specialize in
                  helping businesses build and manage complete RPA ecosystems,
                  ensuring success every step of the way. Our team of Automation
                  Anywhere experts work with businesses to determine where
                  automation is feasible, and then take care of the hard work so
                  you don&apos;t have to. This way, you can focus on what
                  you&apos;re good at and leave the tedious tasks to the Bots.
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
                  <h3 className="text-center">
                    Robotic Process Automation (RPA)
                  </h3>
                </div>
                <p className="text-lg text-center mb-35 py-3 md-mb-30">
                  Robotic Process Automation (RPA) accelerates digital
                  transformation of organizations by automating their repetitive
                  business processes
                </p>
                <p className="text-center text-dark">
                  RPA liberates employees from manual, repetitive and mundane
                  (and important) tasks creating the capacity for them to do
                  more valuable and engaging work.
                </p>

                <div className="col-12 wow fadeInUp">
                  <Image
                    src={automation3}
                    alt="screen"
                    className="lazy-img w-full m-auto h-auto rounded"
                  />
                </div>
                <div className="line-wrapper position-relative">
                  <div className="row gx-lg-5">
                    <div className="col-xl-3 col-md-6 wow fadeInUp">
                      <CardItem
                        icon={icon_100}
                        title="Process Discovery"
                        subtitle="AI automated discovery"
                        subtitle2="Automated bot building
                        "
                      />
                    </div>
                    <div
                      className="col-xl-3 col-md-6 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <CardItem
                        icon={icon_101}
                        title="Data Understanding"
                        subtitle="Unstructured data API/UI automation"
                        subtitle2="Predict process outcomes"
                      />
                    </div>
                    <div
                      className="col-xl-3 col-md-6 wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <CardItem
                        icon={icon_1001}
                        title="RPA"
                        subtitle="Attended automation"
                        subtitle2="Unattended automation"
                      />
                    </div>
                    <div
                      className="col-xl-3 col-md-6 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <CardItem
                        icon={icon_1002}
                        title="Smart Analytics"
                        subtitle="Operational insights"
                        subtitle2="Business insights"
                      />
                    </div>
                  </div>
                </div>
                <div className="title-one lg-mb-20">
                  <h4 className="text-center pt-4 pb-2 fw-bold">
                    Specialists in RPA Technology
                  </h4>
                </div>
                <div className="col-md-3 wow fadeInUp">
                  <CardItemImg icon={img1} />
                </div>
                <div className="col-md-3 wow fadeInUp" data-wow-delay="0.1s">
                  <CardItemImg icon={img2} />
                </div>
                <div className="col-md-3 wow fadeInUp" data-wow-delay="0.2s">
                  <CardItemImg icon={img3} />
                </div>
                <div className="col-md-3 wow fadeInUp" data-wow-delay="0.3s">
                  <CardItemImg icon={img4} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image src={shape_1} alt="shape" className="lazy-img shapes shape_01" />
        <Image src={shape_2} alt="shape" className="lazy-img shapes shape_02" />
      </div>
      {/* card end */}
      {/* card2 starting */}
      <div className="block-feature-ten  service-details position-relative mb-50 mt-50 lg-mt-80 pb-60 pt-60 lg-pb-60">
        <div className="container details-meta">
          <div className="row align-items-center">
            <div className="col-12 wow fadeInUp">
              <div className="title-one lg-mb-20">
                <h3 className="text-center">
                  Delivery, Methodology and Approach
                </h3>
                <p className="text-lg text-center mb-35 py-3 md-mb-30">
                  Comprehensive delivery methodology and approach to deliver a
                  successful hyperautomation implementation
                </p>
              </div>
            </div>
          </div>
          <div className="position-relative">
            <div className="row gx-lg-5 justify-content-center">
              <div className="col-xl-2 col-md-6 wow fadeInUp">
                <CardItem
                  icon={icon_1003}
                  title="Qualify"
                  subtitle="Qualify the scope and prioritise the work.
                  "
                />
              </div>
              <div
                className="col-xl-2 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <CardItem
                  icon={icon_1004}
                  title="Plan"
                  subtitle="Establish project controls, plan statement of work, confirm resources."
                />
              </div>
              <div
                className="col-xl-2 col-md-6 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <CardItem
                  icon={icon_1005}
                  title="Deliver"
                  subtitle="Deliver iterative cyclic work packages as sprints, Design,
                  Build, Develop, Testing, Review"
                />
              </div>
              <div className="col-xl-2 col-md-6 wow fadeInUp">
                <CardItem
                  icon={icon_1006}
                  title="Transition "
                  subtitle="Increase load, stabilise new way of working, acceptance of work."
                />
              </div>
              <div
                className="col-xl-2 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <CardItem
                  icon={icon_1007}
                  title="Support "
                  subtitle="Continuous improvement, maintain solution health."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card2 end */}
    </>
  );
};

export default AutomationAnywhereSecton;
