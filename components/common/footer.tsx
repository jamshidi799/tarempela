import style from './footer.module.scss';
import Phone from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <h1>طارم پلا</h1>
            <p className={style.desc}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
              مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
              باشد. کتابهای زیادی در شصت و سه درصد گذشته
            </p>
          </div>
          <div className="col-6 col-lg-4">
            <h1>تماس باما</h1>
            <div className="d-flex align-items-center mb-3">
              <Phone />
              <h6 className={style.info}>0911 127 6818</h6>
            </div>
            <div className="d-flex align-items-center mb-3">
              <Phone />
              <h6 className={style.info}>0911 127 6818</h6>
            </div>
            <div className="d-flex align-items-center mb-3">
              <Email />
              <h6 className={style.info}>tarempela@gmail.com</h6>
            </div>
          </div>
          <div className="col-6 col-lg-4">
            <h1>محصولات</h1>
            <div className={style.item}>برنج طارم</div>
            <div className={style.item}>برنج طارم</div>
            <div className={style.item}>برنج طارم</div>
            <div className={style.item}>برنج طارم</div>
          </div>
        </div>
        <div className={style.copyRight}>TaremPela</div>
      </div>
    </div>
  );
}
