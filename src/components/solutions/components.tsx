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

import bg_image from "@/assets/images/solutions/mendix.jpg";

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
  title: string;
  subtitle: string;
}) {
  return (
    <div className="card-style-sixteen text-center mt-40 md-mt-20">
      <div className="icon m-auto tran3s rounded-circle d-flex align-items-center justify-content-center">
        <Image src={icon} alt="icon" className="lazy-img" />
      </div>
      <h4 className="fw-bold mt-35 md-mt-30 mb-15">{title}</h4>
      <p className="m0 fs-5 lh-base">{subtitle}</p>
    </div>
  );
}
const ComponentsDiv = ({ cls }: { cls?: string }) => {
  const service_items = service_data.filter((s) => s.page === "SolutionSnapshot");
  return (
    <>
      {/* card starts from here  */}
      <div className="block-feature-six service-details bg-two position-relative pt-80 lg-pt-60 pb-80 lg-pb-40">
        <div className="container details-meta">
          <div className="row gx-lg-5">
            <div className="col-lg-12">
              <div className="row ">
                <div className="title-one">
                  {/* <div className="upper-title">Core aspects of</div> */}
                  <h2 className="mb-80">Solution Snapshot </h2>
                  <p className="fw-bold">
                    CGB offers a comprehensive range of services built around
                    Oracle global business units, technology acquisitions and
                    new releases of applications in align with Oracle product
                    direction and technology roadmap. These services focus on
                    implementing lean, agile and mature business processes,
                    deploying scalable business networks, helping customers with
                    real time information and insight.
                  </p>
                </div>
                {service_items.map((item, i) => (
                  <div
                    key={item.id}
                    className="col-md-4 d-flex wow fadeInUp "
                    data-wow-delay={`0.${i}s`}
                  >
                    <div className="card-style-eight rounded-5 vstack tran3s w-100 mb-30 bgnew">
                      <div className="icon d-flex  align-self-left w-25 py-1 px-2 rounded-1 ">
                     <Image
                          src={item.icon}
                          alt="icon"
                          
                          className="lazy-img"
                        /> 
                      </div>
                      <h4 className="fw-bold mb-20 text-center ">
                        {item.title}
                      </h4>
                      <p className="text-center text-white">{item.desc}</p>
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
    </>
  );
};

export default ComponentsDiv;
