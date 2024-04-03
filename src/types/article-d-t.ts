import { StaticImageData } from "next/image";


interface Licontent{
  li?: string;
}

interface PostContent {
  heading?: string;
  paragraph?: string;
  ul?: Licontent[];
}

// interface MetaContent {
//     title: string;
//     desc: string;
//     keyword: string;
// }

export interface IArticle {
  id: number;
  img: StaticImageData;
  date: string;
  link?: string;
  title: string;
  post_info?: string;
  quote_blog?: boolean;
  designation?: string;
  author:string;
  category:string;
  content: PostContent[]; // Array of PostContent interface
  content2: string; // Change the type to string
  page: string;
  tag?: string;
  desc?: string;
  keyword?: string;
}
