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
  { id: 1, text: "home", url: "/" },
  { id: 2, text: "research", url: "/#research" },
  { id: 3, text: "publications", url: "/#publications" },
  { id: 4, text: "contact", url: "/#contact" },
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
