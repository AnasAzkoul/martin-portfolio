import React from 'react'; 
import PageSection from '../PageSection';
import SectionTitle from '../SectionTitle';
import SingleArticleItem from './SingleArticleItem';
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

      <PageSection id='research'>
        <SectionTitle>Research</SectionTitle>
        <ul>
          {allArticles.map(article => {
            return (
              <SingleArticleItem key={article.slug} article={article}/>
            );
          })}
        </ul>
      </PageSection>

  )
}

export default Articles
