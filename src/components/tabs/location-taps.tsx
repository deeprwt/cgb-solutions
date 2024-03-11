import React from "react";
import Link from "next/link";

import Image, { StaticImageData } from "next/image";
// internal
import icon_1 from "@/assets/images/icon/icon_90.svg";
import icon_2 from "@/assets/images/icon/icon_91.svg";
import icon_3 from "@/assets/images/icon/icon_92.svg";
import icon_4 from "@/assets/images/assets/ils_07.svg";
import ContactForm from "../forms/contact-form";
function AddressBlock({
  icon,
  title,
  subtitle,
}: {
  icon: StaticImageData;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="address-block-one text-center mb-40 wow fadeInUp">
      <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
        <Image src={icon} alt="icon" className="lazy-img" />
      </div>
      <h5 className="title">{title}</h5>
      <p dangerouslySetInnerHTML={{ __html: subtitle }}></p>
    </div>
  );
}

const LocationTabsData = () => {
  return (
    <div className="faq-section-three pt-40 lg-pt-80 pb-50 lg-pb-80 mt-10 lg-mt-10">
      <div className="container">
        <nav>
          <div
            className="nav nav-tabs justify-content-center light-bg py-2 mw-60"
            id="nav-tab"
            role="tablist"
          >
            <button
              className="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#nav-oracle"
              type="button"
              role="tab"
              aria-selected="true"
              tabIndex={-1}
            >
              India
            </button>
            <button
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#nav-finacle"
              type="button"
              role="tab"
              aria-selected="false"
              tabIndex={-1}
            >
              United Arab Emirates
            </button>
            <button
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#nav-servicenow"
              type="button"
              role="tab"
              aria-selected="false"
              tabIndex={-1}
            >
              United States
            </button>
            <button
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#nav-lowcode"
              type="button"
              role="tab"
              aria-selected="false"
              tabIndex={-1}
            >
              Japan
            </button>
            <button
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#nav-salesforce"
              type="button"
              role="tab"
              aria-selected="false"
              tabIndex={-1}
            >
              Europe
            </button>
            {/* <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-devops" type="button" role="tab" aria-selected="false" tabIndex={-1}>DevOps</button> */}
            {/* <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-account" type="button" role="tab" aria-selected="false" tabIndex={-1}>Account</button> */}
          </div>
        </nav>
        <div className="tab-content mt-20 lg-mt-40">
          <div
            className="tab-pane fade show active"
            id="nav-oracle"
            role="tabpanel"
            tabIndex={0}
          >
            <div className="accordion accordion-style-one" id="accordionOne">
              <div className="row align-items-center">
               {/*----------------------------------------Adding address IND div staring--------------------------------*/}
                <div className="col-xl-12 col-lg-12 wow fadeInLeft">
                  <div className="col-12 m-auto pt-30">
                    <div className="row">
                      <div className="col-md-4">
                        <AddressBlock
                          icon={icon_1}
                          title="Bengaluru"
                          subtitle="46/1, NH 44, Near Krishan Reddy Industrial Area, Kudlu Gate, Hosapalaya, Garvebhavi Palya Bengaluru, Karnataka, 560068"
                        />
                      </div>
                      <div className="col-md-4">
                      <AddressBlock
                          icon={icon_1}
                          title="Mumbai"
                          subtitle="Goregaon, Building 4, North Wing, NESCO IT Park, Western Express Highway, Goregaon East, Mumbai, MH 400063"
                        />
                      </div>
                      <div className="col-md-4">
                      <AddressBlock
                          icon={icon_1}
                          title="New Delhi"
                          subtitle="
                          GF-28 TDI Center, Jasola, New Delhi-110025"
                        />
                      </div>
                      {/* <div className="col-md-4">
                  <AddressBlock
                    icon={icon_3}
                    title="Live Support"
                    subtitle='live chat service <br/><a href="#" className="webaddress">www.cgbindia.com</a>'
                  />
                </div> */}
                    </div>
                  </div>
                </div>
               {/*-------------------------------------------Adding address IND div End-------------------------- */}
                
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-finacle"
            role="tabpanel"
            tabIndex={0}
          >
            <div className="accordion accordion-style-one" id="accordionTwo">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6">
               {/*----------------------------------------Adding address form here --------------------------------*/}
               {/*----------------------------------------Adding address form here --------------------------------*/}
                    
                  {/* <div className="title-one pt-4">
                    {/* <div className="upper-title">Services</div> 
                    <h2>Finacle</h2>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-servicenow"
            role="tabpanel"
            tabIndex={0}
          >
            <div className="accordion accordion-style-one" id="accordionThree">
              <div className="row align-items-center">
               {/*----------------------------------------Adding address form here --------------------------------*/}
               
                <div className="col-xl-6 col-lg-6">
                  <div className="title-one pt-4">
                    {/* <div className="upper-title">Services</div> */}
                    <h2>ServiceNow</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-lowcode"
            role="tabpanel"
            tabIndex={0}
          >
            <div className="accordion accordion-style-one" id="accordionFour">
              <div className="row align-items-center">
               {/*----------------------------------------Adding address form here --------------------------------*/}
               
                <div className="col-xl-6 col-lg-6">
                  <div className="title-one pt-4">
                    {/* <div className="upper-title">Services</div> */}
                    <h2>Low Code</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-salesforce"
            role="tabpanel"
            tabIndex={0}
          >
            <div className="accordion accordion-style-one" id="accordionFive">
              <div className="row align-items-center">
               {/*----------------------------------------Adding address form here --------------------------------*/}
               
                <div className="col-xl-6 col-lg-6">
                  <div className="title-one pt-4">
                    {/* <div className="upper-title">Services</div> */}
                    <h2>Salesforce</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-devops"
            role="tabpanel"
            tabIndex={0}
          >
            <div className="accordion accordion-style-one" id="accordionSix">
              <div className="row align-items-center">
               {/*----------------------------------------Adding address form here --------------------------------*/}
                <div className="col-xl-6 col-lg-6">
                  <div className="title-one pt-4">
                    {/* <div className="upper-title">Services</div> */}
                    <h2>DevOps</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationTabsData;
