import { IMenu } from "@/types/menu-d-t";

const admin_menu_data: IMenu[] = [
  {
    id: 1,
    link: "/",
    title: "Home",
  },
  {
    id: 2,
    link: "/dashboard",
    title: "Dashboard",
  },
  {
    id: 4,
    link: "#",
    title: "Blogs",
    sub_dropdown: true,
    dropdown_submenus: [
      { link: "/dashboard/blog", title: "Create New Blogs" },
      { link: "/blog", title: "Your Blogs" },
    ],
  },
  {
    id: 5,
    link: "#",
    title: "News",
    sub_dropdown: true,
    dropdown_submenus: [
      { link: "/dashboard/news", title: "Create New News" },
      { link: "/news", title: "Your News" },
    ],
  },
  {
    id: 6,
    link: "#",
    title: "Article",
    sub_dropdown: true,
    dropdown_submenus: [
      { link: "/dashboard/article", title: "Create New Article" },
      { link: "/article", title: "Your Article" },
    ],
  },
  {
    id: 7,
    link: "/dashboard/image-gallery",
    title: "Assest Gallery",
  },
  
];

export default admin_menu_data;
