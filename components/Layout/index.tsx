import { ReactNode } from 'react';
import Head from 'next/head';
import Footer from '../Footer';
import Header from '../Header';
import style from './Layout.module.css';

interface LayoutProps {
    children:ReactNode;
    pageTitle:string;
}

export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
    <Head>
    <title>
        NextJS Basic |
        {' '}
        {pageTitle}
    </title>
    <meta name="description" content="Website NextJS Basic" />
    </Head>
        <div className={style.container}>
            <Header />
            <div className={style.content}>{children}</div>
            <Footer />
        </div>
    </>
  );
}
