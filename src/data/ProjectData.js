// --------------------------------------- Project List
import ignite from '../components/Projects/ProjectCard/Ignite.png'
import portfolio from '../components/Projects/ProjectCard/Screenshot 2021-12-24 203413.png'
import certificate1 from '../components/Projects/ProjectCard/Certificate1 .png'
import hashfinder from '../components/Projects/ProjectCard/Hash-finder.png'
import node from '../components/Projects/ProjectCard/nodejs-icon.svg'
import express from '../components/Projects/ProjectCard/expressjs.svg'
export const ProjectList = [
  {
    img: ignite,
    title: "Ignite",
    description: "Ignite is group project made by me along with 2 of my peers. It is an online game hosting and participation website",
    tech_stack: "HTML, CSS, Javascript , Bootstrap , Node.js , Express.js , MySQL",
    github_url: "https://github.com/Shubhrant05/Ignite",
  },
  {
    img: portfolio,
    title: "Portfolio",
    description: "I made my own personal portfolio website to showcase my skills and abilities",
    tech_stack: "Reactjs, CSS",
    github_url: "https://github.com/Shubhrant05/Portfolio"
  },
    {
    img: hashfinder,
    title: "Hash-Finder",
    description: "I made Hash-finder a project that helps you analyze trends in different hashtags on twitter and you can also see few tweets related to hash tag",
    tech_stack: "Reactjs, CSS , Bootstrap , Nivo charts",
    github_url: "https://github.com/Shubhrant05/Hash-finder"
  },
  {
    img: certificate1,
    title: "Coding Ninja Certificate of Completion",
    description:
      "I was rewarded with this certificate as an achievement while I was doing a course on Data Structures and Algorithms.",
    tech_stack: "No Tech involved",
    github_url: "https://github.com/Shubhrant05/Assests/blob/main/Certificate1%20.png"
  },
];

// --------------------------------------- Skills

export const stackList = [
  {
    img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/html5.svg",
    name: "HTML",
  },
  {
    img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/css3.svg",
    name: "CSS",
  },
  {
    img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/javascript.svg",
    name: "JavaScript",
  },
  {
    img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/react.svg",
    name: "ReactJS",
  },
  {
    img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/bootstrap.svg",
    name: "Bootstrap",
  },
  {
    img: node,
    name: "Node.js",
  },
  {
    img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/git.svg",
    name: "Git",
  },
  {
    img: express,
    name: "Express.js",
  },
];
