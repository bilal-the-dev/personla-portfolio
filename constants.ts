
export const METADATA = {
  title: "Portfolio | Shahzeb Ali",
  description:
    "Pakistan's youngest IBM Certified Professional Data Scientist and the Python Institute's Certified Developer, I have gained valuable expertise and skills in the dynamic world of technology",
  siteUrl: "",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "Pakistan's youngest Certified" +
  " Professional Data Scientist",
  "Pakistan's Youngest" +
  " Python Certified Developer",
  "Freelancing with " +
  "clients from US and Saudi Arabia",
  "Mentoring people",
];

export const EMAIL = "ayush.singh.xda@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/shahzeb-ali-34a1841a2/",
  github: "https://github.com/ayush013",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Customer Churn Analysis",
    image: "/projects/churn.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Focusing on telecommunications networks including Jazz/Warid, Zong, Ufone, and Telenor",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://lnkd.in/d_uqU6aq",
    tech: ['python', 'pandas','figma'],
  },
  {
    name: "OmniRoad Ai ",
    image: "/projects/myokr.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description:  "Revolutionizing 𝐑𝐨𝐚𝐝 𝐒𝐚𝐟𝐞𝐭𝐲 and 𝐓𝐫𝐚𝐟𝐟𝐢𝐜 𝐌𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭 🚀",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "",
    tech: ['figma', 'python', 'pandas'],
  },
  {
    name: "Data Augmentation on MNIST Dataset",
    image: "/projects/dlt-website.jpg",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "Enhancing MNIST Classification Accuracy Through Data Augmentation",
    gradient: ["#245B57", "#004741"],
    url: "",
    tech: ["figma", "angular", "gsap"],
  } ,
  {
    name: "Face Mask Detector",
    image: "/projects/dlt-website.jpg",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "Application designed for Mask detection to protect the workplace & community from Coronavirus spread",
    gradient: ["#245B57", "#004741"],
    url: "https://www.linkedin.com/posts/shahzeb-ali-34a1841a2_to-allah-all-praise-and-glory-another-project-activity-6704016260016959488-CtbK?utm_source=share&utm_medium=member_desktop",
    tech: ["figma", "angular", "gsap"],
  }
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "redux",
    "next",
    "angular",
    "gsap",
    "tailwind",
    "sass",
    "svg",
    "html",
    "css",
  ],
  userInterface: ["figma", "sketch", "illustrator", "photoshop"],
  other: ["git", "webpack", "gulp", "lightroom", "aftereffects"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Digital Expo 2024",
    size: ItemSize.SMALL,
    subtitle:
        "1st position in the \"Artificial Intelligence\" category at the prestigious Digital Expo 2024",
    image: "",
    slideImage: "/timeline/expo-certificate.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Pakistan's youngest Certified IBM Data Scientist",
    size: ItemSize.SMALL,
    subtitle:
        "Proud moment for me & my family, I have manage to become Pakistan's youngest Certified IBM Data Scientist. 🎯",
    image: "",
    slideImage: "/timeline/ibm-certificate.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Data Science Intern - LetsGrowMore",
    size: ItemSize.SMALL,
    subtitle: "Gained hands-on experience in data preprocessing, equipping me with the ability to transform raw data into actionable insights using Python 🚀",
    image: "",
    slideImage: "/timeline/growmore-certificate.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Data Science Intern - Spark Foundation",
    size: ItemSize.SMALL,
    subtitle: "Excited to announce I've completed a Python course in web scraping and earned my certification! 🚀",
    image: "",
    slideImage: "/timeline/spark-certificate.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Pakistan's Youngest Certified Python Developer",
    size: ItemSize.SMALL,
    subtitle:
      "Alhamdullilah! I'm Officially Pakistan's Youngest Certified Python Developer and have been featured in Pakistan Book of Records!",
    image: "",
    slideImage: "/timeline/young-certificate.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "New YouTube Channel Launched  ",
    size: ItemSize.SMALL,
    subtitle:
      "Thrilled to announce the launch of my new YouTube channel! Join me as I explore and share insights on Python programming, and data science 😎",
    image: "",
    slideImage: "/timeline/youtube-channel.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2020",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Python Certification",
    size: ItemSize.SMALL,
    subtitle:
      "Excited to share that I've completed a comprehensive Python programming course and earned my certification! 🎯",
    image: "",
    slideImage: "/timeline/python-certificate.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Web Scraping Certification",
    size: ItemSize.SMALL,
    subtitle: "Excited to announce I've completed a Python course in web scraping and earned my certification! 🚀",
    image: "",
    slideImage: "/timeline/scraping-certificate.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
