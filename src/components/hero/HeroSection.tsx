import React from 'react';
import PageSection from '../ui/PageSection';
import Paragraph from '../ui/paragraph';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';
import SocialLinksList from '../ui/SocialLinks';
import styles from './HeroSection.module.css';

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <PageSection id='home'>
      <div className='pt-10 md:pt-16 xl:pt-48 xl:pb-44'>
        {/* <h2 className='text-2xl sm:text-3xl lg:text-lg font-extrabold tracking-widest leading-loose text-secondary'>
          Hello there,
        </h2> */}
        <SectionTitle>Hello there,</SectionTitle>
        <h1 className='text-4xl lg:text-5xl lg:leading-snug font-extrabold tracking-widest leading-tight text-secondaryLight'>
          {"I'm Martin Drozdik."}
        </h1>
        <div className='lg:w-2/3'>
          {/* <Paragraph>
            A freelance software developer and a researcher in the
            field of computational intelligence. Currently I am living in
            Vienna, Austria.
          </Paragraph> */}
          <p className='text-secondaryLight text-lg font-semibold font-montserrat'>
            A freelance software developer and researcher based in Vienna.
          </p>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            numquam quibusdam corrupti non quidem sit earum saepe nihil ratione
            facilis!
          </Paragraph>
        </div>
        <Button>My Resume</Button>
        <div className={styles.social_links_container}>
          <SocialLinksList />
        </div>
      </div>
    </PageSection>
  );
};

export default HeroSection;
