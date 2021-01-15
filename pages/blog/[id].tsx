import Image from 'next/image';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import { getSortedPostsData } from '../../lib/posts';
import Posts from '../../components/post/posts';
import style from './id.module.scss';

export default function Post({ postData, allPostsData }) {
  return (
    <Layout isCantanier={false}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="d-flex">
        <article className={style.blog}>
          <div className={style.title}>
            <h1>{postData.title}</h1>
          </div>
          <Image src={`/images/${postData.id}.webp`} alt="طارم پلا" layout="responsive" width={700} height={475} />
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} className={style.content} />

          <div className="my-5">
            <hr />
          </div>
          <div className="mt-5">
            <Posts posts={allPostsData} />
          </div>
        </article>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const allPostsData = getSortedPostsData().slice(0, 4);
  return {
    props: {
      postData,
      allPostsData,
    },
  };
}
