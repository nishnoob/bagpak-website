import Head from "next/head";
import "../global.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
      {/* <!-- Google Tag Manager --> */}
      <script dangerouslySetInnerHTML={{__html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5J5N3R7');
      `}}></script>
      {/* <!-- End Google Tag Manager --> */}
      
      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5J5N3R7"
      height="0" width="0" style={{display:'none', visibility:'hidden'}}></iframe></noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}

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
