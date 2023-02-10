import React from 'react';
import Layout from '@/components/Layout/Layout';
import Paragraph from '@/components/paragraph';

type Props = {};

const research = (props: Props) => {
  return (
    <>
      <Layout>
        <h2 className='text-4xl text-secondary'>My Publications</h2>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          aspernatur accusamus nemo molestias fuga et at quae mollitia provident
          magni.
        </Paragraph>
        <a
          href='/publications/An Analysis of Differential Evolution Parameters on Rotated Bi-objective Optimization Functions.pdf'
          target='_blank'
          rel='noopener noreferrer'
        >
          view this
        </a>
      </Layout>
    </>
  );
};

export default research;
