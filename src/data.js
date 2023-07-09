import {
  CSS3,
  Express,
  HTML5,
  Javascript,
  Mongodb,
  Nextjs,
  Nextjs2,
  Nodejs,
  Python,
  Reactjs,
  admin,
  food,
  food1,
  port1,
  port2,
  port3,
  social,
  stripe,
} from "./assets";

export const projectStats = [
  {
    name: "Total Projects",
    value: "10+",
  },
  {
    name: "E-commerce",
    value: "5+",
  },
  {
    name: "News App",
    value: "1",
  },
  {
    name: "Travel",
    value: "2",
  },
];

export const tools = [
  {
    name: "MongoDB",
    icon: Mongodb,
  },
  {
    name: "Express",
    icon: Express,
  },
  {
    name: "React",
    icon: Reactjs,
  },
  {
    name: "NodeJs",
    icon: Nodejs,
  },
  {
    name: "Tailwind",
    icon: Nextjs,
  },
];

export const skills = [
  {
    name: "ReactJs",
    value: 80,
    icon: Reactjs,
  },
  {
    name: "NodeJs",
    value: 60,
    icon: Nodejs,
  },
  {
    name: "Tailwind",
    value: 80,
    icon: Nextjs,
  },
  {
    name: "MongoDB",
    value: 60,
    icon: Mongodb,
  },
  {
    name: "CSS3",
    value: 80,
    icon: CSS3,
  },
  {
    name: "HTML5",
    value: 90,
    icon: HTML5,
  },
  {
    name: "JavaScript",
    value: 60,
    icon: Javascript,
  },
  {
    name: "Firebase",
    value: 78,
    icon: Python,
  },
];

export const projects = [
  {
    id: 1,
    tech: [
    { name: "Tailwind", icon: Nextjs, }, 
    { name: "Firebase", icon: Python, },
    { name: "MongoDB", icon: Mongodb, },
    { name: "React", icon: Reactjs, },
    { name: "Express", icon: Express, },
    { name: "Stripe", icon: stripe, },
  ],
    title: "Clarionet",
    cat: "E-commerce",
    url: "https://clarionet-4b3a6.web.app/",
    Gurl: "https://github.com/Joysd1010/Clarionet-Client-Side.git",
    img: admin,
  },
  {
    id: 2,
    title: "PlayTime",
    tech: [
      { name: "Tailwind", icon: Nextjs, }, 
      { name: "Firebase", icon: Python, },
      { name: "MongoDB", icon: Mongodb, },
      { name: "React", icon: Reactjs, },
      { name: "Express", icon: Express, },
      { name: "JavaScript", icon: Javascript, },
    
    ],
    cat: "E-commerce",
    url: "https://toyshop-ff3c1.web.app/",
    Gurl: "https://github.com/Joysd1010/ToyMarketPlace.git",
    img: port1,
  },
  {
    id: 3,
    title: "Reneta Stocks",
    tech: [
      { name: "HTML", icon: HTML5, }, 
      { name: "CSS", icon: Python, },
      { name: "Javascript", icon: Javascript, },
     
    ],
    cat: "Business site",
    url: "https://hilarious-biscuit-14d562.netlify.app/",
    Gurl: 'https://github.com/Joysd1010/Reneta.com-joysd_Project-Vanilla-CSS-.git',
    img: port2,
  },
  {
    id: 5,
    title: "TaskManager",
    cat: "Task assign",
    tech: [
      { name: "Tailwind", icon: Nextjs, }, 
      { name: "Firebase", icon: Python, },
      { name: "MongoDB", icon: Mongodb, },
      { name: "React", icon: Reactjs, },
      { name: "Express", icon: Express, },
      { name: "Javascript", icon: Javascript, },      
    ],
    url: "https://taskmanager-330f9.web.app/",
    Gurl: "https://github.com/Joysd1010/TaskManager.git",
    img: food,
  },


];

export const softskills = [
  "Time management",
  "Communication",
  "Empathy",
  "Teamwork",
  "Helpfulness",
  "Creativity",
  "Self-learning",
  "Accountability",
  "Problem solving",
  "Open-mindedness",
];
