export interface IMenu {
  id: number;
  link: string;
  title: string;
  dropdown?: boolean;
  dropdown_menus?: {
    link: string;
    title: string;
  }[];
  mega_menu?: boolean;
  mega_menus?: {
    id: number;
    subtitle: string; //  add new subtitle for menu
    menus: {
      link: string;
      title: string;
    }[];
  }[];

  // add new dropdown weith subdropdown
  sub_dropdown?: boolean;
  dropdown_submenus?: {
    link: string;
    title: string;
    sub_menus?: {
      link: string;
      title: string;
    }[];
  }[];
}
