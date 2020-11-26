import Head from 'next/head';
import Hero from '../components/landing/hero';
import Parallax from '../components/landing/parallax';
import Questions from '../components/landing/questions';
import Steps from '../components/landing/steps';
import Layout from '../components/layout';
import Posts from '../components/post/posts';
import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {
  return (
    <Layout isCantanier={false}>
      <Head>
        <title>طارم پلا برنج اصیل مازندران</title>
      </Head>

      <Hero />
      <section className="container mt-5 mb-5">
        <h2>Blog</h2>
        <Posts posts={allPostsData} />
      </section>
      <Parallax />
      <div className="container">
        <Steps />
        <Questions />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData().slice(0, 3);
  return {
    props: {
      allPostsData,
    },
  };
}
