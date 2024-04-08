import { StaticImageData } from "next/image";
// images
import img1 from "@/assets/images/solutions/Finacle/icon/API-connect.webp";
import img2 from "@/assets/images/solutions/Finacle/icon/Alerts-Solution-icon.svg";
import img3 from "@/assets/images/solutions/Finacle/icon/Analytics-Solution-icon.svg";
import img4 from "@/assets/images/solutions/Finacle/icon/Bancassurance-Solution-icon.svg";
import img5 from "@/assets/images/solutions/Finacle/icon/Cash-Management-Suite-icon.svg";
import img6 from "@/assets/images/solutions/Finacle/icon/Core-banking-icon.svg";
import img7 from "@/assets/images/solutions/Finacle/icon/Corporate-Banking-Suite-icon.svg";
import img8 from "@/assets/images/solutions/Finacle/icon/Crm-Solution-icon.svg";
import img9 from "@/assets/images/solutions/Finacle/icon/Customer-Assist-Solution-icon.svg";
import img10 from "@/assets/images/solutions/Finacle/icon/Digital-Engagement-Hub-icon.svg";
import img11 from "@/assets/images/solutions/Finacle/icon/Digital-Engagement-Suite-icon.svg";
import img12 from "@/assets/images/solutions/Finacle/icon/Digital-Only-Propositions-icon.svg";
import img13 from "@/assets/images/solutions/Finacle/icon/Digital-Wallet-Solution-icon.svg";
import img14 from "@/assets/images/solutions/Finacle/icon/Direct-Banking-Solution-icon.svg";
import img15 from "@/assets/images/solutions/Finacle/icon/Finacle-On-Cloud-icon.svg";
import img16 from "@/assets/images/solutions/Finacle/icon/Finanz-Tools-Solution-icon.svg";
import img17 from "@/assets/images/solutions/Finacle/icon/Islamic-Banking-Solution-icon.svg";
import img18 from "@/assets/images/solutions/Finacle/icon/Liquidity-Management-Solution-icon.svg";
import img19 from "@/assets/images/solutions/Finacle/icon/Mobile-Banking-Solution-icon.svg";
import img20 from "@/assets/images/solutions/Finacle/icon/Mobile-Teller-Solution-icon.svg";
import img21 from "@/assets/images/solutions/Finacle/icon/Online-Banking-Solution-icon.svg";
import img22 from "@/assets/images/solutions/Finacle/icon/Origination-Solution-icon.svg";
import img23 from "@/assets/images/solutions/Finacle/icon/Payments-Bank-Solution-icon.svg";
import img24 from "@/assets/images/solutions/Finacle/icon/Payments-Connect-icon.svg";
import img25 from "@/assets/images/solutions/Finacle/icon/Payments-Solution-icon.svg";
import img26 from "@/assets/images/solutions/Finacle/icon/Trade-Connect-icon.svg";
import img27 from "@/assets/images/solutions/Finacle/icon/Trade-finance-sute.svg";
import img28 from "@/assets/images/solutions/Finacle/icon/Treasury-Solution-icon.svg";
import img29 from "@/assets/images/solutions/Finacle/icon/Wealth-Management-icon.svg";
import img30 from "@/assets/images/solutions/Finacle/icon/Youth-Banking-Solution-icon.svg";
import img31 from "@/assets/images/solutions/Finacle/icon/Virtual-Accounts-Management-Solution-icon.svg";

import icon_16 from "@/assets/images/icon/icon_95.svg";
import icon_1038 from "@/assets/images/icon/icon_1038.png";
import icon_1039 from "@/assets/images/icon/icon_1039.png";
import icon_1040 from "@/assets/images/icon/icon_1040.png";
import icon_1041 from "@/assets/images/icon/icon_1041.png";
import icon_1042 from "@/assets/images/icon/icon_1042.png";
import icon_1043 from "@/assets/images/icon/icon_1043.png";
import icon_1044 from "@/assets/images/icon/icon_1044.png";
import icon_1045 from "@/assets/images/icon/icon_1045.png";
import icon_1046 from "@/assets/images/icon/icon_1046.png";

interface IStaffing {
  id: number;
  icon: StaticImageData;
  title: string;
  desc?: string;
  page: string;
  link?: string;
}

