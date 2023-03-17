import React from "react";
import Layout from "@/components/Layout/Layout";
import ArticleLayout from "@/components/Articles/ArticleLayoutMDX";
import Image from "next/image";
import Canvas from "@/components/Canvas/Canvas";
import ArticleImage from "@/components/Articles/ArticleImage";
import ArticleLinkButton from "@/components/ui/ArticleLinkButton";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { useScrollProgressBar } from "@/lib/hooks/useScrollProgressbar";
import styles from "../../styles/Research.module.css";

import type { GetStaticProps, GetStaticPaths } from "next";
import {
  getArticleData,
  getNextAndPrevArticle,
  articlesFiles,
} from "../../lib/helpers/getArticles";
import {MergeComponents} from '@mdx-js/react/lib';

type Props = {
  articleData: {
    title: string;
    excerpt: string;
    mdxSource: MDXRemoteSerializeResult<
      Record<string, unknown>,
      Record<string, unknown>
    >;
  };

  nextPage: string;
  prevPage: string;
};

type Components = {
  Canvas: typeof Canvas
  ArticleImage: typeof ArticleImage
  Image: typeof Image
}

const components= { Canvas, Image }

const ArticlePage = ({ articleData, nextPage, prevPage }: Props) => {
  const progressRef = useScrollProgressBar();

  return (
    <Layout>
      <div id="progress" className={styles.progress} ref={progressRef}></div>
      <ArticleLayout title={articleData.title}>
        <MDXRemote
          {...articleData.mdxSource}
          components={components}
          lazy
        />
        <div className={`flex justify-between relative pt-4 px-4`}>
          {prevPage && (
            <ArticleLinkButton href={`/research/${prevPage}`} direction="left">
              Prev
            </ArticleLinkButton>
          )}
          {nextPage && (
            <ArticleLinkButton href={`/research/${nextPage}`} direction="right">
              Next
            </ArticleLinkButton>
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

  const { nextPage, prevPage } = await getNextAndPrevArticle(slug as string);

  return {
    props: {
      articleData,
      nextPage: !nextPage ? null : nextPage,
      prevPage: !prevPage ? null : prevPage,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const getAllArticles = await articlesFiles();

  const slugs = getAllArticles.map((article) => {
    return {
      params: { slug: article.replace(/\.mdx$/, "") },
    };
  });

  return {
    paths: slugs,
    fallback: false,
  };
};
