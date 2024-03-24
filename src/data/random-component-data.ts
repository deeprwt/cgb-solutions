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
    icon: icon_16,
    title: "Corporate Banking Suite",
    desc: "CGB Solutions offers flexible workforce solutions with our contract staffing services. Access skilled professionals on a temporary basis to meet project demands and scale your team as needed.",
    page: "staffing-1",
    link: "/contract-staffing",
  },
  {
    id: 2,
    icon: icon_16,
    title: "Cash Management Suite",
    desc: "Find the right talent for long-term success with CGB Solutions permanent staffing solutions. Our recruiters specialize in identifying top-tier candidates who align with your company culture and values.",
    page: "staffing-1",
    link: "/permanent-staffing",
  },
  {
    id: 3,
    icon: icon_16,
    title: "Virtual Accounts Management",
    desc: "Empower your workforce with our customized training programs and strategic deployment support. Bridge skill gaps and enhance productivity with CGB Solutions Hire-Train-Deploy solutions.",
    page: "staffing-1",
    link: "/hire-train-deploy",
  },
  {
    id: 4,
    icon: icon_16,
    title: "Core Banking solution",
    desc: "Empower your workforce with our customized training programs and strategic deployment support. Bridge skill gaps and enhance productivity with CGB Solutions Hire-Train-Deploy solutions.",
    page: "staffing-2",
    link: "/hire-train-deploy",
  },
  {
    id: 5,
    icon: icon_16,
    title: "Lending",
    desc: "Empower your workforce with our customized training programs and strategic deployment support. Bridge skill gaps and enhance productivity with CGB Solutions Hire-Train-Deploy solutions.",
    page: "staffing-2",
    link: "/hire-train-deploy",
  },
  {
    id: 6,
    icon: icon_16,
    title: "Payments Suite",
    page: "staffing-2",
  },
  {
    id: 7,
    icon: icon_16,
    title: "Digital Engagement Hub",
    page: "staffing-3",
  },
  {
    id: 8,
    icon: icon_16,
    title: "Mobile Banking",
    page: "staffing-3",
  },
  {
    id: 9,
    icon: icon_16,
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
    desc: "",
    page: "oracle",
  },
  {
    id: generateUniqueId(),
    icon: img26,
    title: "finacle trade connect",
    desc: "",
    page: "oracle",
  },
  {
    id: generateUniqueId(),
    icon: img15,
    title: "finacle on cloud",
    desc: "",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img24,
    title: "finacle payments connect",
    desc: "",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img18,
    title: "finacle liquidity management solution",
    desc: "",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img25,
    title: "finacle payments suite",
    desc: "",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img23,
    title: "finacle payments bank solution",
    desc: "",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img13,
    title: "finacle digital wallet solution",
    desc: "",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img21,
    title: "finacle online banking solution",
    desc: "",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img20,
    title: "finacle mobile teller solution",
    desc: "",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img19,
    title: "finacle mobile banking solution",
    desc: "",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img14,
    title: "finacle direct banking solution",
    desc: "",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img16,
    title: "finacle finanz tools solution",
    desc: "",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img3,
    title: "finacle insights",
    desc: "",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img17,
    title: "finacle islamic banking solution",
    desc: "",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img28,
    title: "finacle treasury solution",
    desc: "",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img30,
    title: "finacle youth banking solution",
    desc: "",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img4,
    title: "finacle bancassurance solution",
    desc: "",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img22,
    title: "finacle origination solution",
    desc: "",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img9,
    title: "finacle customer assist solution",
    desc: "",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img8,
    title: "finacle crm solution",
    desc: "",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img29,
    title: "finacle wealth management",
    desc: "",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img31,
    title: "virtual accounts management solution",
    desc: "",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img2,
    title: "finacle alerts solution",
    desc: "",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img12,
    title: "finacle digital lending solution suite",
    desc: "",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img29,
    title: "asset liability management solution",
    desc: "",
    page: "oracle",
    link: "",
  },
  {
    id: generateUniqueId(),
    icon: img1,
    title: "finacle api connect",
    desc: "",
    page: "oracle",
    link: "",
  },
];

export { fincale_slide_data, fincale_solutions_data };
