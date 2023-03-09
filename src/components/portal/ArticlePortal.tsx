import React from 'react';
import Portal from '.';


type Props = {
  children: React.ReactNode;
  title: string;
};

const ArticlePortal = ({ children, title }: Props) => {


  return (
    <Portal wrapperID='react-portal-modal-article'>
      <article className='fixed bg-secondaryLight w-3/5 left-1/2 -translate-x-1/2 mt-40 p-4 z-50'>
        <div className='mx-auto py-20 text-primary text-base font-montserrat'>
          <h1 className='text-2xl my-6 font-semibold capitalize underline'>
            {title}
          </h1>
          {children}
        </div>
      </article>
    </Portal>
  );
};

export default ArticlePortal;
