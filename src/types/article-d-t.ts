import Image, { StaticImageData, ImageProps } from "next/image";




interface Licontent{
  li?: string;
}

interface PostContent {
  paragraphfirst?: string;
  heading?: string;
  subimg?: ImageProps['src']; // Correctly define the type for subimg
  paradesc?: string;
  subimg1?: ImageProps['src']; 
  paragraph?: string;
  subimg2?: ImageProps['src']; 
  paragraph2?: string;
  subimg3?: ImageProps['src']; 
  paragraph3?: string;
  subimg4?: ImageProps['src']; 
  paragraph4?: string;
  subimg5?: ImageProps['src']; 
  paragraph5?: string;
  subimg6?: ImageProps['src']; 
  paragraph6?: string;
  subimg7?: ImageProps['src']; 
  paragraph7?: string;
  subimg8?: ImageProps['src']; 
  paragraph8?: string;
  subimg9?: ImageProps['src']; 
  paragraph9?: string;
  subimg10?: ImageProps['src']; 
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
