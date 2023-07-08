import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  school,
  college,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  android,
  kotlin,
  java,
  quote,
  bsc,
  quiz
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },{
    id: "project",
    title: "Projects",
  },{
    id: "skills",
    title:"Skills"
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Mobile  Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Problem Solving",
    icon: backend,
  },
  {
    title: "Firebase",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Android",
    icon: android,
  }, {
    name: "Java",
    icon: java
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  
];

const experiences = [
  {
    title: "Secondary Education",
    company_name: "Modern School, vaishali",
    icon: school,
    iconBg: "#383E56",
    date: "june 2015 - April 2017",
    points: [
      "Overcame a fear of public speaking through active participation in class presentations and debate competitions",
      "Received various award in sports, Gold in discuss throw"
    ],
  },
  {
    title: "Senior Secondary",
    company_name: "Modern School, vaishali",
    icon: school,
    iconBg: "#383E56",
    date: "june 2017 - May 2019",
    points: [
      "Completed a diverse range of subjects including mathematics, science (chemistry, and physics), physical studies and computer science",
      "Participated in the school's soccer team, serving as the team captain",
    ],
  },
  {
    title: "College",
    company_name: "Arya College of Engineering & IT",
    icon: college,
    iconBg: "#E6DEDD",
    date: "Aug 2019 - june 2023",
    points: [
      "As a computer science student, i have learned a wide range of topics and concepts like Data Structures, Algorithms,OOP, Operating Systems, Computer Networks",
      "Along with these core subjects i have done web and mobile development using Java, kotlin, javascript, react, html, css",
      "I have also received two incampus placment offers"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Blood Sweat Cheers",
    description:
      "Android-based mobile app that acts as a virtual guide for the users to do workout in gym",
    tags: [
      {
        name: "Koltin",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Node js",
        color: "pink-text-gradient",
      },
    ],
    image: bsc,
    source_code_link: "https://github.com/i-amansharma07/Blood-Sweat-Cheers",
  },
  {
    name: "Quote Api",
    description:
      "It's an api that gives some 10 random quotes out of hundreds of quotes to the application which requests for it",
    tags: [
      {
        name: "Node js",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    image: quote,
    source_code_link: "https://github.com/i-amansharma07/QuotesApi-Nodejs-",
  },
  {
    name: "Quiz",
    description:
      " It's a collection of number of different types of quizzes like technical, games, sports, etc. User selects one option ",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "XML",
        color: "pink-text-gradient",
      },
    ],
    image: quiz,
    source_code_link: "https://github.com/i-amansharma07/quiz",
  },
];

export { services, technologies, experiences, testimonials, projects };
