import Layout from '@/components/Layout/Layout';
import HeroSection from '@/components/hero/HeroSection';
import Articles from '@/components/Articles';
import Publications from '@/components/publications/Publications';
import ContactMe from '@/components/Contact';
import { getAllArticles } from '@/lib/helpers/getArticles';
import { serialize } from 'next-mdx-remote/serialize';
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
  allArticles: Article[];
};

export default function Home({ allArticles }: Props) {
  return (
    <>
      <Layout>
        <HeroSection />
        <Articles allArticles={allArticles} />
        <Publications />
        <ContactMe />
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allArticles = await getAllArticles(serialize);

  return {
    props: {
      allArticles,
    },
  };
};
