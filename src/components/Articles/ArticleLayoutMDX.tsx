import React from "react";

type Props = {
  children: React.ReactNode;
  title: string;
};

const ArticleLayout = ({ children, title }: Props) => {
  return (
    <article className="z-50 py-40">
      <div className="px-6 m-auto prose prose-h1:text-secondary md:prose-lg lg:prose-xl">
        {children}
      </div>
    </article>
  );
};

export default ArticleLayout;
