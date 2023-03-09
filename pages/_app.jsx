import Head from "next/head";
import "../global.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"></link>
      <Head>

        {/* <!-- Primary Meta Tags --> */}
        <title>Bagpaks | we make things MOVE</title>
        <meta name="title" content="Bagpaks | we make things MOVE" />
        <meta name="description" content="Industry Leading Polypropylene (PP) FIBC Manufacturers" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.bagpaks.com/"/>
        <meta property="og:title" content="Bagpaks | we make things MOVE"/>
        <meta property="og:description" content="Industry Leading Polypropylene (PP) FIBC Manufacturers"/>
        <meta property="og:image" content="https://picorie-assets.s3.ap-south-1.amazonaws.com/bagpaks-logo.png"/>

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://www.bagpaks.com/"/>
        <meta property="twitter:title" content="Bagpaks | we make things MOVE" />
        <meta property="twitter:description" content="Industry Leading Polypropylene (PP) FIBC Manufacturers" />
        <meta property="twitter:image" content="https://picorie-assets.s3.ap-south-1.amazonaws.com/bagpaks-logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
