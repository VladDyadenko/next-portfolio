import Head from "next/head";

const getTitle = (title) => `${title} | Next-pet-project`;

const Meta = ({ title, description, children }) => {
  return (
    <Meta title={title} description={description}>
      <Head>
        <title>{getTitle(title)}</title>
        {description ? (
          <></>
        ) : (
          <meta name="robots" content="noindex, nofollow"></meta>
        )}
      </Head>
      {children}
    </Meta>
  );
};

export default Meta;
