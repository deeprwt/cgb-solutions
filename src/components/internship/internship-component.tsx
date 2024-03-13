import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import icon_1 from "@/assets/images/icon/icon_97.svg";
import icon_2 from "@/assets/images/icon/icon_27.svg";
import shape from "@/assets/images/shape/shape_45.svg";
import arrow from "@/assets/images/icon/icon_09.svg";
import business_man from "@/assets/images/assets/businessman_02.png";
import service_data from "@/data/service-data";
import ImgTextOne from "../img-text-feature/img-text-one";
import Finacle5 from "@/assets/images/solutions/Finacle/Fincale-5.jpg";

// img style
const imgStyle = {
  height: "auto",
};
const InternshipComponent = () => {
  const service_items = service_data
    .filter((s) => s.page === "home-5")
    .slice(4, 6);
  return (
    <>

    </>
  );
};
export default InternshipComponent;
