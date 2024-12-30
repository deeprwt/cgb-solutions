import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// internal
import service_img from "@/assets/images/media/vision.jpg";
import icon_1 from "@/assets/images/icon/icon_72.svg";
import icon_2 from "@/assets/images/icon/icon_73.svg";
import icon_3 from "@/assets/images/icon/icon_74.svg";
import icon_4 from "@/assets/images/icon/icon_75.svg";
import icon_5 from "@/assets/images/icon/icon_76.svg";
import icon_6 from "@/assets/images/icon/icon_77.svg";
import icon_7 from "@/assets/images/icon/icon_78.svg";
import icon_8 from "@/assets/images/icon/icon_79.svg";
import icon_9 from "@/assets/images/icon/icon_80.svg";
import icon_10 from "@/assets/images/icon/icon_81.svg";
import icon_11 from "@/assets/images/icon/icon_82.svg";
import icon_12 from "@/assets/images/icon/icon_83.svg";
import icon_13 from "@/assets/images/icon/icon_84.svg";
import ils_icon from "@/assets/images/assets/ils_03.svg";
import SideBar from "./side-bar";
import ImgGallery from "../gallery/img-gallery";

// CardItem
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
    <div className="card-style-sixteen text-center mt-40">
      <div className="icon m-auto tran3s rounded-circle d-flex align-items-center justify-content-center">
        <Image src={icon} alt="icon" className="lazy-img" />
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
const OurCompanySection = () => {
  return (
    <>
      <div className="service-details mt-150 lg-mt-80 mb-100 lg-mb-80">
        <div className="container">
          <div className="row">
            <div className="col-xxl-9 col-lg-9 order-lg-1">
              <div className="details-meta ps-xxl-5 ps-xl-3 pb-30">
                <h2>Our Journey: Shaping Success with Global IT Consulting Service</h2>

                <p>
                At <b>CGB Solutions</b>, innovation is more than a promise; it's our essence. We are an <b>IT services leader</b>, delivering transformative solutions that blend unparalleled talent with cutting-edge technology.
                </p>
                <p>
                  As we forge ahead, the spirit of innovation is not confined to
                  our internal processes alone. We strive to create an ecosystem
                  where our clients experience the tangible benefits of
                  technological advancements, making their interaction with us
                  not just a service but a seamless, convenient experience.
                </p>
                <p>
                  At CGB Solutions, innovation is not just a commitment;
                  it&apos;s a way of life. We are driven by the belief that
                  convenience is the cornerstone of exceptional service
                  delivery, and we tirelessly work towards ensuring that our
                  clients not only receive solutions but experience the
                  unparalleled convenience that comes with partnering with a
                  forward-thinking, innovative organization.
                </p>
                {/* <div className="img-meta mb-60 lg-mb-40">
                <Image src={service_img} alt="service_img" className="lazy-img w-100 rounded-4" 
                style={imgStyle}/>
              </div> */}
              </div>
              <div className="details-meta ps-xxl-5 ps-xl-3 pb-30">
                <h2>Our Vision</h2>
                <p>
                  We aspire to be the visionary of a future where the seamless
                  integration of unparalleled talent and cutting-edge technology
                  not only redefines success for businesses but sets an entirely
                  new standard for global excellence
                </p>
                {/* <p>Our dedicated risk and compliance consulting team assists clients in transforming uncertainty into advantageous prospects. We work collaboratively with organizations to identify and leverage the potential within their risk and compliance functions, enabling them to thrive in an ever-changing business landscape.</p> */}
                <div className="img-meta mb-60 lg-mb-40">
                  <Image
                    src={service_img}
                    alt="service_img"
                    className="lazy-img w-100 rounded-4"
                    style={imgStyle}
                  />
                </div>
              </div>
              <div className="details-meta ps-xxl-5 ps-xl-3 pb-30">
                {/* <div className="upper-title"></div> */}
                <h2>Our Mission</h2>
                <p>
                We are on a relentless mission to shatter the ordinary, empowering businesses with extraordinary staffing and technology solutions. At CGB Solutions, we don&apos;t just adapt to change; we sculpt it, ensuring our clients lead the way in innovation and triumph.
                </p>

                {/* <div className="img-meta mb-60 lg-mb-40">
                <Image src={service_img} alt="service_img" className="lazy-img w-100 rounded-4" 
                style={imgStyle}/>
              </div> */}
              </div>
              <div className="details-meta ps-xxl-5 ps-xl-3">
                <div className="upper-title">Morales and Values That Make Legacies</div>
                <h2>Our Culture</h2>
                <p>
                  Corporate culture is defined by practices and values that
                  reflect the relationship between management and employees. It
                  determines how the organization conducts its business. Vision,
                  values, practices, people, and geographies are the building
                  blocks of any culture. A distinct culture and a thriving
                  organization need all these elements to come together. <br />
                  <br />
                  At CGB, an employee-friendly environment is fostered, and
                  various recreational team-building activities are regularly
                  organized. We ensure the workplace is stress-free by indulging
                  in the celebration of all the major global festivals. We have
                  people whose personal values match our corporate values, and
                  as a team, we strive to keep up with our values and aim for
                  excellence.
                </p>

                {/* <div className="img-meta mb-60 lg-mb-40">
                  <Image
                    src={service_img}
                    alt="service_img"
                    className="lazy-img w-100 rounded-4"
                    style={imgStyle}
                  />
                </div> */}
              </div>
            </div>
            <div className="col-xxl-3 col-lg-3 order-last order-lg-2">
              <aside className="md-mt-40">
                <div className="service-nav-item">
                  <SideBar
                    active_data={true}
                    active_data1={false}
                    active_data2={false}
                    active_data3={false}
                    active_data4={false}
                    active_data5={false}
                    active_data6={false}
                    active_data7={false}
                  />
                </div>
              </aside>
            </div>
            {/* <div className="col-xxl-9 col-lg-9 order-lg-3"></div>
            <div className="col-xxl-9 col-lg-9 order-lg-4"></div> */}
          </div>
        </div>
      </div>
      <ImgGallery />
    </>
  );
};

export default OurCompanySection;
