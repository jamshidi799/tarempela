import Head from 'next/head';

export const siteTitle = 'طارم پلا';

export default function Header() {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:title" content="طارم پلا برنج درجه یک مازندران" />
      <meta property="og:site_name" content="tarempela" />
      <meta property="og:url" content="http://tarempela.ir/" />
      <meta property="og:description" content="طارم پلا برنج طارم درجه یک مازندران ارسال به تمام نقاط ایران" />
      <meta property="og:type" content="business.business" />
      <meta property="og:image" content="https://drive.google.com/file/d/1J8Uu703fgfUD_C2vx96kNeatYEBV2yw9/view?usp=sharing" />
      <meta name="google-site-verification" content="ZtmciE-XG3LcOjDs5SjrppiQGqSPFZK446hs2uUJjPE" />
    </Head>
  );
}
