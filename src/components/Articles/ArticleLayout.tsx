import React from 'react'; 



type Props = {
  children: React.ReactNode
}

const ArticleLayout = ({children}: Props) => {
  return (
    <article className='bg-secondaryLight'>
      <div className='xl:w-1/2 mx-auto py-20 text-primary text-base'>
        {/* <h1 className='text-2xl my-6 font-semibold capitalize underline'>{meta.title}</h1> */}
        {children}
      </div>
    </article>
  )
}

export default ArticleLayout
