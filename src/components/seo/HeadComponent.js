import Head from "next/head";

const HeadComponent = ({ title, keywords, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadComponent;
