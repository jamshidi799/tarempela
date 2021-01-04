import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';

export default function aboutUs() {
  return (
    <Layout isCantanier={false}>
      <Head>
        <title>طارم پلا برنج اصیل مازندران</title>
      </Head>

      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-lg-6" style={{ minHeight: '600px' }}>
            <h1>برنج طارم پلا</h1>
            <h5></h5>
          </div>
          <div className="col-12 col-lg-6">
            <Image src={`/images/namad.jpg`} alt="طارم پلا" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