const fincale_slide_data: IStaffing[] = [
  // home 1
  {
    id: 1,
    icon: icon_1038,
    title: "Corporate Banking Suite",
    desc: "CGB Solutions offers flexible workforce solutions with our contract staffing services. Access skilled professionals on a temporary basis to meet project demands and scale your team as needed.",
    page: "staffing-1",
    link: "/contract-staffing",
  },
  {
    id: 2,
    icon: icon_1039,
    title: "Cash Management Suite",
    desc: "Find the right talent for long-term success with CGB Solutions permanent staffing solutions. Our recruiters specialize in identifying top-tier candidates who align with your company culture and values.",
    page: "staffing-1",
    link: "/permanent-staffing",
  },
  {
    id: 3,
    icon: icon_1040,
    title: "Virtual Accounts Management",
    desc: "Empower your workforce with our customized training programs and strategic deployment support. Bridge skill gaps and enhance productivity with CGB Solutions Hire-Train-Deploy solutions.",
    page: "staffing-1",
    link: "/hire-train-deploy",
  },
  {
    id: 4,
    icon: icon_1041,
    title: "Core Banking solution",
    desc: "Empower your workforce with our customized training programs and strategic deployment support. Bridge skill gaps and enhance productivity with CGB Solutions Hire-Train-Deploy solutions.",
    page: "staffing-2",
    link: "/hire-train-deploy",
  },
  {
    id: 5,
    icon: icon_1042,
    title: "Lending",
    desc: "Empower your workforce with our customized training programs and strategic deployment support. Bridge skill gaps and enhance productivity with CGB Solutions Hire-Train-Deploy solutions.",
    page: "staffing-2",
    link: "/hire-train-deploy",
  },
  {
    id: 6,
    icon: icon_1043,
    title: "Payments Suite",
    page: "staffing-2",
  },
  {
    id: 7,
    icon: icon_1044,
    title: "Digital Engagement Hub",
    page: "staffing-3",
  },
  {
    id: 8,
    icon: icon_1045,
    title: "Mobile Banking",
    page: "staffing-3",
  },
  {
    id: 9,
    icon: icon_1046,
    title: "Mobile Teller",
    page: "staffing-3",
  },
];

let nextId = 1; // Initialize the variable with the starting value of ID

// Function to generate unique IDs
function generateUniqueId() {
  return nextId++;
}

