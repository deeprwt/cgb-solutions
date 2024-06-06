import Image, { StaticImageData, ImageProps } from "next/image";

interface Licontent{
  li?: string;
}

interface PostContent {
  subimg0?: StaticImageData;
  paragraphfirst?: string;
  heading?: string;
  subimg?: StaticImageData;// Correctly define the type for subimg
  paradesc?: string;
  subimg1?: StaticImageData;
  paragraph?: string;
  subimg2?: StaticImageData;
  paragraph2?: string;
  subimg3?: StaticImageData;
  paragraph3?: string;
  subimg4?: StaticImageData;
  paragraph4?: string;
  subimg5?: StaticImageData;
  paragraph5?: string;
  subimg6?: StaticImageData;
  paragraph6?: string;
  subimg7?: StaticImageData;
  paragraph7?: string;
  subimg8?: StaticImageData;
  paragraph8?: string;
  subimg9?: StaticImageData;
  paragraph9?: string;
  subimg10?: StaticImageData;
  paragraph10?: string;
  endingbold?: string;
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
  link: string;
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
