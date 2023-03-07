import React, { useContext, useEffect } from 'react';
import Portal from '.';
import { uiContext } from '@/context/UIContext';

type Props = {
  children: React.ReactNode;
  title: string;
};

const ArticlePortal = ({ children, title }: Props) => {
  const { closePortal, isPortalOpen } = useContext(uiContext);

  useEffect(() => {
    const onCloseEscapeKey = (e: KeyboardEvent) =>
      e.key === 'Escape' ? closePortal() : null;

    document.addEventListener('keydown', onCloseEscapeKey);

    return document.removeEventListener('keydown', onCloseEscapeKey);
  }, [closePortal]);

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
