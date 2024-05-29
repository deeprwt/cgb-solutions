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

import bg_image from "@/assets/images/solutions/mendix.jpg";
import portfolio1 from "@/assets/images/solutions/oracle/portfolio1.jpg";
import portfolio2 from "@/assets/images/solutions/oracle/portfolio2.jpg";
import portfolio3 from "@/assets/images/solutions/oracle/portfolio3.png";
import TextFeatureTwo from "../text-feature/text-feature-two";

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

const OracleSection = ({ cls }: { cls?: string }) => {
  const service_items = service_data.filter((s) => s.page === "oracle");
  return (
    <>
      {/* first section starts from here  */}
      <div className="text-feature-one service-details pt-80 lg-pt-80 pb-80 lg-pb-80">
        <div className="container">
          <div className="row align-items-center details-meta">
            <div className="title-one">
              {/* <div className="upper-title text-center">Oracle Capability</div> */}
              <h2 className="text-center">Oracle Capability</h2>
              <p className="text-lg  px-4 mb-35 md-mb-30">
                <b>CGB Solutions</b> maintains an experienced and dedicated
                Oracle Enterprise Application Practice to provide high quality,
                yet cost effective, accelerated solutions to our growing
                customer base across multiple geographies and industries. <br />
                Our services provide you with strategic differentiation and
                operational superiority. <br />
                Leverage our experience and methodologies to maximize return on
                investments for your oracle applications.
              </p>
            </div>
            <div className="col-xl-6 col-lg-6 wow fadeInLeft">
              <Image
                src={img1}
                layout="responsive"
                alt="About us"
                className="w-100 h-auto"
              ></Image>
            </div>
            <div className="col-xl-6 col-lg-6 wow fadeInRight">
              {/* <h3 className="fw-bold text-center mt-20 mb-15">Studio (Web)</h3> */}
              <Image
                src={img2}
                layout="responsive"
                alt="About us"
                className="w-100 h-auto"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      {/* first section Ends from here  */}
      {/* card starts from here  */}
      <div className="block-feature-six service-details bg-two position-relative pt-80 lg-pt-60 pb-80 lg-pb-40">
        <div className="container details-meta">
          <div className="row gx-lg-5">
            <div className="col-lg-12">
              <div className="row justify-content-center">
                <div className="title-one">
                  {/* <div className="upper-title">Core aspects of</div> */}
                  <h2 className="mb-80 text-center">Solution Snapshot</h2>
                  <p className="text-lg  px-4 mb-35 md-mb-30">
                    CGB offers a comprehensive range of services built around
                    Oracle global business units, technology acquisitions and
                    new releases of applications in align with Oracle product
                    direction and technology roadmap.
                  </p>
                  <p className="text-lg  px-4 mb-35 md-mb-30">
                    These services focus on implementing lean, agile and mature
                    business processes, deploying scalable business networks,
                    helping customers with real time information and insight.
                  </p>
                </div>
                {service_items.map((item, i) => (
                  <div
                    key={item.id}
                    className="col-md-4 d-flex wow fadeInUp"
                    data-wow-delay={`0.${i}s`}
                  >
                    <div className="card-style-eight rounded-5 vstack tran3s w-100 mb-30">
                      <div className="d-flex align-items-center align-self-center">
                        <Image
                          src={item.icon}
                          alt="icon"
                          className="lazy-img"
                          width={70}
                          height={70}
                        />
                      </div>
                      {/* <h4 className="fw-bold mt-30 mb-20 text-center">
                        {item.title}
                      </h4> */}
                      <p className="fw-semibold text-center mb-0 mt-30">
                        {item.desc}
                      </p>
                      {/* <Link href="/service-details" className="stretched-link"></Link> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Image src={shape_1} alt="shape" className="lazy-img shapes shape_01" />
        <Image src={shape_2} alt="shape" className="lazy-img shapes shape_02" />
      </div>
      {/* card end */}

      <div className="text-feature-seven mt-80 lg-mt-80 service-details">
        <div className="container">
          <div className="border-bottom mt-40 pb-50 sm-pb-30 details-meta">
            <div className="row">
              <div className="title-one lg-mb-10 wow fadeInUp">
                <h2>Service Portfolio</h2>
              </div>
              <p className="text-lg text-dark mb-30 lg-mb-10">
                Discover Our Range of Expert Services Tailored to Meet Your
                Needs
              </p>
              <div className="col-lg-4 d-flex wow fadeInUp">
                <CardItem
                  icon={portfolio1}
                  title="Advisory Services"
                  subtitle="Health Checks around existing
                  environment.
                  License Reselling
                  Training & Documentation  Upgrade Assessment to New Releases
                  "
                />
              </div>
              <div
                className="col-lg-4 d-flex wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <CardItem
                  icon={portfolio2}
                  title="Core Services"
                  subtitle="Implementations  Rollouts – Global and Local
                  Upgrades
                  Application Management Support  Legacy Migration and Modernization
                  Business Process Re-Engineering
                  "
                />
              </div>
              <div
                className="col-lg-4 d-flex wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <CardItem
                  icon={portfolio3}
                  title="Extended Services"
                  subtitle="Master data Management  Custom Enhancements  Testing Services
                  Infrastructure Management Support  Integration Services
                  Data Centre Hosting Services
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <TextFeatureTwo />

    </>
  );
};

export default OracleSection;
