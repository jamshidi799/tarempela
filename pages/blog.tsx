import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import PostCard from '../components/post/card';
import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {
  return (
    <Layout isCantanier={false}>
      <Head></Head>

      <section className="container mt-5 mb-5">
        <h2>Blog</h2>
        <div className="row">
          {allPostsData.map(({ id, date, title }) => (
            <div className="col-4" key={id}>
              <Link href={`/blog/${id}`} passHref>
                <a>
                  <PostCard title={title} date={date} id={id} />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
