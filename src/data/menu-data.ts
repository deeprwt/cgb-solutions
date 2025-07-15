import { IMenu } from "@/types/menu-d-t";

const menu_data: IMenu[] = [
  {
    id: 1,
    link: "/",
    title: "Home",
  },
  {
    id: 2,
    link: "/about-us",
    title: "About Us",
  },
  // {
  //   id:3,
  //   link:'/',
  //   title:'Solutions',
  //   mega_menu:true,
  //   mega_menus:[
  //     {
  //       id:1,
  //       subtitle : 'IT Solutions',
  //       menus:[
  //         {link:'/solutions/oracle',title:'Oracle'},
  //         {link:'/solutions/finacle',title:'Finacle'},
  //         {link:'/solutions/outsystems',title:'Outsystems'},
  //         {link:'/solutions/mendix',title:'Mendix'},
  //         {link:'/solutions/servicenow',title:'ServiceNow'},
  //         {link:'/solutions/automation-anywhere',title:'Automation Anywhere'}
  //       ]
  //     },
  //     {
  //       id:2,
  //       subtitle : 'Staffing Solutions',
  //       menus:[
  //         {link:'/contract-staffing',title:'Contract Staffing'},
  //         {link:'/permanent-staffing',title:'Permanent Staffing'},
  //         {link:'/hire-train-deploy',title:'Hire-Train-Deploy'},
  //         {link:'/rpo',title:'RPO'}
  //       ]
  //     },
  //     {
  //       id:3,
  //       subtitle : 'Digital Solutions',
  //       menus:[
  //         {link:'/solutions/web-development',title:'Website Development'},
  //         {link:'/solutions/app-development',title:'App Development'},
  //         {link:'/solutions/graphic-designing',title:'Graphic Designing'},
  //         {link:'/solutions/digital-marketing',title:'Digital Marketing'},
  //         {link:'/solutions/paid-ads',title:'Paid Ads'},
  //         {link:'/solutions/seo-smo',title:'SEO & SMO'},
  //         {link:'/solutions/social-media-marketing',title:'Social Media Marketing'},

  //       ]
  //     }
  //   ]
  // },
  // {
  //   id: 3,
  //   link: "#",
  //   title: "Services",
  //   dropdown: true,
  //   dropdown_menus: [
  //     { link: "/solutions/oracle", title: "Oracle" },
  //     { link: "/solutions/finacle", title: "Finacle Core Banking" },
  //     { link: "/solutions/servicenow", title: "Service Now" },
  //     { link: "/solutions/servicenow", title: "Infrastructure Management" },
  //     { link: "/solutions/automation-anywhere", title: "Automation Anywhere" },
  //     {link:'/solutions/automation-anywhere',title:'Low Code No Code'},
  //     { link: "/solutions/outsystems", title: "Outsystems" },
  //     { link: "/solutions/mendix", title: "Mendix" },
  //     { link: "/contract-staffing", title: "Contract Staffing" },
  //     { link: "/solutions/digital-marketing", title: "Digital Services" },
  //   ],
  // },
  // {
  //   id: 3,
  //   link: "#",
  //   title: "Services",
  //   sub_dropdown: true,
  //   dropdown_submenus: [
  //     { link: "/solutions/oracle", title: "Oracle" },
  //     { link: "/solutions/finacle", title: "Finacle Core Banking" },
  //     { link: "/solutions/servicenow", title: "Service Now" },
  //     { link: "/solutions/servicenow", title: "Infrastructure Management" },
  //     { link: "/solutions/automation-anywhere", title: "Automation Anywhere" },
  //     {link:'/solutions/automation-anywhere',title:'Digital Process Automation',
  //    sub_menus: [
  //     { link: "/solutions/outsystems", title: "Outsystems" },
  //     { link: "/solutions/mendix", title: "Mendix" },
  //     { link: "/solutions/mendix", title: "Unqork" },
  //    ],
  //   },
  //     { link: "/contract-staffing", title: "Workforce Solutions" },
  //     { link: "/solutions/digital-marketing", title: "Digital Services" },
  //   ],
  // },
  {
    id: 3,
    link: "#",
    title: "Services",
    sub_dropdown: true,
    dropdown_submenus: [
      { link: "/solutions/infrastructure-management", title: "Infrastructure Management" },
      { link: "/solutions/oracle", title: "Oracle" },
      { link: "/solutions/finacle", title: "Finacle Core Banking" },
      { link: "/solutions/servicenow", title: "Service Now" },
      // { link: "/solutions/infrastructure-management", title: "Infrastructure Management" },
      // { link: "/solutions/automation-anywhere", title: "Automation Anywhere" },
      {
        link: "/solutions/digital-process-automation",
        title: "Digital Process Automation",
      },
      { link: "/contract-staffing", title: "Workforce Solutions" },
      { link: "/solutions/power-platform-dynamic-365", title: "Power Platform and Dynamic 365" },
      { link: "https://cgb-studios.com", title: "Digital Services" },
    ],
  },
  // {
  //   id: 3,
  //   link: "#",
  //   title: "Solutions ",
  //   dropdown: true,
  //   dropdown_menus: [
  //     { link: "/solutions/oracle", title: "Oracle" },
  //     { link: "/solutions/finacle", title: "Finacle Core Banking" },
  //     { link: "/solutions/servicenow", title: "Service Now" },
  //     { link: "/solutions/servicenow", title: "Infrastructure Management" },
  //     { link: "/solutions/automation-anywhere", title: "Automation Anywhere" },
  //     { link: "/solutions/automation-anywhere", title: "Low Code No Code" },

  //     { link: "/contract-staffing", title: "Contract Staffing" },
  //     { link: "/solutions/digital-marketing", title: "Digital Services" },
  //   ],
  //   sub_dropdown: true,
  //   dropdown_submenus: [
  //     {
  //       link: '/solutions/mendix',
  //       title: 'Low Code No Code 2',
  //       sub_menus: [
  //         { link: "/solutions/mendix", title: "Mendix" },
  //         { link: "/solutions/outsystems", title: "Outsystems" },
  //       ]
  //     },
  //   ]
  // },
  // {
  //   id:4,
  //   link:'#',
  //   title:'JCOE',
  //   dropdown:true,
  //   dropdown_menus:[
  //         {link:'/coming-soon',title:'SAP'},
  //         {link:'/coming-soon',title:'Salesforces'},
  //         {link:'/coming-soon',title:'Oracle'},
  //         {link:'/coming-soon',title:'Servicenow'},
  //         {link:'/coming-soon',title:'Outsystems'},
  //         {link:'/coming-soon',title:'Mendix'},
  //         {link:'/coming-soon',title:'Low Code No Code'},
  //   ]
  // },
  // {
  //   id:5,
  //   link:'#',
  //   title:'Training ',
  //   dropdown:true,
  //   dropdown_menus:[
  //         {link:'/training/corporate-training',title:'Corporate Training'},
  //         {link:'/training/customise-training',title:'Customise Training'},
  //         {link:'/coming-soon',title:'Online Courses'},
  //   ]
  // },
  {
    id: 6,
    link: "#",
    title: "Company ",
    dropdown: true,
    dropdown_menus: [
      { link: "/our-company", title: "Our Company" },
      // {link:'/our-story',title:'Our Story'},
      // {link:'/vision',title:'Vision'},
      // {link:'/mission',title:'Mission'},
      // {link:'/awards',title:'Awards'},
      // {link:'/recognition',title:'Recognition'},
      // { link: "/our-culture", title: "Our Culture" },
      { link: "/leadership", title: "Leadership" },
      { link: "/partners", title: "Partners" },
    ],
  },
  {
    id: 7,
    link: "/blog",
    title: "Insights",
    dropdown: true,
    dropdown_menus: [
      { link: "/blog", title: "Blogs" },
      { link: "/article", title: "Articles" },
    ],
  },
  {
    id: 8,
    link: "/news-media",
    title: "News & Media",
    // dropdown:true,
    // dropdown_menus:[
    // {link:'/blog',title:'Blogs'},
    // {link:'/news-media',title:'News & Media'},
    // {link:'/blog-grid',title:'Blog Grid'},
    // {link:'/blog-details',title:'Blog Details'},
    // ]
  },
  {
    id: 9,
    link: "/careers",
    title: "Careers",
  },
];

export default menu_data;
