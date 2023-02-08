import Navbar from '@/components/header/Navbar';
import Paragraph from '@/components/paragraph';
import Link from 'next/link';
import Head from 'next/head';
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import SocialLinksList from '@/components/SocialLinks';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main>
        <Navbar />
        <section className={styles.section__home}>
          <div className={styles.container}>
            <h1 className='text-main_heading font-extrabold tracking-widest text-secondaryLight'>
              I'm Martin Dorzdik
            </h1>
            <div className='w-4/5'>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                numquam quibusdam corrupti non quidem sit earum saepe nihil
                ratione facilis!
              </Paragraph>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                numquam quibusdam corrupti non quidem sit earum saepe nihil
                ratione facilis!
              </Paragraph>
            </div>
            <button>
              <Link href='/about' className='flex items-center text-2xl text-gray-500'>
                Learn More About Me
                <AiOutlineArrowRight className={styles.arrow}/>
              </Link>
            </button>
            <div className={styles.social_links_container}>
              <SocialLinksList />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
