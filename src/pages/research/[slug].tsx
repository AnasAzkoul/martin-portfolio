import React, {useContext} from 'react';
import Layout from '@/components/Layout/Layout';
import ArticleLayout from '@/components/Articles/ArticleLayout';
import Canvas from '@/components/Canvas/Canvas';
import type { GetStaticProps, GetStaticPaths } from 'next';
import fs from 'fs';
import { getArticleData, folderPath } from '../../lib/helpers/getArticles';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

type Props = {
  articleData: {
    title: string;
    excerpt: string;
    mdxSource: MDXRemoteSerializeResult<
      Record<string, unknown>,
      Record<string, unknown>
    >;
  };
};

const components = { Canvas };

const ArticlePage = ({ articleData }: Props) => {


  return (
    <Layout>
      <ArticleLayout title={articleData.title}>
        <MDXRemote {...articleData.mdxSource} components={components} />
      </ArticleLayout>
    </Layout>
  );
};

export default ArticlePage;

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context?.params!;

  const articleData = await getArticleData(slug as string, serialize);

  return {
    props: {
      articleData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const getAllArticles = fs.readdirSync(folderPath);

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