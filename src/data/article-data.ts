// import { IBlog } from "@/types/blog-d-t";
import {IArticle} from "@/types/article-d-t"
import blog_img from "@/assets/images/blog/sustainable1.png";


const article_data: IArticle[] = [
  {
    id: 1,
    img: blog_img,
    date: "06 Mar 2024",
    link :"Empowering-the-Climate-Tech-Revolution-for-a-Carbon-Free-Future",
    title:
      "Empowering the Climate Tech Revolution for a Carbon-Free Future",
    author: "Deepak Rawat",
    post_info: "CGB Solutions . Sustainable",
    category: "IT",
   content: [
    {
      "heading": "",
      "paragraph":"Optimize energy consumption: AI can analyze energy usage patterns and identify areas for improvement, leading to significant reductions in carbon footprint."
    },
    {
      "heading": "",
      "paragraph":"Predict and manage renewable energy sources: AI can predict weather patterns and optimize energy production from renewable sources like wind and solar power."
    },
    {
      "heading": "",
      "paragraph":"Develop sustainable products and services: AI can be used to design and develop products and services with a lower environmental impact, promoting a circular economy."
    },
    {
      "heading": "A Shared Future, A Collective Responsibility:",
      "paragraph":"The transition to a carbon-free future is a monumental task, demanding a collective effort. CGB is committed to playing its part by collaborating with climate tech startups, fostering innovation, and promoting sustainable practices. We believe that by joining forces, we can collectively overcome the climate crisis and create a brighter future for all. Let's embark on this journey together, one step at a time, towards a more sustainable and prosperous future for generations to come."
    },
  ],
content2: "",
    page: "blog-list",
    tag: "sustainability"
  },

];

export default article_data;
