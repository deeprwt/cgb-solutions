import React from 'react';
import Link from 'next/link';
import FaqItem from '../faq/faq-item';
import Image from 'next/image';

import OracleImg from "@/assets/images/cgbhome/cgb-meta.jpg";
import icon from "@/assets/images/icon/icon_09.svg";
import img1 from "@/assets/images/cgbhome/services/oracle.jpg"
import img2 from "@/assets/images/cgbhome/services/2.jpg"
import img3 from "@/assets/images/cgbhome/services/finacle.jpg"
import img4 from "@/assets/images/cgbhome/services/servicenow.jpg"
import img5 from "@/assets/images/cgbhome/services/mendix.jpg"
import img6 from "@/assets/images/cgbhome/services/6.jpg"
import img7 from "@/assets/images/cgbhome/services/salesforce.jpg"
import img8 from "@/assets/images/cgbhome/services/8.jpg"
import img9 from "@/assets/images/cgbhome/services/devops.jpg"
import img10 from "@/assets/images/cgbhome/services/10.jpg"

const TabsData = () => {
  return (
    <div className="faq-section-three light-bg border-top pt-120 lg-pt-80 pb-150 lg-pb-80">
      <div className="container">
        <nav>
          <div className="nav nav-tabs justify-content-center flex-column flex-md-row" id="nav-tab" role="tablist">
            <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#nav-oracle" type="button" role="tab" aria-selected="true" tabIndex={-1}>Oracle</button>
            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-finacle" type="button" role="tab" aria-selected="false" tabIndex={-1}>Finacle</button>
            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-servicenow" type="button" role="tab" aria-selected="false" tabIndex={-1}>ServiceNow</button>
            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-lowcode" type="button" role="tab" aria-selected="false" tabIndex={-1}>Low Code No Code</button>
            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-salesforce" type="button" role="tab" aria-selected="false" tabIndex={-1}>Salesforce</button>
            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-devops" type="button" role="tab" aria-selected="false" tabIndex={-1}>DevOps</button>
            {/* <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-account" type="button" role="tab" aria-selected="false" tabIndex={-1}>Account</button> */}
          </div>
        </nav>
        <div className="tab-content mt-60 lg-mt-40">
            <div className="tab-pane fade show active" id="nav-oracle" role="tabpanel" tabIndex={0}>
                <div className="accordion accordion-style-one service-details" id="accordionOne">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 wow fadeInLeft">
                            <div className="title-one details-meta pt-4">
                            {/* <div className="upper-title">Services</div> */}
                            <h3>Oracle</h3>
                            </div>
                            <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20">
                            CGB offers a comprehensive range of services built around Oracle global business units, 
                            technology acquisitions and new releases of applications in align with Oracle product direction and technology roadmap.
                            </p>
                            <div className="d-inline-flex flex-wrap align-items-center pb-4">
                            <Link href="/solutions/oracle" className="btn-three icon-link mt-15">
                                <span>Read More</span>
                                <Image src={icon} alt="icon" className="lazy-img icon ms-1"/>
                            </Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 wow fadeInRight">
                            <Image src={img1} layout="responsive" width={1707} height={1138} alt="About us" className="w-100"></Image>
    
                        </div>
                    </div>
                </div>
            </div>
          <div className="tab-pane fade" id="nav-finacle" role="tabpanel" tabIndex={0}>
            <div className="accordion accordion-style-one service-details" id="accordionTwo">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="title-one details-meta pt-4">
                            {/* <div className="upper-title">Services</div> */}
                            <h3>Finacle Core Banking</h3>
                            </div>
                            <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20">
                                Discover a world of financial innovation and efficiency with CGB bespoke Finacle solutions. 
                                As a premier provider of cutting-edge technology solutions, we are committed to empowering financial 
                                institutions with the tools they need to thrive in the digital age
                            </p>
                            <div className="d-inline-flex flex-wrap align-items-center pb-4">
                            <Link href="/solutions/finacle" className="btn-three icon-link mt-15">
                                <span>Read More</span>
                                <Image src={icon} alt="icon" className="lazy-img icon ms-1"/>
                            </Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <Image src={img3} layout="responsive" width={1707} height={1138} alt="About us" className="w-100"></Image>
                        </div>
                    </div>
            </div>
          </div>
          <div className="tab-pane fade" id="nav-servicenow" role="tabpanel" tabIndex={0}>
            <div className="accordion accordion-style-one service-details" id="accordionThree">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="title-one details-meta pt-4">
                            {/* <div className="upper-title">Services</div> */}
                            <h3>ServiceNow</h3>
                            </div>
                            <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20">
                                Welcome to CGB, your premier partner for ServiceNow consulting services. 
                                Our expert team specializes in tailoring ServiceNow solutions to meet your unique business needs. 
                                From initial implementation to process optimization and module integration, we guide you through every step.
                            </p>
                            <div className="d-inline-flex flex-wrap align-items-center pb-4">
                            <Link href="/solutions/servicenow" className="btn-three icon-link mt-15">
                                <span>Read More</span>
                                <Image src={icon} alt="icon" className="lazy-img icon ms-1"/>
                            </Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <Image src={img4} layout="responsive" width={1707} height={1138} alt="About us" className="w-100"></Image>
                        </div>
                    </div>
            </div>
          </div>
          <div className="tab-pane fade" id="nav-lowcode" role="tabpanel" tabIndex={0}>
            <div className="accordion accordion-style-one service-details" id="accordionFour">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="title-one details-meta pt-4">
                            {/* <div className="upper-title">Services</div> */}
                            <h3>Low Code No Code</h3>
                            </div>
                            <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20">
                                Unlock the power of low-code with CGB. Build applications effortlessly, 
                                whether you&apos;re a pro or just starting out. Experience streamlined development and unleash your creativity. 
                                Welcome to a new era of simplicity and efficiency in software creation.
                            </p>
                            <div className="d-inline-flex flex-wrap align-items-center p-4">
                            <Link href="/solutions/outsystems" className="btn-three icon-link mt-15">
                                <span>Outsystems</span>
                                <Image src={icon} alt="icon" className="lazy-img icon ms-1"/>
                            </Link>
                            </div>
                            <div className="d-inline-flex flex-wrap align-items-center p-4">
                            <Link href="/solutions/mendix" className="btn-three icon-link mt-15">
                                <span>Mendix</span>
                                <Image src={icon} alt="icon" className="lazy-img icon ms-1"/>
                            </Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <Image src={img5} layout='responsive' width={1707} height={1138} alt="About us" className="w-100"></Image>
                        </div>
                    </div>
            </div>
          </div>
          <div className="tab-pane fade" id="nav-salesforce" role="tabpanel" tabIndex={0}>
            <div className="accordion accordion-style-one service-details" id="accordionFive">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="title-one details-meta pt-4">
                            {/* <div className="upper-title">Services</div> */}
                            <h3>Salesforce</h3>
                            </div>
                            <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20">
                            Embark on a transformative journey with CGB, where Salesforce solutions meet innovation, 
                            precision, and a commitment to your business&apos;s success. As a distinguished leader in the realm 
                            of Salesforce services, we take pride in propelling organizations toward unprecedented growth, operational efficiency, and customer-centric excellence
                            </p>
                            <div className="d-inline-flex flex-wrap align-items-center pb-4">
                            <Link href="/contact" className="btn-three icon-link mt-15">
                                <span>Read More</span>
                                <Image src={icon} alt="icon" className="lazy-img icon ms-1"/>
                            </Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <Image src={img7} layout="responsive" width={1707} height={1138} alt="About us" className="w-100"></Image>
                        </div>
                    </div>
            </div>
          </div>
          <div className="tab-pane fade" id="nav-devops" role="tabpanel" tabIndex={0}>
            <div className="accordion accordion-style-one service-details" id="accordionSix">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="title-one details-meta pt-4">
                            {/* <div className="upper-title">Services</div> */}
                            <h3>DevOps</h3>
                            </div>
                            <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20">
                            At CGB, we are your trusted partner in accelerating your software development 
                            lifecycle through cutting-edge DevOps practices. Our DevOps services seamlessly integrate 
                            development and operations, ensuring faster time-to-market, enhanced collaboration, and continuous innovation.
                            </p>
                            <div className="d-inline-flex flex-wrap align-items-center pb-4">
                            <Link href="/contact" className="btn-three icon-link mt-15">
                                <span>Read More</span>
                                <Image src={icon} alt="icon" className="lazy-img icon ms-1"/>
                            </Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <Image src={img9} layout='responsive' width={1707} height={1138} alt="About us" className="w-100"></Image>
                        </div>
                    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsData;