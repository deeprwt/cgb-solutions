import React from "react";
import Link from "next/link";
import Image from "next/image";
import sindhu from "@/assets/images/cgbhome/sindhuUpdate.png";
import linkd from "@/assets/images/icon/linkedinicon.png";

const TeamDetailsArea = () => {
  return (
    <div className="team-details light-bg border-top pt-120 lg-pt-80 ">
      <div className="container">
        <div className="bg-wrapper">
          <div className="row">
            <div className="col-lg-4 align-self-center">
              {/* <div
                className="member-img"
                style={{ backgroundImage: `url(${bg_img.src})` }}
              > */}
              <Image
                src={sindhu}
                layout="responsive"
                alt="Sindhu profile"
                className="w-100"
              ></Image>

              {/* <Image src={bg_img} alt="Sindhu mam profile"></Image> */}
              {/* </div> */}
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="pt-45 pb-45 ps-xl-4 ps-lg-0 ps-3 pe-xl-4 pe-lg-3 pe-3 border-right h-100">
                <h2 className="name fw-bold m-0 d-flex justify-content-between align-items-center">
                  Sindhu B.R.J{" "}
                  <Link
                    href="https://www.linkedin.com/in/sindu-b-r-j-7617891b/"
                    className=""
                  >
                    <Image
                      src={linkd}
                      width={50}
                      height={50}
                      alt="linkedinicon"
                    ></Image>
                  </Link>
                </h2>
                <div className="post">CEO, CGB Solutions</div>
                <h6 className="fw-bold">About Me</h6>
                <p className="m-0">
                  Sindhu B.R.J. is a transformational leader with over two
                  decades of experience in driving strategic business
                  initiatives and fostering innovation. As the CEO of CGB
                  Solutions, Sindhu has played a pivotal role in expanding the
                  company&apos;s global footprint across North America, Europe,
                  India, the Middle East, and Japan.
                </p>
              </div>
            </div>
            <div className="col-12">
              <div className="pt-45 pb-45 ps-xl-4 ps-lg-0 ps-3 pe-xl-4 pe-lg-3 pe-3 border-right h-100">
                <p className="m-0">
                  Her expertise lies in identifying untapped revenue streams,
                  uncovering growth opportunities, and building leadership
                  capital to ensure sustainable success. Sindhu's visionary
                  approach has positioned CGB Solutions as a trusted name in
                  delivering tailored digital solutions to clients across
                  industries. <br />
                  Passionate about mentoring and empowering teams, Sindhu
                  promotes a culture of collaboration and excellence. Her
                  leadership philosophy emphasizes adaptability, strategic
                  foresight, and leveraging emerging technologies to address
                  complex business challenges. <br />
                  Beyond her professional endeavors, Sindhu is an advocate for
                  sustainable business practices and continuous learning. She is
                  actively involved in sharing insights from her journey through
                  various platforms, inspiring leaders and professionals
                  globally. <br />
                  With her strategic mindset and commitment to excellence,
                  Sindhu B.R.J. continues to lead CGB Solutions towards
                  innovation and impact, making a significant mark in the
                  dynamic landscape of digital transformation. <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetailsArea;
