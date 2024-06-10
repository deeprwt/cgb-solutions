// import { IBlog } from "@/types/blog-d-t";
import { ICareer } from "@/types/career-d-t";
import article_1 from "@/assets/images/career/cybersecurity vendor.jpg";

let idPluse = 1; // Initialize the variable with the starting value of ID

// Function to generate unique IDs
function generateUniqueId() {
  return idPluse++;
}

const career_data: ICareer[] = [
  {
    id: generateUniqueId(),
    img: article_1,
    date: "10 Apr 2024",
    link: "Cybersecurity Implementation",
    title: "Cybersecurity Implementation",
    author: "Deepak Rawat",
    post_info: "CGB Solutions",
    category: "IT",
    page: "blog-list",
    tag: "sustainability",
    desc: "CGB Solutions is actively seeking a qualified vendor to provide comprehensive cybersecurity services with a focus on Managed Detection and Response (MDR) solutions. As we prioritize the security of our operations and the integrity of our data, we are looking for a partner who can deliver cutting-edge, proactive, and robust cybersecurity measures.",
    keyword:"organizational culture, cybersecurity strategies",
  },
  {
    id: generateUniqueId(),
    img: article_1,
    date: "08 Apr 2024",
    link: "Cybersecurity Implementation",
    title: "deepak",
    author: "Deepak Rawat",
    post_info: "CGB Solutions",
    category: "IT",
    page: "blog-list",
    tag: "sustainability",
    desc: "Safeguard your company's cybersecurity with proven strategies.",
    keyword:"organizational culture, cybersecurity strategies",
  },
  {
    id: generateUniqueId(),
    img: article_1,
    date: "02 Apr 2024",
    link: "Cybersecurity Implementation",
    title: "rahul",
    author: "Deepak Rawat",
    post_info: "CGB Solutions",
    category: "IT",
    page: "blog-list",
    tag: "sustainability",
    desc: "Safeguard your company's cybersecurity with proven strategies.",
    keyword:"organizational culture, cybersecurity strategies",
  },
  {
    id: generateUniqueId(),
    img: article_1,
    date: "02 Apr 2024",
    link: "Cybersecurity Implementation",
    title: "anurag",
    author: "Deepak Rawat",
    post_info: "CGB Solutions",
    category: "IT",
    page: "blog-list",
    tag: "sustainability",
    desc: "Safeguard your company's cybersecurity with proven strategies.",
    keyword:"organizational culture, cybersecurity strategies",
  },
  {
    id: generateUniqueId(),
    img: article_1,
    date: "02 Apr 2024",
    link: "Cybersecurity Implementation",
    title: "suraj",
    author: "Deepak Rawat",
    post_info: "CGB Solutions",
    category: "IT",
    page: "blog-list",
    tag: "sustainability",
    desc: "Safeguard your company's cybersecurity with proven strategies.",
    keyword:"organizational culture, cybersecurity strategies",
  },

];
export default career_data;
