import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import BigPostCard from '../components/post/big-card';
import HorizentalPostCard from '../components/post/horizental-card';

export default function Home({ allPostsData }) {
  return (
    <Layout isCantanier={false}>
      <Head>
        <title>طارم پلا برنج اصیل مازندران</title>
      </Head>

      <section className="container">
        <div className="row">
          {allPostsData.slice(0, 2).map(({ id, date, title }) => (
            <div className="col-12 col-md-6 mb-5" key={id}>
              <Link href={`/blog/${id}`} passHref>
                <a>
                  <BigPostCard title={title} date={date} id={id} />
                </a>
              </Link>
            </div>
          ))}
        </div>
        <div className="row">
          {allPostsData.slice(2).map(({ id, date, title }) => (
            <div className="col-12 col-md-6" key={id}>
              <Link href={`/blog/${id}`} passHref>
                <a>
                  <HorizentalPostCard title={title} date={date} id={id} />
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
