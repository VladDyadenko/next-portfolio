/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Foter/Footer";

const MainLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="next, javascript,nextjs" />
        <meta name="description" content="nextjs cours tsx" />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
