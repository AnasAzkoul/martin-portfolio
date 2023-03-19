import { BsStackOverflow } from "react-icons/bs";
import { IoLogoBitbucket } from "react-icons/io";
import { SiResearchgate } from "react-icons/si";
import { AiOutlineMail, AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";

export type Link = {
  id: number;
  text: string;
  url: string;
};

export const navLinks: Link[] = [
  { id: 1, text: "home", url: "/#home" },
  { id: 2, text: "research", url: "/#research" },
  { id: 3, text: "experience", url: "/#experience" },
  { id: 4, text: "publications", url: "/#publications" },
  { id: 5, text: "contact", url: "/#contact" },
];

type SocialLinkTypes = {
  id: number;
  icon: JSX.Element;
  name: string;
};

export const socialLinks: SocialLinkTypes[] = [
  {
    id: 1,
    icon: <BsStackOverflow className="social-link" />,
    name: "Stack Overflow",
  },
  {
    id: 2,
    icon: <IoLogoBitbucket className="social-link" />,
    name: "Bit Bucket",
  },
  {
    id: 3,
    icon: <SiResearchgate className="social-link" />,
    name: "Research Gate",
  },
  {
    id: 4,
    icon: <AiFillGithub className="social-link" />,
    name: "Github",
  },
  {
    id: 5,
    icon: <AiOutlineLinkedin className="social-link" />,
    name: "Linkedin",
  },
];

export const publicationsData = [
  {
    id: 1,
    title:
      "An Analysis of Differential Evolution Parameters on Rotated Bi-objective Optimization Functions",
    href: "/publications/An Analysis of Differential Evolution Parameters on Rotated Bi-objective Optimization Functions.pdf",
  },
  {
    id: 2,
    title:
      "Computational Cost Reduction of Non-dominated Sorting Using the M-front",
    href: "/publications/Computational Cost Reduction of Non-dominated Sorting Using the M-front.pdf",
  },
  {
    id: 3,
    title:
      "Attempt to Reduce the Computational Complexity in Multi-objective Differential Evolution Algorithms",
    href: "/publications/Attempt to Reduce the Computational Complexity in Multi-objective Differential Evolution Algorithms.pdf",
  },
  {
    id: 4,
    title:
      "Comparison of Parameter Control Mechanisms in Multi-objective Differential Evolution",
    href: "/publications/Comparison of Parameter Control Mechanisms in Multi-objective Differential Evolution.pdf",
  },
];


export const workExperienceData = [
  {
    id: 1,
    companyName: "AskBe4",
    title: "Software developer",
    location: "Vienna, Austria",
    description: "Backend development",
    date: "2016-2017",
  },
  {
    id: 2,
    companyName: "freelancer.com",
    title: "freelance programmer",
    location: "Vienna, Austria",
    description:
      "Development of a floating license system (C++14/Qt 5/SSL) Single-handedly implemented a client-server system according to client’s specification.",
    date: "2016",
  },
  {
    id: 3,
    companyName: "OM Partners",
    title: "Software developer",
    location: "Antwerp, Belgium",
    description:
      "Developing and maintaining an advanced enterprise planning application. Key technologies: C++, Qt, SQL, Windows.",
    date: "2015-2016",
  },
  {
    id: 4,
    companyName: "Tanaka-Hernan-Akimoto laboratory",
    title: "Doctoral Student",
    location: "Nagano, Japan",
    description: "Multi-objective optimization using evolutionary computation.",
    date: "2011-2015",
  },
  {
    id: 5,
    companyName: "Dolphin team",
    title: "Researcher",
    location: "Inaria, Lille, France",
    description:
      "Exploration of differential evolution parameters Key technologies: (C++/Qt).",
    date: "2013-2014",
  },
  {
    id: 6,
    companyName: "Accenture Technology Solutions",
    title: "Programmer",
    location: "Vienna, Austria",
    description:
      "Administered IBM mainframe jobs (JCL, ISPF, DB2, PL/I) and wrote technical documentation.",
    date: "2010-2011",
  },
];
