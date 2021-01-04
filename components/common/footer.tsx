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
              طارم پلا، یک مجموعه است که برنج طارم معطر و درجه یک مازندران را به نقاط مختلف کشور صادر می‌کند همواره سعی می‌کند که برنج با
              کیفیت را به دست متشریان اش برساند.
            </p>
          </div>
          <div className="col-6 col-lg-4">
            <h1>تماس باما</h1>
            {/* <div className="d-flex align-items-center mb-3">
              <Phone />
              <h6 className={style.info}>0911 127 6818</h6>
            </div> */}
            <div className="d-flex align-items-center mb-3">
              <Phone className={style.icon} />
              <a href="tel:09111276818" className={style.info}>
                0911 127 6818
              </a>
            </div>
            <div className="d-flex align-items-center mb-3">
              <Email className={style.icon} />
              <a href="mailto:tarempela@gmail.com" className={style.info}>
                tarempela@gmail.com
              </a>
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
