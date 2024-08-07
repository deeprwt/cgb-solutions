import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// internal
import { ul_data} from "@/data/ul-data";

import service_data from "@/data/service-data";
import screen_1 from "@/assets/images/assets/screen_04.svg";
import screen_2 from "@/assets/images/assets/screen_05.svg";
import shape from "@/assets/images/shape/shape_06.svg";

// image style
const imageStyle = {
  height: "auto",
};
// props type
type IProps = {
  title?: string;
  subtitle: string;
  img: StaticImageData;
  para?:string;
  subpara?:string;
  cls?: string;
  filter_data: string;
  style_2?: boolean;
};

const ImgTextOne = ({
  title,
  subtitle,
  img,
  filter_data,
  para,
  subpara,
  cls,
  style_2 = false,
}: IProps) => {
  // const filter_ul = ul_data.filter((s) => s.page === "graphic");
  return (
    <>
      {!style_2 && (
        <div className="service-details pt-40 pb-40">
          <div className="container">
            <div className={`row ${cls}`}>
              <div className="title-one details-meta pb-40 ps-xxl-5 ps-xl-3">
                <h3 className="text-center pb-5">{title}</h3>
                <p className=" text-center">
                  {para}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-7 col-lg-7 d-flex align-items-center order-lg-last wow fadeInRight">
                <div className="details-meta ps-xxl-5 ps-xl-3">
                  <h3>{subtitle}</h3>
                  <p className="">{subpara}</p>
                  <ul className="style-none list-item pb-20">
                    {ul_data
                      .filter((s) => s.page === `${filter_data}`)
                      .map((item, i) => (
                        <li key={item.id} className="m-0 pb-2 lh-base">
                          {item.ul}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <div className="col-xxl-5 col-lg-5 order-lg-first wow fadeInLeft">
                <Image
                  src={img}
                  alt="screen"
                  className="lazy-img w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {style_2 && (
        <div className="service-details pt-40 pb-40">
          <div className="container">
            <div className="row">
              <div className="col-xxl-7 col-lg-7 d-flex align-items-center  order-last order-md-first wow fadeInRight">
                <div className="details-meta ps-xxl-5 ps-xl-3">
                  <h3>{subtitle}</h3>
                  <p className="">{subpara}</p>
                  <ul className="style-none list-item pb-20">
                    {ul_data
                      .filter((s) => s.page === `${filter_data}`)
                      .map((item, i) => (
                        <li key={item.id} className="m-0 pb-2 lh-base">
                          {item.ul}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <div className="col-xxl-5 col-lg-5 order-first order-md-last wow fadeInLeft d-flex align-items-center ">
                <Image
                  src={img}
                  alt="screen"
                  className="lazy-img w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImgTextOne;
