import React, { useRef, useEffect } from 'react';
import Layout from '@/components/Layout/Layout';
import Publications from '@/components/publications/Publications';
import Articles from '@/components/Articles/Articles';
import { getAllArticles } from '@/lib/helpers/getArticles';
// import styles from '../../styles/Research.module.css';
import {serialize} from 'next-mdx-remote/serialize';
import {MDXRemoteSerializeResult} from 'next-mdx-remote';
import matter from 'gray-matter'; 

import path from 'path'; 
import fs from 'fs'; 

type Article = {
  title: string;
  excerpt: string;
  slug: string;
  mdxSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
};

type Props = {
  allArticles: Article[]; 
};

const research = ({allArticles}: Props) => {
      
  return (
    <>
      <Layout>
        <Articles allArticles={allArticles} />
        <Publications />
      </Layout>
    </>
  );
};

export default research;

export const getStaticProps = async () => {
    
  const allArticles = await getAllArticles(serialize); 
    
  return {
    props: {
      allArticles, 
    }
  }
}
