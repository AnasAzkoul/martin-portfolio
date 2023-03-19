import React from "react";
import { socialLinks } from "@/utils/constants";

type Props = {
  extraClasses?: string;
};

const SocialLinksList = ({ extraClasses }: Props) => {
  return (
    <ul className={`flex gap-10 cursor-pointer flex-wrap ${extraClasses}`}>
      {socialLinks.map((link) => {
        return <li key={link.id}>
          <a href={link.link} target='_blank' rel='noreferrer'>
            {link.icon}
          </a>
          </li>;
      })}
    </ul>
  );
};

export default SocialLinksList;
