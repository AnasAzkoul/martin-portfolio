import React, { useRef, useEffect } from 'react';
import Layout from '@/components/Layout/Layout';
import SectionTitle from '@/components/SectionTitle';
import Paragraph from '@/components/paragraph';
import Canvas from '@/components/Canvas/Canvas';
import { publicationsData } from '@/utils/constants';
import { CgChevronRight } from 'react-icons/cg';
import styles from '../../styles/Research.module.css';

const research = () => {
  return (
    <>
      <Layout>
        <section className='section'>
          <div className={styles.container}>
            <SectionTitle>My Publications</SectionTitle>
            <div className='md:w-4/5'>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                aspernatur accusamus nemo molestias fuga et at quae mollitia
                provident magni.
              </Paragraph>
            </div>
            <ul className={styles.publications}>
              {publicationsData.map((item) => {
                return (
                  <li key={item.id} className={styles.publication}>
                    <CgChevronRight className='text-inherit' size={20} />
                    <a
                      href={item.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='ml-4 text-inherit'
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <section className='section mb-20'>
          <div className={`${styles.container} bg-secondaryLight`}>
            <SectionTitle>My Research</SectionTitle>
            <Canvas />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default research;
