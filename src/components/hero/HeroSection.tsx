import React from 'react';
import Link from 'next/link';
import PageSection from '../PageSection';
import Paragraph from '../paragraph';
import SocialLinksList from '../SocialLinks';
import { AiOutlineArrowRight } from 'react-icons/ai';
import styles from './HeroSection.module.css';

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <PageSection id='home'>
      <div className='pt-10 md:pt-16 xl:pt-40'>
        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-widest leading-loose text-secondary'>
          Hello there,
        </h2>
        <h1 className='text-4xl lg:text-5xl lg:leading-snug font-extrabold tracking-widest leading-tight text-secondaryLight'>
          {"I'm Martin Drozdik."}
        </h1>
        <div className='lg:w-2/3'>
          <Paragraph>
            Hello, I am a freelance software developer and a researcher in the
            field of computational intelligence. Currently I am living in
            Vienna, Austria.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            numquam quibusdam corrupti non quidem sit earum saepe nihil ratione
            facilis!
          </Paragraph>
        </div>
        <button className='z-0'>
          <Link
            href='/about'
            className='flex items-center text-base text-gray-500'
          >
            Learn More About Me
            <AiOutlineArrowRight className={styles.arrow} />
          </Link>
        </button>
        <div className={styles.social_links_container}>
          <SocialLinksList />
        </div>
      </div>
    </PageSection>
  );
};

export default HeroSection;
