import Image from 'next/image';
import style from './step.module.scss';

export default function Steps() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-md-around mb-5">
        <div className="col-sm-12 col-md-5 order-2 order-md-1 h-100">
          <Image src="/images/tarom-kind.webp" alt="tarempela طارم پلا" layout="responsive" width={700} height={475} />
        </div>
        <div className="col-sm-12 col-md-7 order-1 order-md-2 d-flex flex-column justify-content-md-center mb-3 mb-lg-0">
          <h1 className="text-right mb-5">بچه غاز اوکراینی</h1>
          <p>
            قوغازها در سال‌های اخیر علاقه مردم را به خود جذب کرده است. دراین بین بچه غازهای اوکراینی به‌دلیل قیمت بسیار کمتر از غازهای مولد
            بهترین انتخاب برای شروع پرورش قوغاز بشمار می‌روند .
          </p>
        </div>
      </div>

      <div className="row justify-content-md-around flex-row-reverse mb-5">
        <div className="col-sm-12 col-md-5 order-2 order-md-1 sec-img max-height">
          <Image src="/images/tarom-kind.webp" alt="tarempela طارم پلا" layout="responsive" width={700} height={475} />
        </div>
        <div className="col-sm-12 col-md-7 order-1 order-md-2 d-flex flex-column justify-content-md-center mb-3 mb-lg-0">
          <h1 className="text-right mb-5">بچه غاز اوکراینی</h1>
          <p>
            قوغازها در سال‌های اخیر علاقه مردم را به خود جذب کرده است. دراین بین بچه غازهای اوکراینی به‌دلیل قیمت بسیار کمتر از غازهای مولد
            بهترین انتخاب برای شروع پرورش قوغاز بشمار می‌روند .
          </p>
        </div>
      </div>

      <div className="row justify-content-md-around mb-5">
        <div className="col-sm-12 col-md-5 order-2 order-md-1 sec-img max-height">
          <Image src="/images/tarom-kind.webp" alt="tarempela طارم پلا" layout="responsive" width={700} height={475} />
        </div>
        <div className="col-sm-12 col-md-7 order-1 order-md-2 d-flex flex-column justify-content-md-center mb-3 mb-lg-0">
          <h1 className="text-right mb-5">بچه غاز اوکراینی</h1>
          <p>
            قوغازها در سال‌های اخیر علاقه مردم را به خود جذب کرده است. دراین بین بچه غازهای اوکراینی به‌دلیل قیمت بسیار کمتر از غازهای مولد
            بهترین انتخاب برای شروع پرورش قوغاز بشمار می‌روند .
          </p>
        </div>
      </div>
    </div>
  );
}
