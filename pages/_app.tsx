import type { AppProps } from 'next/app';
import '@/styles/App.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const exceptUI = ['/signin', '/signup'];
  const showUI = !exceptUI.includes(router.pathname);
  return (
    <>
      {showUI && <Header />}
      <Component {...pageProps} />
      {showUI && <Footer />}
    </>
  );
}
