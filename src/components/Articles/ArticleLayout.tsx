import React from 'react'; 

type Props = {
  children: React.ReactNode
  title: string
}

const ArticleLayout = ({children, title}: Props) => {
  return (
    <article className='bg-secondaryLight py-40 z-50'>
      <div className='md:w-2/3 mx-auto py-20 px-10 text-primary text-base'>
        <h1 className='text-2xl my-6 font-semibold capitalize underline'>
          {title}
        </h1>
        {children}
      </div>
    </article>
  );
}

export default ArticleLayout
