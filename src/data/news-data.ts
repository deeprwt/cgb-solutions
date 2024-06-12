// import { IBlog } from "@/types/blog-d-t";
import { IArticle } from "@/types/article-d-t";

import mumbai from "@/assets/images/blog/card_img.jpg";
import dubai from "@/assets/images/blog/oracle_cloutdworld.svg";
import sap from "@/assets/images/blog/sap.jpg";
import leap from "@/assets/images/cgbhome/leap.png";
import techsparks from "@/assets/images/cgbhome/techsparks.png";

let idPluse = 1; // Initialize the variable with the starting value of ID

// Function to generate unique IDs
function generateUniqueId() {
  return idPluse++;
}

const news_data: IArticle[] = [
  {
    id: 1,
    img: mumbai,
    date: "14 FEB 2024",
    link: "From AI to Logistics A Deep Dive into Oracle CloudWorld Tour Mumbai",
    title:
      "From AI to Logistics: A Deep Dive into Oracle CloudWorld Tour - Mumbai",
    author: "Deepak Rawat",
    post_info: "CGB Solutions . Technolgy",
    category: "IT",
    page: "home",
    tag: "sustainability",
    desc: "Safeguard your company's cybersecurity with proven strategies. From multi-layered defense to cyber literacy, fortify your data against evolving threats.",
    keyword:
      "company data protection, cyber threats, multi-layered security, cyber literacy, software updates, vulnerability patching, security audits, risk assessments, data backup, disaster recovery, cyber vigilance, organizational culture, cybersecurity strategies",

    content: [
      {
        heading: "",
        paragraph:
          "Our recent participation in the Oracle Cloud World Tour in Mumbai was an immersive experience for technology enthusiasts. Let's delve into the key takeaways and insights from this remarkable event.",
      },
      {
        heading: "Oracle Cloud Tour Mumbai: A Symphony of Innovation",
        paragraph:
          "The Oracle Cloud Tour in Mumbai transcended the typical event experience, evolving into a symphony of technological marvels. The anticipation for Oracle's latest features electrified the vibrant atmosphere as we stepped into this tech extravaganza.",
      },
      {
        heading:
          "Unlocking the Power of Fusion Cloud Supply Chain & Manufacturing (SCM)",
        paragraph:
          "A focal point of the event was Oracle's commitment to enhancing customer logistics operations. Transformative updates in its Fusion Cloud SCM portfolio showcased Oracle's dedication to elevating efficiency, streamlining processes, and delivering a superior logistics experience.",
      },
      {
        heading: "Expanded Business Intelligence: A Game-Changer",
        paragraph:
          "Oracle set a new standard with expanded business intelligence capabilities, seamlessly integrating advanced analytics and intuitive interfaces. This ensures businesses not only collect data but also gain actionable insights, facilitating informed decision-making.",
      },
      {
        heading: "Precision in Logistics Network Modeling",
        paragraph:
          "Recognizing the essence of optimization in logistics, Oracle introduced improved logistics network modeling. This empowers businesses to design and implement supply chain networks that are not just efficient but also intelligent.",
      },
      {
        heading: "Incentivizing Growth: The Trade Incentive Program",
        paragraph:
          "Oracle strategically introduced the trade incentive program to encourage businesses to explore its diverse offerings. More than just a program, it serves as an invitation to embark on a journey of mutual growth.",
      },
      {
        heading:
          "Mobility Redefined with Oracle Transportation Management Mobile App",
        paragraph:
          "The logistics landscape receives a tech-savvy upgrade with the enhanced Oracle Transportation Management Mobile App. This enables seamless management of logistics operations on the go, putting the power of Oracle in the palm of your hands.",
      },
      {
        heading: "Workbenches for Enhanced Productivity ",
        paragraph:
          "Oracle's commitment to user experience shines through with enhanced workbenches featuring a user-friendly interface. These workspaces prioritize functionality, productivity, and ease of use.",
      },
      {
        heading: "AI Revolution in the Autonomous Database",
        paragraph:
          "Oracle takes a significant leap forward in integrating AI and advanced machine learning into applications with groundbreaking updates in the Autonomous Database.",
      },
      {
        heading:
          "Autonomous Database Select AI: Crafting Intelligent Applications",
        paragraph:
          "A highlight of the event was the introduction of Autonomous Database Select AI, providing developers with tools to effortlessly create AI-enabled applications, marking a paradigm shift in application development.",
      },
      {
        heading: "Spatial Enhancement in Oracle Machine Learning",
        paragraph:
          "Oracle Machine Learning reaches new heights with a spatial enhancement that elevates location relationships in machine learning models. This results in precise predictions and context-aware insights, redefining the potential of machine learning applications.",
      },
      {
        heading: "User-Friendly No-Code Model Monitoring Interface",
        paragraph:
          "Oracle simplifies the complex task of model monitoring with a user-friendly no-code model monitoring interface. Developers can now track and optimize performance without delving into intricate coding.",
      },
      {
        heading: "Visualizing Knowledge with Autonomous Database Graph Studio",
        paragraph:
          "The new UI for Autonomous Database Graph Studio offers a visually appealing experience for data enthusiasts, allowing users to create property graph views on RDF knowledge, providing a window into a new dimension of data visualization.",
      },
      {
        heading:
          "CGB's Oracle Expertise - Seamless Solutions, Infinite Possibilities",
        paragraph:
          "As a trusted Oracle service provider, CGB brings a wealth of expertise in implementing, optimizing, and integrating Oracle solutions across various domains. Our capabilities encompass strategic partnerships with Oracle, implementation excellence in solutions like Fusion Cloud SCM, seamless integration of business intelligence, logistics optimization with Oracle Transportation Management, and active contributions to Oracle's AI and machine learning advancements.",
      },
      {
        heading: "",
        paragraph:
          "At CGB, our Oracle capabilities empower clients with cutting-edge technologies, ensuring they stay ahead in an ever-evolving technological landscape.",
      },
      {
        heading: "Conclusion: A Future Defined by Innovation",
        paragraph:
          "Reflecting on our experience at the Oracle Cloud World Tour in Mumbai, it is evident that we have witnessed the shaping of the future. Oracle's new features serve as catalysts for innovation, transforming the way businesses operate and innovate. We are eager to embrace these advancements, integrating them into our strategies to lead the way in this era of tech evolution. Cheers to Oracle for an event that not only showcased technology but inspired a vision for the future.",
      },
    ],
    content2: "",
  },
  {
    id: 2,
    img: dubai,
    date: "12 Jan 2024",
    link: "CGB Solutions Makes Waves at CloudWorld Tour Dubai 2024",
    title: "CGB Solutions Makes Waves at CloudWorld Tour Dubai 2024,",
    author: "Deepak Rawat",
    post_info: "CGB Solutions . Technolgy",
    category: "IT",
    page: "home",
    tag: "sustainability",
    desc: "Safeguard your company's cybersecurity with proven strategies. From multi-layered defense to cyber literacy, fortify your data against evolving threats.",
    keyword:
      "company data protection, cyber threats, multi-layered security, cyber literacy, software updates, vulnerability patching, security audits, risk assessments, data backup, disaster recovery, cyber vigilance, organizational culture, cybersecurity strategies",

    content: [
      {
        heading: "",
        paragraph:
          "CGB Solutions recently embarked on a knowledge-seeking mission at the prestigious CloudWorld Tour Dubai 2024. As engaged visitors, our team actively absorbed the vibrant exchange of ideas, delving into cutting-edge trends, forging valuable connections, and gathering critical insights to empower our clients",
      },
      {
        heading: "",
        paragraph:
          "Immersed in the dynamic atmosphere buzzing with presentations, workshops, and discussions on the latest advancements in cloud technology, CGB Solutions actively participated in this learning environment. While primarily present to glean knowledge, our team engaged with leading industry figures, attended insightful sessions, and enthusiastically participated in networking opportunities. This invaluable experience yielded a deeper understanding of the evolving cloud landscape, uncovering key trends and best practices that will inform and shape our future service offerings.",
      },
      {
        heading: "",
        paragraph:
          "CloudWorld Tour Dubai proved to be an enriching experience, solidifying CGB Solutions' commitment to providing cutting-edge IT staffing and technology solutions. Our team returned brimming with valuable knowledge and strengthened industry connections, eager to translate these insights into tangible benefits for our clients. We are confident that this newfound knowledge will empower us to navigate the ever-evolving cloud landscape with agility and expertise, ensuring our clients stay ahead of the curve in their own cloud journeys. If you are seeking a trusted partner who prioritises ongoing learning and innovation, connect with CGB Solutions today and discover how we can unlock your cloud potential.",
      },
    ],
    content2: "",
  },
  {
    id: 3,
    img: leap,
    date: "4 Mar 2024",
    link: "CGB Solutions to Showcase Expertise at LEAP 2024",
    title: "CGB Solutions to Showcase Expertise at LEAP 2024!",
    author: "Deepak Rawat",
    post_info: "CGB Solutions .  Technolgy",
    category: "IT",
    tag: "sustainability",
    desc: "Safeguard your company's cybersecurity with proven strategies. From multi-layered defense to cyber literacy, fortify your data against evolving threats.",
    keyword:
      "company data protection, cyber threats, multi-layered security, cyber literacy, software updates, vulnerability patching, security audits, risk assessments, data backup, disaster recovery, cyber vigilance, organizational culture, cybersecurity strategies",

    content: [
      {
        heading: "",
        paragraph:
          "CGB Solutions is excited to announce our participation in LEAP 2024, the leading tech event in the region, taking place in Riyadh, Saudi Arabia from March 4th to 7th, 2024!",
      },
      {
        heading: "Connect with Us at LEAP",
        paragraph:
          "We invite you to visit our booth at LEAP 2024 and explore how CGB Solutions can empower your tech ventures. Our team of experts will be available to discuss your specific needs and showcase our comprehensive suite of services designed to help businesses thrive in today's dynamic technological landscape.",
      },
      {
        heading: "Optimistic Outlook for the Tech Community",
        paragraph:
          "At CGB Solutions, we share the optimistic vision of LEAP 2024. We see immense opportunities for growth and innovation within the ever-evolving tech community. We are committed to partnering with businesses and individuals to navigate this exciting landscape and achieve their full potential.",
      },
      {
        heading: "Experience the CGB Advantage",
        paragraph:
          "To learn more about our comprehensive service offerings, please visit our website: http://www.cgbindia.com/",
      },
      {
        heading: "Connect with Us on LinkedIn",
        paragraph:
          "Gain deeper insights into our company culture, expertise, and ongoing projects by following our LinkedIn page: https://www.linkedin.com/in/evan-rawn",
      },
      {
        heading: "Contact Us",
        paragraph:
          "Have questions or specific inquiries? Feel free to reach out to our team directly via email: info@cgbindia.com",
      },
      {
        heading: "",
        paragraph:
          "We look forward to connecting with you at LEAP 2024 and contributing to the advancement of the tech ecosystem!",
      },
    ],
    content2: "",
    page: "home",
  },
  {
    id: 4,
    img: techsparks,
    date: "1 Mar 2024",
    link: "CGB Solutions Makes Waves at TechSparks 24",
    title: "CGB Solutions Makes Waves at TechSparks 24!",
    author: "Deepak Rawat",
    post_info: "CGB Solutions .  Technolgy",
    category: "IT",
    page: "home",
    tag: "sustainability",
    desc: "Safeguard your company's cybersecurity with proven strategies. From multi-layered defense to cyber literacy, fortify your data against evolving threats.",
    keyword:
      "company data protection, cyber threats, multi-layered security, cyber literacy, software updates, vulnerability patching, security audits, risk assessments, data backup, disaster recovery, cyber vigilance, organizational culture, cybersecurity strategies",

    content: [
      {
        paragraph:
          "CGB Solutions is thrilled to share the success of our participation in TechSparks 24, held in Mumbai on March 1st, 2024. This premier tech event brought together a vibrant community of industry leaders, entrepreneurs, and innovators, and we were excited to be a part of the action!",
      },
      {
        heading: "Building Connections and Fostering Growth",
        paragraph:
          "Our presence at TechSparks 24 proved to be a resounding success. We had the privilege of connecting with a multitude of talented individuals from across the tech landscape, including established businesses and exciting startups. Through engaging conversations and insightful discussions, we gained a deeper understanding of the current needs and challenges faced by various players in the industry.",
      },
      {
        heading: "Optimistic Outlook for the Tech Community",
        paragraph:
          "Based on our findings on the official Facebook page of TechSparks YS (link), here's a glimpse into what to expect at the upcoming TechSparks Mumbai 2024 event:",
      },
      {
        heading: "Focus on India's Booming Tech Industry",
        paragraph:
          "TechSparks Mumbai 2024 promises to be a landmark event, placing the spotlight on India's flourishing tech sector. The event will delve into the industry's current trajectory and its projected impact on the nation's future.",
      },
      {
        heading: "Influential Speakers and Diverse Topics",
        paragraph:
          "Get ready to hear insights from prominent figures in the tech world. TechSparks Mumbai 2024 boasts a lineup of esteemed speakers and panelists, including Swapna Gupta of Avaana Climate Fund and Rahul Jain of Epigamia.",
      },
      {
        paragraph:
          "The event will also explore a wide range of thought-provoking topics that are shaping the tech landscape. Attendees can expect discussions on:",
      },
      {
        paragraph:
          "AI-powered chatbots: How chatbots powered by Artificial Intelligence are revolutionizing customer service and communication.",
      },
      {
        paragraph:
          "Fintech for the unbanked: How financial technology solutions are bridging the gap and empowering underserved populations.",
      },
      {
        paragraph:
          "The future of digital banking: Exploring the latest trends and advancements in digital banking that are transforming the financial sector.",
      },
      {
        heading: "Commitment to Empowering the Community",
        paragraph:
          "The energy and optimism at TechSparks 24 were truly inspiring. We were particularly impressed by the innovative spirit and dedication showcased by the startup community. This further solidified our commitment to providing comprehensive solutions that empower businesses and startups to achieve their full potential.",
      },
      {
        heading: "Moving Forward: Collaborative Solutions",
        paragraph:
          "CGB Solutions is actively exploring ways to collaborate with the connections we made at TechSparks 24. We are confident that by combining our expertise with the innovative ideas and entrepreneurial spirit of the businesses and startups we met, we can develop solutions that drive significant growth and progress within the tech community.",
      },
      {
        heading: "Stay Tuned!",
        paragraph:
          "We are excited to share more details about these collaborative efforts in the near future. In the meantime, if you're interested in learning how CGB Solutions can help your business or startup thrive,  visit our website: http://www.cgbindia.com/ and explore our comprehensive suite of services.",
      },
      {
        heading: "Let's build the future of technology, together!",
      },
    ],
    content2: "",
  },
  {
    id: 5,
    img: sap,
    date: "07 jun 2024",
    link: "SAP Unveils Generative AI Innovations at Annual Sapphire Conference",
    title:
      "SAP Unveils Generative AI Innovations at Annual Sapphire Conference",
    author: "Deepak Rawat",
    post_info: "CGB Solutions",
    category: "IT",
    page: "home",
    tag: "sustainability",
    desc: "SAP is fostering a new wave of business insight and creativity.",
    keyword:
      "company data protection, cyber threats, multi-layered security, cyber literacy, software updates, vulnerability patching, security audits, risk assessments, data backup, disaster recovery, cyber vigilance, organizational culture, cybersecurity strategies",

    content: [
      {
        paragraph:
          "Orlando — At its annual SAP Sapphire conference, SAP introduced groundbreaking generative AI advancements and strategic partnerships, underscoring its commitment to revolutionizing business operations in the AI era. By integrating Business AI throughout its enterprise cloud portfolio, which supports the world's most critical processes, SAP is fostering a new wave of business insight and creativity.",
        paragraph2:
          "Christian Klein, CEO and member of the Executive Board of SAP SE, stated, “The Business AI innovations we're announcing at SAP Sapphire in 2024 will redefine the way businesses run. Today's AI announcements and partnerships build on our commitment to deliver revolutionary technology that drives real-world results, helping customers unleash the agility and ingenuity they need to succeed in today's fast-moving business landscape.”",
      },
      {
        heading: "AI Transformations for Business Efficiency",
        paragraph:
          "SAP's infusion of Business AI across its enterprise solutions promises to deliver profound insights, empowering users to achieve superior outcomes and enhance human creativity in problem-solving. Among the notable advancements are AI-generated reports in SAP SuccessFactors, providing managers with responsibly sourced insights for compensation discussions. Additionally, SAP Sales Cloud solutions now feature forecasting capabilities that identify the most promising salesperson-product combinations to drive sales.",
        paragraph2:
          "The SAP Business Technology Platform is set to incorporate large language models from Amazon Web Services, Meta, and Mistral AI into its generative AI hub. This integration within the SAP AI Core infrastructure simplifies the development of generative AI use cases for SAP applications, further enhancing the platform's versatility.",
        paragraph3:
          "A standout in SAP's AI suite is Joule, the generative AI copilot. Joule efficiently organizes and contextualizes data from multiple systems to enhance automation and decision-making processes. Initially launched in SAP SuccessFactors last fall, Joule is now integrated into SAP S/4HANA Cloud and other solutions, including SAP Build and SAP Integration Suite. By the end of the year, Joule's reach will extend to SAP Ariba and SAP Analytics Cloud solutions. SAP also plans to integrate Joule with Microsoft Copilot, providing users with a unified experience that seamlessly merges information from SAP and Microsoft 365 interactions.",
      },
      {
        heading: "Ethical AI Commitment",
        paragraph:
          "Reflecting the growing significance of Business AI, SAP has reaffirmed its dedication to developing responsible AI technologies. At Sapphire, SAP announced its adoption of the 10 guiding principles of the UNESCO Recommendation on the Ethics of Artificial Intelligence, underscoring its commitment to creating AI technologies that respect human rights, promote fairness, and contribute to sustainable development.",
      },
      {
        heading: "Expanding Innovation through Strategic Partnerships",
        paragraph:
          "SAP's collaboration with leading technology firms is driving the boundaries of generative AI at the enterprise level. Enhanced partnerships with AWS and Microsoft, along with new alliances with Google Cloud, Meta, Mistral AI, and NVIDIA, empower SAP to leverage AI-ready technology and deliver enhanced real-world results.",
      },
      {
        heading: "Google Cloud",
        paragraph:
          "The expanded SAP-Google Cloud partnership focuses on utilizing Business AI to help enterprises better predict and mitigate supply-chain risks, thereby minimizing disruptions and maintaining optimal inventory levels. Joule, integrated with SAP Integrated Business Planning for Supply Chain, will work alongside Google Cloud's Gemini models AI assistant and Google Cloud Cortex Framework's data foundation.",
      },
      {
        heading: "Meta",
        paragraph:
          "SAP will harness Meta's Llama 3 AI to generate scripts that render highly customized analytics applications within SAP Analytics Cloud. Meta's advanced AI model excels in language nuances and contextual understanding, making it ideal for translating complex business requirements into actionable insights.",
      },
      {
        heading: "Mistral AI",
        paragraph:
          "SAP is set to incorporate new large language models from Mistral AI into its generative AI hub capability in SAP AI Core. Mistral AI, a global company headquartered in Paris, specializes in generative AI, adding significant value to SAP's AI ecosystem.",
      },
      {
        heading: "NVIDIA",
        paragraph:
          "SAP and NVIDIA are advancing a comprehensive cross-product partnership, embedding cutting-edge technologies into enterprise-ready business applications. NVIDIA's state-of-the-art AI models will support various SAP initiatives, including:",
        paragraph2:
          "- Training Joule to serve as an AI assistant for RISE with SAP solution implementations by sifting through SAP consulting assets to provide precise implementation-related answers.",
        paragraph3:
          "- Embedding Joule in the ABAP Cloud model to generate ABAP code for SAP developers, with NVIDIA's infrastructure managing SAP's generative AI model for ABAP code generation.",
        paragraph4:
          "- Utilizing NVIDIA Omniverse Cloud APIs to simulate complex manufacturing products and configurations as industrial digital twins within the SAP Intelligent Product Recommendation solution.",
      },
      {
        heading: "Cloud Technology Enhancing Agility and Sustainability",
        paragraph:
          "Recognizing that success in the AI era hinges on cloud adoption, SAP is simplifying the transition to the cloud for its customers. Initiatives launched at Sapphire aim to connect customers with partners possessing the necessary expertise for complex SAP S/4HANA Cloud transformations. Moreover, SAP unveiled new features in its cloud solutions to aid organizations in measuring, managing, and executing their sustainability strategies. Solutions like SAP Sustainability Control Tower and SAP Sustainability Footprint Management now enable businesses to track carbon footprints at scale and comply with regulatory standards.",
      },
      {
        heading: "CGB's Perspective",
        paragraph:
          "As a leading IT company, CGB views these advancements by SAP as transformative for the industry. SAP's integration of AI and cloud technologies aligns perfectly with CGB's mission to deliver innovative and efficient IT solutions. By leveraging SAP's latest AI and cloud offerings, CGB can enhance its service portfolio, providing clients with cutting-edge tools to navigate the complexities of modern business landscapes. The emphasis on ethical AI and sustainability further resonates with CGB's core values of responsible innovation and sustainable development.",
      },
      {
        heading: "Conclusion",
        paragraph:
          "The SAP Sapphire conference has indeed set a new standard for AI integration and cloud technology in enterprise solutions. SAP's comprehensive approach to embedding AI across its portfolio, from advanced AI-generated reports to predictive analytics and seamless integration with leading AI models, demonstrates its commitment to driving innovation and real-world results for businesses globally. These developments are not just about technological advancements; they are about empowering businesses to operate more efficiently, make better decisions, and stay agile in an ever-evolving marketplace.",
        paragraph2:
          "CGB, as a leading IT company, is poised to capitalize on these innovations. With a deep understanding of SAP's capabilities and a commitment to leveraging cutting-edge technology, CGB is well-positioned to help clients navigate the complexities of modern business landscapes. SAP's advancements in AI, cloud technology, and sustainability align seamlessly with CGB's mission to deliver innovative, efficient, and responsible IT solutions.",
        paragraph3:
          "By integrating SAP's AI-driven insights and automation capabilities, CGB can offer clients enhanced tools for decision-making and problem-solving. The ability to provide AI-generated reports, predictive analytics, and customised AI applications will enable CGB's clients to optimise their operations and achieve better outcomes. Furthermore, SAP's commitment to ethical AI principles resonates with CGB's values, ensuring that the technology is used responsibly and sustainably.",
        paragraph4:
          "SAP's partnerships with industry giants like Google Cloud, Meta, Mistral AI, and NVIDIA also open up new possibilities for CGB to deliver innovative solutions. The integration of Google Cloud's Gemini models, Meta's Llama 3, and NVIDIA's advanced AI infrastructure into SAP's ecosystem enhances the robustness and versatility of the solutions CGB can offer. These collaborations ensure that CGB's clients have access to the best-in-class AI technologies, enabling them to stay ahead of the competition.",
        paragraph5:
          "Moreover, SAP's focus on cloud technology and sustainability aligns with the growing demand for environmentally responsible business practices. By incorporating solutions like SAP Sustainability Control Tower and SAP Sustainability Footprint Management, CGB can help clients track and manage their carbon footprints, meet regulatory standards, and execute their sustainability strategies effectively.",
        paragraph6:
          "In conclusion, SAP's latest innovations unveiled at the Sapphire conference represent a significant leap forward in the integration of AI and cloud technology in enterprise solutions. CGB is excited to leverage these advancements to enhance its service offerings and provide clients with state-of-the-art tools to drive their business success. With a focus on ethical AI, strategic partnerships, and sustainability, CGB is committed to helping clients navigate the complexities of the modern business landscape and achieve their goals in the era of AI.",
        paragraph7:
          "CGB offers comprehensive SAP services, ensuring that clients have access to the latest AI-driven insights, automation capabilities, and sustainable solutions. By partnering with SAP, CGB is dedicated to delivering innovative, efficient, and responsible IT solutions that empower businesses to thrive in a rapidly changing world. Whether it's through advanced AI-generated reports, predictive analytics, or cloud-based sustainability tracking, CGB is ready to help clients harness the power of SAP's cutting-edge technologies and drive their business forward",
        endingbold: "Contact us today at anurag@cgbsolution.com to learn more",
      },
    ],
    content2: "",
  },
  // home 5
];

export default news_data;
