import React from 'react'; 

type Props = {
  children: React.ReactNode
  title: string
}

const ArticleLayout = ({children, title}: Props) => {
  return (
    <article className='py-40 z-50'>
      <div className='prose md:prose-lg lg:prose-xl m-auto px-6'> 
        {children}
      </div>
    </article>
  );
}

export default ArticleLayout
