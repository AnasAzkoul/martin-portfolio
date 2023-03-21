/* eslint-disable react/no-unescaped-entities */
import React from "react";
import PageSection from "../ui/PageSection";
import Paragraph from "../ui/paragraph";
import Button from "../ui/Button";
import SocialLinksList from "../ui/SocialLinks";
import styles from "./HeroSection.module.css";

type Props = {};



const HeroSection = (props: Props) => {
  return (
    <PageSection id="home">
      <div className="pt-10 md:pt-16 xl:pt-48 xl:pb-44">
        <h2 className="text-2xl font-bold text-secondary">Hello there,</h2>
        <h1 className="text-4xl font-extrabold leading-tight tracking-widest lg:text-5xl lg:leading-snug text-secondaryLight">
          {"I'm Martin Drozdik."}
        </h1>
        <div className="lg:w-2/3">
          <p className="text-lg font-semibold text-secondaryLight font-montserrat">
            A freelance software developer and researcher based in Vienna.
          </p>
          <Paragraph className="my-5">
            Applied mathematics graduate from Comenius University, Slovakia.
            Doctorate in engineering (computer science) from Shinshu University,
            Japan.
          </Paragraph>
        </div>
        <Button variant="outlined" className="mt-6">
          <a
            href="/resume/Martin-Drozdik-CV-professional.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </a>
        </Button>
        <div className={styles.social_links_container}>
          <SocialLinksList />
        </div>
      </div>
    </PageSection>
  );
};

export default HeroSection;
