/* Change this file to get your personal Porfolio */

import {
  SiFacebook,
  SiGithub,
  SiLinkedin,
  SiTwitter,
  SiGmail,
  SiSass,
  SiReact,
  SiJavascript,
  SiNextdotjs,
  SiPhp,
  SiYarn,
  SiNodedotjs,
  SiNpm,
  SiCodechef,
} from "react-icons/si";

import { FaVuejs, FaHackerrank, FaPodcast } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { TiCss3 } from "react-icons/ti";
import { IoLogoLaravel, IoLogoJavascript } from "react-icons/io5";

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "A Awal Hadi's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "A Awal Hadi Hathidara Portfolio",
    type: "website",
    url: "http://awalhadi.ml/",
  },
};

//Home Page
const greeting = {
  title: "A Awal Hadi",
  logo_name: "A Awal Hadi",
  nickname: "Hadi",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1u8YX5OPaQRHwFRWl3nmX02YZFjYoVMNi/view?usp=sharing",
  portfolio_repository: "https://github.com/awalhadi/nextjs-portfolio",
  githubProfile: "https://github.com/awalhadi",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/awalhadi",
    fontAwesomeIcon: <SiGithub />, // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/a-awal-hadi-a64b88114/",
    fontAwesomeIcon: <SiLinkedin />, // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:awalhadi5@gmail.com",
    fontAwesomeIcon: <SiGmail />, // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/AAwalHadi1",
    fontAwesomeIcon: <SiTwitter />, // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://web.facebook.com/a.awal.hadi/",
    fontAwesomeIcon: <SiFacebook />, // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
];

const skills = {
  data: [
    {
      id: 3,
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Build my own custom “PHP MVC framework” Project by core PHP OOP",
        "⚡ Builds a scalable web application example: Inventory, cms, api and frontend development",
        "⚡ Good problem solving skills",
        "⚡ Developing Frontend applications using VueJs, ReactJs and NextJs",
        "⚡ Creating application backend in PHP, Laravel and basic knowledge of Node, Express",
      ],
      softwareSkills: [
        {
          id: 1,
          skillName: "HTML5",
          fontAwesomeClassname: <AiFillHtml5 />,
          style: {
            color: "#E34F26",
          },
        },
        {
          id: 2,
          skillName: "CSS3",
          fontAwesomeClassname: <TiCss3 />,
          style: {
            color: "#1572B6",
          },
        },
        {
          id: 3,
          skillName: "Sass",
          fontAwesomeClassname: <SiSass />,
          style: {
            color: "#CC6699",
          },
        },
        {
          id: 4,
          skillName: "JavaScript",
          fontAwesomeClassname: <SiJavascript />,
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          id: 5,
          skillName: "ReactJS",
          fontAwesomeClassname: <SiReact />,
          style: {
            color: "#61DAFB",
          },
        },
        {
          id: 6,
          skillName: "NextJS",
          fontAwesomeClassname: <SiNextdotjs />,
          style: {
            color: "#1e0b05",
          },
        },
        {
          id: 7,
          skillName: "VueJS",
          fontAwesomeClassname: <FaVuejs />,
          style: {
            color: "#15c500",
          },
        },
        {
          id: 8,
          skillName: "NodeJS",
          fontAwesomeClassname: <SiNodedotjs />,
          style: {
            color: "#339933",
          },
        },
        {
          id: 9,
          skillName: "NPM",
          fontAwesomeClassname: <SiNpm />,
          style: {
            color: "#CB3837",
          },
        },
        {
          id: 10,
          skillName: "Yarn",
          fontAwesomeClassname: <SiYarn />,
          style: {
            color: "#2C8EBB",
          },
        },
        {
          id: 11,
          skillName: "PHP",
          fontAwesomeClassname: <SiPhp />,
          style: {
            color: "#663399",
          },
        },
        {
          id: 12,
          skillName: "LARAVEL",
          fontAwesomeClassname: <IoLogoLaravel />,
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    // {
    // id: 4,
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
    // {
    // id: 5,
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      icon: <FaHackerrank />,
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Beecrowd",
      iconifyClassname: "simple-icons:codechef",
      icon: <FaPodcast rotate={90} />,
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.beecrowd.com.br/judge/en/profile/406778",
    },
  ],
};

const degrees = {
  degrees: [
    {
      id: 1,
      title: "Canadian University of bangladesh (CUB)",
      subtitle: "BSC in EEE",
      logo_path: "iiitk_logo.png",
      alt_name: "CUB",
      duration: "2019 - Present",
      descriptions: [
        "⚡ I have studied EEE but learning web application development.",
        "⚡ Apart from this, I have done courses on Frontend development, Backend development and Full Stack Development.",
        "⚡ I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "http://cub.edu.bd",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Web application development (PHP Laravel)",
      subtitle: "BITM",
      logo_path: "stanford_logo.png",
      certificate_link: "https://www.bitm.com/",
      alt_name: "SBITM",
      color_code: "#8C151599",
    },
    {
      title: "Frontend Development",
      subtitle: "- Programing hero",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link: "https://www.course.programing-hero.com",
      alt_name: "React developer",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I have worked with many many web applications, Designer and Develop backend of web applications. I love organizing events and that is why I am also involved with many open source communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      id: 1,
      title: "Work",
      experiences: [
        {
          id: 1,
          title: "ITClanBD",
          company: "ITClanBD",
          company_url: "https://itclanbd.com/",
          logo_path: "legato_logo.png",
          duration: "June 2021 - PRESENT",
          location: "Dhaka, Bangladesh",
          description:
            "I am working on web application developer. The projects involve Inventory management, Event management, forum, cms and e-commerce system. I am currently working on marriage system.Our goal is to make scalable and high performance web applications.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create different amazing applications and deploy them to web applications.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "a-awal-hadi.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with web application Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write code in different way and its amazing to me to find new patterns of code and try to find the best performance output.",
    link: "https://blog.gqrcode.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Natore, Dist- Rajshahi, Bangladesh",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+8801515213009",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
