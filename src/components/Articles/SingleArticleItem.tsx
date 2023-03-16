import React, { useContext } from "react";
import Link from "next/link";
import Paragraph from "../ui/paragraph";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { AiOutlineLink } from "react-icons/ai";

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
  article: Article;
};

const SingleArticleItem = ({ article }: Props) => {
  return (
    <li key={article.slug} className="mb-10 space-y-3">
      <h3 className="text-base font-bold capitalize text-secondaryLight">
        {article.title}
      </h3>
      <div className="space-y-2 md:w-8/12">
        <Paragraph>
          {article.excerpt}
          <br />
        </Paragraph>
        <Link
          href={`/research/[slug]`}
          as={`/research/${article.slug}`}
          className="text-sm text-indigo-700"
        >
          <AiOutlineLink className="inline mr-1" />
          read more...
        </Link>
      </div>
    </li>
  );
};

export default SingleArticleItem;
