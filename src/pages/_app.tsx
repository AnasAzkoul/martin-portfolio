import UiProvider from '@/context/UIContext';
import Navbar from '@/components/header/Navbar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// TODO: complete the functionality and UI for the navbar on mobile.

// TODO: experiment with martin's ideas about the hello there text.
