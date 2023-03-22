import React from "react";
import PageSection from "../ui/PageSection";
import Paragraph from "../ui/paragraph";
import SectionTitle from "../ui/SectionTitle";
import { publicationsData } from "@/utils/constants";
import { CgChevronRight } from "react-icons/cg";
import styles from "./publications.module.css";

type Props = {};

const Publications = (props: Props) => {
  return (
    <PageSection id="publications">
      <SectionTitle>My Publications</SectionTitle>
      <div className="md:w-8/12">
        <Paragraph className='pb-4'>
          Here is a list of my most recent publications, presented at different conferences such as
          Intelligent optimization conference, Simulated Evolution and leaning conference 2014, and GECCO 2013 conference.
        </Paragraph>
      </div>
      <ul className={styles.publications}>
        {publicationsData.map((item) => {
          return (
            <li key={item.id} className={styles.publication}>
              <CgChevronRight className="text-inherit" size={20} />
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 text-inherit"
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </PageSection>
  );
};

export default Publications;
