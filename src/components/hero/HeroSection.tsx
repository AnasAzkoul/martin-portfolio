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
    <PageSection variant='xl'>
      <div className={styles.container}>
        <h2 className='text-main_hello font-extrabold tracking-widest text-secondary'>
          Hello there,
        </h2>
        <h1 className='text-main_heading font-extrabold tracking-widest text-secondaryLight'>
          I'm Martin Drozdik.
        </h1>
        <div className='md:w-7/12'>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            numquam quibusdam corrupti non quidem sit earum saepe nihil ratione
            facilis!
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
