import Image, { StaticImageData, ImageProps } from "next/image";


export interface ICareer {
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
  page: string;
  tag?: string;
  desc?: string;
  keyword?: string;
}
