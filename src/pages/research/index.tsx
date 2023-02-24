import React, { useRef, useEffect } from 'react';
import Layout from '@/components/Layout/Layout';
import Publications from '@/components/publications/Publications';
import Articles from '@/components/Articles/Articles';
import { getAllArticles } from '@/lib/helpers/getArticles';
// import styles from '../../styles/Research.module.css';

type Article = {
  content: string 
  excerpt: string 
  slug: string 
  title: string 
}


type Props = {
  allArticles: Article[]
}

const research = ({allArticles}: Props) => {
  
  
  return (
    <>
      <Layout>
        <Publications />
        <Articles allArticles={allArticles} />
      </Layout>
    </>
  );
};

export default research;

export const getServerSideProps = async () => {
  const allArticles = getAllArticles(); 
  
  return {
    props: {
      allArticles, 
    }
  }
}
