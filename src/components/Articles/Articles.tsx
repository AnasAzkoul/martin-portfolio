import React from 'react'; 
import PageSection from '../PageSection';
import SectionTitle from '../SectionTitle';
import Link from 'next/link';
import Paragraph from '../paragraph';
import type {MDXRemoteSerializeResult} from 'next-mdx-remote';

type Article = {
  title: string 
  excerpt: string 
  slug: string 
  mdxSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
}

type Props = {
  allArticles: Article[];
};

const Articles = ({allArticles}: Props) => {
  return (
    <PageSection variant='xl'>
      <SectionTitle>Research</SectionTitle>
      <ul>
        {allArticles.map(article => {
          return (
            <li key={article.slug} className='my-4'>
              <h3 className='text-[#0098A3] capitalize font-semibold'>
                {article.title}
              </h3>
              <div className='md:w-8/12'>
                <Paragraph pProps={{className: 'my-2'}}>
                  {article.excerpt}
                  <br />
                  <Link
                    href={`/research/${article.slug}`}
                    className='text-blue-500 text-sm'
                  >
                    read more...
                  </Link>
                </Paragraph>
              </div>
            </li>
          );
        })}
      </ul>
    </PageSection>
  )
}

export default Articles
