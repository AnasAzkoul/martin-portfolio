import React from 'react';
import Layout from '@/components/Layout/Layout';
import Paragraph from '@/components/paragraph';
import {publicationsData} from '@/utils/constants';
import {CgChevronRight} from 'react-icons/cg'; 
import styles from '../../styles/Research.module.css'; 

const research = () => {
  return (
    <>
      <Layout>
        <div className={styles.container}>
          <h2 className='text-4xl text-secondary font-semibold'>
            My Publications
          </h2>
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
                <li
                  key={item.id}
                  className={styles.publication}
                >
                  <CgChevronRight className='text-inherit' size={20}/>
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
      </Layout>
    </>
  );
};

export default research;
