import Layout from '@/components/Layout/Layout';
import UiProvider from '@/context/UIContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (

  <UiProvider>
      <Component {...pageProps} />
  </UiProvider>
  );
}


