import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import { getSortedPostsData } from '../../lib/posts';
import Posts from '../../components/post/posts';
import style from './id.module.scss';
import Image from '../../components/image';

export default function Post({ postData, allPostsData }) {
  return (
    <Layout isCantanier={false}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={style.blog}>
        <div className="container">
          <div className={style.title}>
            <h1>{postData.title}</h1>
            <div className={style.date}>
              <Date dateString={postData.date} />
            </div>
          </div>
        </div>
        {/* <Image src={`${postData.id}.png`} /> */}
        <img src={`/images/${postData.id}.png`} alt="" />
        <div className="container">
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} className={style.content} />
          <div>
            <Posts posts={allPostsData} />
          </div>
        </div>
      </article>
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
  const allPostsData = getSortedPostsData().slice(0, 3);
  return {
    props: {
      postData,
      allPostsData,
    },
  };
}
