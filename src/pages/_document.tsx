import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Martin Drozdik a freelance software developer and researcher based in Vienna."
        />
        <meta property="og:site_name" content="martindrozdik.com" />
        <meta
          property="og:description"
          content="Martin Drozdik a freelance software developer and researcher based in Vienna."
        />
        <meta property="og:title" content="Martin Drozdik" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Martin Drozdik" />
        <meta
          name="twitter:description"
          content="Martin Drozdik a freelance software developer and researcher based in Vienna."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
