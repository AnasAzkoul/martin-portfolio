import React, { useContext } from 'react';
import Link from 'next/link';
import Paragraph from '../ui/paragraph';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

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
    <li key={article.slug} className='my-4'>
      <h3 className='text-secondaryLight text-base capitalize font-semibold'>
        {article.title}
      </h3>
      <div className='md:w-8/12'>
        <Paragraph pProps={{ className: 'my-2' }}>
          {article.excerpt}
          <br />
          <Link
            href={`/research/[slug]`}
            as={`/research/${article.slug}`}
            className='text-blue-500 text-sm'
          >
            read more...
          </Link>
        </Paragraph>
      </div>
    </li>
  );
};

export default SingleArticleItem;
