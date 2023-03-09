import React from 'react';
import PageSection from '../PageSection';
import Paragraph from '../paragraph';
import SectionTitle from '../SectionTitle';
import { publicationsData } from '@/utils/constants';
import { CgChevronRight } from 'react-icons/cg';
import styles from './publications.module.css';

type Props = {};

const Publications = (props: Props) => {
  return (
    <PageSection>
      <SectionTitle>My Publications</SectionTitle>
      <div className='md:w-8/12'>
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
    </PageSection>
  );
};

export default Publications;
