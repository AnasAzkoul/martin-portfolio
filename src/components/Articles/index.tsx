import React from "react";
import PageSection from "../ui/PageSection";
import Paragraph from "../ui/paragraph";
import SectionTitle from "../ui/SectionTitle";
import SingleArticleItem from "./SingleArticleItem";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

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

const Articles = ({ allArticles }: Props) => {
  return (
    <PageSection id="research">
      <div className="space-y-8">
        <div>
          <SectionTitle>Research</SectionTitle>
          <div className="lg:w-2/3">
            <Paragraph>
              My research is about multi-objective optimization using
              evolutionary computation. Now, let us disassemble that into
              smaller pieces. At first, we look at optimization.
            </Paragraph>
          </div>
        </div>
        <ul>
          {allArticles.map((article) => {
            return <SingleArticleItem key={article.slug} article={article} />;
          })}
        </ul>
      </div>
    </PageSection>
  );
};

export default Articles;
