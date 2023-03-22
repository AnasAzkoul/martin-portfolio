import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
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
