import Head from "next/head";
import "../global.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />

        {/* <!-- Primary Meta Tags --> */}
        <title>Bagpaks | we make things MOVE</title>
        <meta name="title" content="Bagpaks | we make things MOVE" />
        <meta name="description" content="Industry Leading Polypropylene (PP) FIBC Manufacturers" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.bagpaks.com/"/>
        <meta property="og:title" content="Bagpaks | we make things MOVE"/>
        <meta property="og:description" content="Industry Leading Polypropylene (PP) FIBC Manufacturers"/>
        <meta property="og:image" content="https://www.bagpaks.com/bagpaks-logo.png"/>

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://www.bagpaks.com/"/>
        <meta property="twitter:title" content="Bagpaks | we make things MOVE" />
        <meta property="twitter:description" content="Industry Leading Polypropylene (PP) FIBC Manufacturers" />
        <meta property="twitter:image" content="https://www.bagpaks.com/bagpaks-logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
