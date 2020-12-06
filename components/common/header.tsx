import Head from 'next/head';

export const siteTitle = 'طارم پلا';

export default function Header() {
  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RZESH90RV1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-RZESH90RV1');`,
          }}
        />

        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="طارم پلا برنج طارم درجه یک مازندران ارسال به تمام نقاط ایران" />

        <meta property="og:title" content="طارم پلا برنج درجه یک مازندران" />
        <meta property="og:site_name" content="tarempela" />
        <meta property="og:url" content="http://tarempela.ir/" />
        <meta property="og:description" content="طارم پلا برنج طارم درجه یک مازندران ارسال به تمام نقاط ایران" />
        <meta property="og:type" content="business.business" />
        <meta property="og:image" content="https://drive.google.com/uc?export=download&id=1J8Uu703fgfUD_C2vx96kNeatYEBV2yw9" />
        <meta name="google-site-verification" content="ZtmciE-XG3LcOjDs5SjrppiQGqSPFZK446hs2uUJjPE" />

        {/* <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M7LWLS9');`,
          }}
        /> */}
      </Head>
      {/* <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M7LWLS9"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      /> */}
    </>
  );
}
