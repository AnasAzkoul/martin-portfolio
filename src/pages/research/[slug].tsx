import React, {useContext, useEffect, useRef} from 'react';
import Link from 'next/link'; 
import Layout from '@/components/Layout/Layout';
import ArticleLayout from '@/components/Articles/ArticleLayout';
import Canvas from '@/components/Canvas/Canvas';
import type { GetStaticProps, GetStaticPaths } from 'next';
import fs from 'fs/promises';
import { getArticleData, folderPath, getNextAndPrevArticle } from '../../lib/helpers/getArticles';
import { serialize } from 'next-mdx-remote/serialize';
import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote';
import { useScrollProgressBar } from '@/lib/hooks/useScrollProgressbar';
import styles from '../../styles/Research.module.css'; 
import Image from 'next/image';
import ArticleImage from '@/components/ArticleImage';



type Props = {
  articleData: {
    title: string;
    excerpt: string;
    mdxSource: MDXRemoteSerializeResult<
      Record<string, unknown>,
      Record<string, unknown>
    >;
  };
  
  nextPage: string 
  prevPage: string
};

const components = { Canvas, ArticleImage, Image };



const ArticlePage = ({articleData, nextPage, prevPage}: Props) => {
  const progressRef = useScrollProgressBar(); 

  return (
    <Layout>
      <div id='progress' className={styles.progress} ref={progressRef}></div>
      <ArticleLayout title={articleData.title}>
        <MDXRemote {...articleData.mdxSource} components={components} />
        <div className={`flex justify-between`}>
          {prevPage && (
            <Link
              href={`/research/${prevPage}`}
            >
              Previous Article
            </Link>
          )}
          {nextPage && (
            <Link
              href={`/research/${nextPage}`}
            >
              Next Article
            </Link>
          )}
        </div>
      </ArticleLayout>
    </Layout>
  );
};

export default ArticlePage;

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context?.params!;

  const articleData = await getArticleData(slug as string, serialize);
    
  const {nextPage, prevPage} = await getNextAndPrevArticle(slug as string); 
  
  // console.log(nextPage, 'next'); 
  
  // console.log(prevPage, 'prev'); 

  return {
    props: {
      articleData,
      nextPage: !nextPage ? null : nextPage, 
      prevPage: !prevPage ? null : prevPage
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const getAllArticles = await fs.readdir(folderPath);

  const slugsArr = getAllArticles.map((article) => {
    return {
      params: { slug: article.replace(/\.mdx$/, '') },
    };
  });

  return {
    paths: slugsArr,
    fallback: false,
  };
};
