import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";

import about_bg from "@/assets/images/media/img_26.jpg";
import FooterOne from "@/layout/footer/footer-one";
import RPOSections from "@/components/solutions/rpo-section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | CGB Solutions",
  description:
    "Outsource your recruitment with CGB Solutions. Get tailored RPO services that streamline hiring processes and deliver top talent",
  keywords: "Privacypolicy",
};

export default function PrivacyPolicy() {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* hero banner start */}
          <BreadcrumbOne
            title="Privacy Policy"
            subtitle="CGB Solutions takes your privacy very seriously."
            page="Privacy Policy"
            bg_img={about_bg}
            // // shape={shape}
            style_2={true}
          />
          {/* hero banner end */}
          <div className="text-feature-one service-details pt-80 lg-pt-80 pb-80 lg-pb-80">
            <div className="container">
              <div className="row align-items-center details-meta">
                <div className="col-md-12 wow fadeInRight">
                  <div className="details-meta ps-xxl-5 ps-xl-3">
                    <p className="text-lg mb-35 md-mb-30">
                      cgbsolution.com At CGB Solutions , we value your trust and
                      confidence. We believe that we earn your trust and
                      confidence when we continually bring you exceptional
                      products or courses and services and consistently do so in
                      a private and secure manner. We created this Privacy
                      Policy to inform you of our commitment to you, our
                      customer.
                    </p>
                    <p className="text-lg mb-35 md-mb-30">
                      This Privacy Policy applies to information collected by
                      [CGB Solutions ] . (“CGB Solutions ,” “company”, “we”,
                      “our”, or “us”) in connection with the
                      [www.cgbsolution.com].This includes information collected
                      online through our website, information that may be
                      collected through third party platforms (e.g., social
                      media, social networks and sweepstakes and giveaways
                      conducted through third party websites and applications),
                      mobile applications, sweepstakes and giveaways managed
                      and/or administered by [CGB Solutions ], direct marketing
                      campaigns conducted by [CGB Solutions ] or a partner
                      organization selling or offering the product or courses of
                      [CGB Solutions Data Services Pvt. Ltd.],as well as the
                      potential for any offline communications (collectively,
                      hereinafter referred to as “CGB Solutions Services”).
                    </p>
                    <p className="text-lg mb-35 md-mb-30">
                      This Privacy Policy explains what information may be
                      collected through the CGB Solutions Services, how any
                      information that is collected may be used and/or shared
                      with other third-party companies or organizations, the
                      steps we take to safeguard your information, and how you
                      may access and control your information in relation to our
                      marketing and sales communications, and any business
                      activities. By using the CGB Solutions Services, you agree
                      to the collection, use, and disclosure of your information
                      as described in this Privacy Policy. If you do not agree,
                      we ask that you do not use the{" "}
                      <Link href="https://cgbsolution.com/">
                        https://cgbsolution.com/
                      </Link>
                      website or the CGB Solutions Product and Services.
                    </p>
                    <h5>INFORMATION COLLECTION</h5>

                    <p>
                      <b>Information You Provide to Us</b>
                    </p>
                    <p className="text-lg mb-35 md-mb-30">
                      When you engaged for the CGB Solutions Services, we may
                      ask you to provide certain personal information during the
                      admission or registration process. For example, on the
                      <Link href="https://cgbsolution.com/">
                        https://cgbsolution.com/
                      </Link>
                      website, Customers are asked to provide personal
                      information including a name, telephone number, e-mail
                      address, mailing address, education background detail,
                      Academic detail or information and working experience if
                      needed for the particular course. We may ask for similar
                      information when you enter into a sweepstakes, giveaway,
                      or other promotion; when you request customer support; or,
                      when you otherwise communicate with us
                    </p>
                    <p className="text-lg mb-35 md-mb-30">
                      We (or our marketing partner, or other business partners
                      or affiliates) may collect information about you,
                      including personal information, such as name, e-mail
                      address, telephone number, mailing address, date of birth
                      for the purpose of verifying age in sweepstakes or
                      giveaways (or to ensure you are older than thirteen (13)
                      years of age for US User and old than Sixteen (16) years
                      of age for EU user and old than Eighteen (18) years for
                      Indian User), gender, and certain other demographic
                      information. The under age as defined by the law of
                      respective country, the assent or consent of parents or
                      legal guardian is required.
                    </p>
                    <p className="text-lg mb-35 md-mb-30">
                      When contacting our Customer Advocacy department, we may
                      inform you that the conversation is being recorded for
                      quality assurance purposes or other disclosed purpose, and
                      we may collect and retain this information for the above
                      purposes.
                    </p>
                    <p className="text-lg mb-35 md-mb-30">
                      Information You Provide When You Make a registration for
                      the particular product or courses offered by CGB
                      Solutions.com
                    </p>
                    <p className="text-lg mb-35 md-mb-30">
                      Third Party Service Providers. We may use third party
                      services, companies, organizations, applications, and
                      other affiliated entities to support the
                      <Link href="https://cgbsolution.com/">
                        https://cgbsolution.com/
                      </Link>{" "}
                      website, to enable, manage, facilitate, advertise, and
                      administer sweepstakes and giveaways sponsored by CGB
                      Solutions , and to support or enhance CGB Solutions
                      offered courses and products. Some of these third parties
                      may utilize technologies that include, but are not limited
                      to, cookies, pixel tags, log files, and/or other
                      technologies, to enable the receiving of, and the
                      collection and storage of, information on our behalf.
                    </p>
                    <p className="text-lg mb-35 md-mb-30">
                      Information Received from Third Parties
                    </p>
                    <p className="text-lg mb-35 md-mb-30">
                      We may receive information about you from certain trusted
                      third-party vendors, affiliates, contracted companies, or
                      other sources. For example, this may include information
                      from publicly-available sources that may also include
                      personal information such as your demographic information
                      and other similar information. We may also receive
                      information about you from our partner companies or
                      associates and from third-party service providers.
                    </p>
                    <p className="text-lg mb-35 md-mb-30">
                      We may use this information to assist us in maintaining
                      the accuracy of the information that we collect, to
                      provide a more personalized experience, to inform you of
                      products or courses and other offers that you may be
                      interested in, to provide a metric to measure quality, and
                      for other business purposes.
                    </p>
                    <p className="text-lg mb-35 md-mb-30">
                      Third-Party Providers of Services.
                    </p>
                    <p className="text-lg mb-35 md-mb-30">
                      We may share your personal information or data with
                      third-party service providers engaged by CGB Solutions .
                      These third parties may provide CGB Solutions with certain
                      business functions, and certain professional and/or
                      technical support functions. This may include, but may not
                      be limited to: companies providing certain integrated
                      technologies in the products; technology licensors or
                      licensees; service providers that may host information or
                      provide Certain technological capabilities; payment
                      processors (if applicable); data analysis; customer care
                      team and principle company offered or design the product
                      or courses available with [CGB Solutions ] and set-up;
                      and, sponsors or other organizations that participate in,
                      sponsor, or administer promotions including sweepstakes
                      and giveaways.
                    </p>
                    <p className="text-lg mb-35 md-mb-30">
                      Additional Third Parties. Your personal information and
                      data may also be shared with companies, organizations,
                      and/or others not referred to above in connection with
                      marketing, promotions, and product offers. It is also
                      possible that at the time of your submittal of personal
                      information, we may identify additional parties that may
                      receive some or all of your information if you provide the
                      consent for such sharing of information.
                    </p>
                    <p className="text-lg mb-35 md-mb-30">
                      Sweepstakes, Giveaways, and Other Promotions. If you
                      choose to enter into a sweepstakes, giveaway, or other
                      promotion, it is possible that we may provide or share
                      your information with third parties that [CGB Solutions ]
                      partners with to conduct marketing activities or that [CGB
                      Solutions ] engages in a sponsorship with; with third
                      parties that administer such sweepstakes, giveaway, or
                      other promotion; and, share your name and/or social media
                      identity with the public if you are a winner of a prize or
                      as required by law.
                    </p>
                    <p className="text-lg mb-35 md-mb-30">
                      Mergers, Acquisitions, Business Combinations, and other
                      Legal.
                    </p>
                    <p className="text-lg mb-35 md-mb-30">
                      If we are acquired by another company, or we acquire
                      another company, your information
                    </p>
                    <p className="text-lg mb-35 md-mb-30">
                      May be shared with the acquiring company or the
                      newly-formed company. In addition, if any bankruptcy
                      proceeding is brought against us, any information held by
                      the company could be sold or transferred to one or more
                      third parties
                    </p>
                    <h6>Legal Disclosures; Safety.</h6>
                    <p className="text-lg mb-35 md-mb-30">
                      [CGB Solutions ] may disclose your personal information
                      and data to one or more third parties to remain in
                      compliance with a legal obligation, such as in a lawsuit
                      or similar legal proceeding; if a federal, state, or local
                      law requires such disclosure; if an investigation has been
                      undertaken by a governmental agency; or, in the ordinary
                      course of business to protect our rights, property, or
                      safety of third parties or the public.
                    </p>
                    <p className="text-lg mb-35 md-mb-30">
                      Aggregate Non-Personal Information and Data. We may share
                      with certain third parties what is commonly referred to as
                      aggregate information, or sometimes referred to as
                      anonymous information, of a non-personal nature, with
                      third parties for the purpose of marketing or data
                      analytics. No personally identifying information is
                      disclosed in this instance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
}
