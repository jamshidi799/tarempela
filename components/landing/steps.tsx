import Image from 'next/image';
import style from './step.module.scss';

export default function Steps() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-md-around mb-5">
        <div className="col-sm-12 col-md-5 order-2 order-md-1 h-100">
          <Image src="/images/rice-box2.webp" alt="tarempela طارم پلا" layout="responsive" width={700} height={475} />
        </div>
        <div className="col-sm-12 col-md-7 order-1 order-md-2 d-flex flex-column justify-content-md-center mb-3 mb-lg-0">
          <h1 className="text-right mb-5">عرضه به صورت کیسه‌های ۱۰ و ۲۰ کیلویی</h1>
          <h3>
            برای راحتی مشتریان کیسه‌های برنج در وزن های ۱۰ و ۲۰ کیلو بسته‌بندی می‌شوند. همچنین از نایلون برای جلوگیری از رطوبت استفاده
            می‌شود.
          </h3>
        </div>
      </div>

      <div className="row justify-content-md-around flex-row-reverse mb-5">
        <div className="col-sm-12 col-md-5 order-2 order-md-1 sec-img max-height">
          <Image src="/images/rice4.webp" alt="tarempela طارم پلا" layout="responsive" width={700} height={475} />
        </div>
        <div className="col-sm-12 col-md-7 order-1 order-md-2 d-flex flex-column justify-content-md-center mb-3 mb-lg-0">
          <h1 className="text-right mb-5">برنج‌های طارم سورت (sort) شده بوسیله دستگاه</h1>
          <h3>
            تمامی برنج‌های طارمی که به‌ دست مشتریان می‌رسد توسط دستگاه سورتینگ (sorting) می‌شود. یعنی دانه‌های طارم از یک غربال عبور داده‌
            می‌شوند و دانه‌های کوچکتر و نازکتر از بقیه جدا می‌شوند و باعث می‌شود برنج خروجی کیفیت بالاتری داشته باشد.
          </h3>
        </div>
      </div>

      <div className="row justify-content-md-around mb-5">
        <div className="col-sm-12 col-md-5 order-2 order-md-1 sec-img max-height">
          <Image src="/images/tarom-kind.webp" alt="tarempela طارم پلا" layout="responsive" width={700} height={475} />
        </div>
        <div className="col-sm-12 col-md-7 order-1 order-md-2 d-flex flex-column justify-content-md-center mb-3 mb-lg-0">
          <h1 className="text-right mb-5">تولید شده در زمین‌های سرسبز مازندران</h1>
          <h3>
            تمامی برنج‌های عرضه شده توسط طارم‌پلا از کشاورزان مازندران بخصوص شهر محمودآباد تهیه می‌شود و اضالت و کیفیت آن تضمین شده است.
          </h3>
        </div>
      </div>
    </div>
  );
}