const fincale_solutions_data: IStaffing[] = [
  // home 1
  {
    id: generateUniqueId(),
    icon: img6,
    title: "Finacle Core Banking Solution",
    desc: "Built on advanced architecture, Finacle Core Banking Solution offers a comprehensive suite of capabilities to power your banks' digital transformation.",
    page: "oracle",
    link: "/contract-staffing",
  },
  {
    id: generateUniqueId(),
    icon: img5,
    title: "finacle cash management suite",
    desc: "Finacle Cash Management is a comprehensive solution suite built on an advanced architecture.",
    page: "oracle",
    link: "/permanent-staffing",
  },
  {
    id: generateUniqueId(),
    icon: img7,
    title: "finacle corporate banking suite",
    desc: "Banks in over 100 countries rely on Finacle's industry-leading solution suite to fast-forward their digital transformation agenda.",
    page: "oracle",
    link: "/hire-train-deploy",
  },
  {
    id: generateUniqueId(),
    icon: img11,
    title: "finacle digital engagement suite",
    desc: "The Finacle Digital Engagement Suite is an advanced omnichannel solution that helps banks - onboard, sell, service and engage - retail, small business and corporate customers.",
    page: "oracle",
    link: "/hire-train-deploy",
  },
  {
    id: generateUniqueId(),
    icon: img12,
    title: "finacle for digital - only propositions",
    desc: "Finacle Mobile Banking solution combines outstanding functionalities with a well-designed user experience to promote financial well-being among retail and corporate customers.",
    page: "oracle",
    link: "/hire-train-deploy",
  },
  {
    id: generateUniqueId(),
    icon: img10,
    title: "finacle digital engagement hub",
    desc: "The core promise of the Finacle Digital Engagement Hub is to enable banks to drive deeper customer engagements, openness and agility for innovation-led growth, and digital operational excellence.",
    page: "oracle",
  },
  {
    id: generateUniqueId(),
    icon: img27,
    title: "finacle trade finance solution suite",
    desc: "Finacle Trade Finance Solution Suite offers an expansive range of trade and supply chain finance products to enable banks and financial institutions accelerate their digital journeys.",
    page: "oracle",
  },
  {
    id: generateUniqueId(),
    icon: img26,
    title: "finacle trade connect",
    desc: "Finacle Trade Connect is a blockchain-based solution developed to digitize and automate inter-organization trade finance process on a unified distributed, trusted and shared network.",
    page: "oracle",
  },
  {
    id: generateUniqueId(),
    icon: img15,
    title: "finacle on cloud",
    desc: "Finacle offers a cloud-native, cloud-neutral digital banking solution suite that can be deployed flexibly - on a public, private, or hybrid cloud - to suit your financial institution's requirements.",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img24,
    title: "finacle payments connect",
    desc: "Finacle Payments Connect is a blockchain-based solution to digitize and automate international payments operations among corresponding banking relationships.",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img18,
    title: "finacle liquidity management solution",
    desc: "A comprehensive liquidity management solution that spans the front-to-back office operations and allows banks to offer a comprehensive range of services to their corporate clients to identify, manage and enhance liquidity positions. ",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img25,
    title: "finacle payments suite",
    desc: "Finacle Payments Suite, which includes an advanced real-time payment services hub, a blockchain-based payments solution, and an enterprise-class message transformation engine, is designed to help banks successfully transform and modernize their payments landscape.",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img23,
    title: "finacle payments bank solution",
    desc: "Finacle offers a one-stop solution for banks to serve the unbanked population effectively, using a preconfigured, pre-integrated banking platform that is ready to be deployed",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img13,
    title: "finacle digital wallet solution",
    desc: "Helping your bank expand the client base among the next generation with a simple and trendy digital wallet",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img21,
    title: "finacle online banking solution",
    desc: "Finacle Online Banking is an advanced, cloud-native internet banking solution that helps banks onboard, sell, service and engage better.",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img20,
    title: "finacle mobile teller solution",
    desc: "A comprehensive solution for bankers to effectively address all activities at a branch with designated workflow.",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img19,
    title: "finacle mobile banking solution",
    desc: "Finacle Mobile Banking solution combines outstanding functionalities with a well-designed user experience to promote financial well-being among retail and corporate customers. ",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img14,
    title: "finacle direct banking solution",
    desc: "The Finacle Direct Banking Solution is comprehensive for banks to directly acquire, track and service customer",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img16,
    title: "finacle finanz tools solution",
    desc: "The Finacle Finanz Tools Solution engages the bank’s customers with personalized product illustrations. ",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img3,
    title: "finacle insights",
    desc: "Finacle Insights is a cloud-native, advanced analytics solution, that is database agnostic and is built on an open architecture. ",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img17,
    title: "finacle islamic banking solution",
    desc: "Finacle Islamic banking has robust features that support Islamic accounting with traceability. A self-contained accounting backbone supports STP capabilities and addresses both international and region-specific banking needs.",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img28,
    title: "finacle treasury solution",
    desc: "Finacle Treasury is a front-to-back, cross-asset, multi-entity enabled solution with comprehensive capabilities across trading, risk management and operations.",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img30,
    title: "finacle youth banking solution",
    desc: "Created based on the design thinking principles to innovate and engage with the youth for banking.",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img4,
    title: "finacle bancassurance solution",
    desc: "Built on advanced architecture the Finacle Bancassurance solution provides a range of features to enhance bancassurance operations.",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img22,
    title: "finacle origination solution",
    desc: "The Finacle Origination Solution Suite is an enterprise class, multi-segment solution designed to help banks and other FIs seamlessly onboard customers across various segments and products, digitally.",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img9,
    title: "finacle customer assist solution",
    desc: "The Finacle Customer Assist Solution helps in optimizing branch transactions to reduce the cost of servicing.",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img8,
    title: "finacle crm solution",
    desc: "Finacle CRM is a one-stop solution for effective management and use of customer interaction records and information.",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img29,
    title: "finacle wealth management",
    desc: "Finacle Wealth Management empowers advisors with the tools and insights necessary to deliver personalized investment strategies, fostering exceptional client experiences.",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img31,
    title: "virtual accounts management solution",
    desc: "Finacle Virtual Accounts Management is designed to digitally transform cash management services of corporate banks worldwide. ",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img2,
    title: "finacle alerts solution",
    desc: "Finacle Alerts is a comprehensive solution that enables banks to send real-time notifications to their customers, keeping them informed about their account activities.",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img12,
    title: "finacle digital lending solution suite",
    desc: "Finacle Digital Lending Solution Suite is an enterprise class, multi-segment, multi-product solution that helps banks and FIs originate and service loans, digitally.",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img29,
    title: "asset liability management solution",
    desc: "Finacle Asset Liability Management is a comprehensive liquidity and interest rate risk management solution designed to deliver an enterprise-wide view of all on-balance sheet and off-balance sheet exposures, enabling banks and FIs manage their funding and liquidity decisions better.",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img1,
    title: "finacle api connect",
    desc: "An all-inclusive API solution for financial institutions to accelerate their ecosystem innovation.",
    page: "oracle",
    link: "",
  },
];

export { fincale_slide_data, fincale_solutions_data };
