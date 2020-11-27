import Head from 'next/head';
import Hero from '../components/landing/hero';
import Parallax from '../components/landing/parallax';
import Questions from '../components/landing/questions';
import Steps from '../components/landing/steps';
import Layout from '../components/layout';
import Posts from '../components/post/posts';
import { getSortedPostsData } from '../lib/posts';
import styles from './index.module.scss';

export default function Home({ allPostsData }) {
  return (
    <Layout isCantanier={false}>
      <Head>
        <title>طارم پلا برنج اصیل مازندران</title>
      </Head>

      <Hero />
      <section className="container mt-5 mb-5">
        <h1 className={styles.blog_heading}>اطلاعات بیشتر درمورد انواع برنج و طرز پخت</h1>
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
  const allPostsData = getSortedPostsData().slice(0, 4);
  return {
    props: {
      allPostsData,
    },
  };
}
