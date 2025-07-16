import Image from "next/image";

const logos = [
  {
    src: "/assets/images/logo/clints/Bank_of_Baroda.png",
    alt: "Bank of Baroda",
  },
  { src: "/assets/images/logo/clints/Bank_of_India.png", alt: "Bank of India" },
  { src: "/assets/images/logo/clints/Capco.png", alt: "Capco" },
  { src: "/assets/images/logo/clints/HPE.png", alt: "HPE" },
  { src: "/assets/images/logo/clints/Infosys.png", alt: "Infosys" },
  { src: "/assets/images/logo/clints/JFE.png", alt: "JFE" },
  { src: "/assets/images/logo/clints/Swissre.png", alt: "Swissre" },
  { src: "/assets/images/logo/clints/virtusa.png", alt: "Virtusa" },
  { src: "/assets/images/logo/clints/Accenture.png", alt: "Accenture" },
  { src: "/assets/images/logo/clints/Capgemini.png", alt: "Capgemini" },
  { src: "/assets/images/logo/clints/Crestron.png", alt: "Crestron" },
  { src: "/assets/images/logo/clints/DXC.png", alt: "DXC" },
  {
    src: "/assets/images/logo/clints/grant_thronton.png",
    alt: "Grant Thornton",
  },
  { src: "/assets/images/logo/clints/hcl_tech.png", alt: "HCL Technologies" },
  { src: "/assets/images/logo/clints/hdfc.png", alt: "HDFC" },
  { src: "/assets/images/logo/clints/Intuit.png", alt: "Intuit" },
  { src: "/assets/images/logo/clints/Jio.png", alt: "Jio" },
  { src: "/assets/images/logo/clints/lt_Infotech.png", alt: "L&T Infotech" },
  { src: "/assets/images/logo/clints/Mphasis.png", alt: "Mphasis" },
  { src: "/assets/images/logo/clints/pwc.png", alt: "PwC" },
  { src: "/assets/images/logo/clints/Quicken.png", alt: "Quicken" },
  { src: "/assets/images/logo/clints/Samsung.png", alt: "Samsung" },
  { src: "/assets/images/logo/clints/sbm_bank.png", alt: "SBM Bank" },
];

export default function LogoGrid() {
  return (
    <div className="container py-5 service-details">
      <div className="title-one text-center mb-60 details-meta ">
        {/* <div className="upper-title"></div> */}
        <h3>Our Clients</h3>
      </div>
      <div className="row justify-content-center align-items-center">
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 text-center"
          >
            <div className="bg-white border p-2 rounded shadow-sm h-100 d-flex align-items-center justify-content-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                style={{
                  maxHeight: "60px",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
