import React from 'react'; 
import SectionTitle from '../SectionTitle';

type Article = {
  content: string;
  excerpt: string;
  slug: string;
  title: string;
};

type Props = {
  allArticles: Article[];
};

const Articles = ({allArticles}: Props) => {
  return (
    <section className='my-20'>
      <div className='mx-auto max-w-[83%]'>
        <SectionTitle>Research</SectionTitle>
        <ul>
          {allArticles.reverse().map(article => {
            return (
              <li key={article.slug} className='my-4'>
                <h3>
                  {article.title}
                </h3>
                <p>{article.excerpt}</p>
              </li>  
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Articles
