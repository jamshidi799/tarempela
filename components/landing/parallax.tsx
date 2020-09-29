import style from './parallax.module.scss';
import { Parallax } from 'react-parallax';

export default function landingParallax() {
  return (
    <Parallax blur={{ min: -9, max: 15 }} bgImage={'images/parallax.jpg'} bgImageAlt="tarempela" strength={-400}>
      <div className={style.parallax} />
    </Parallax>
  );
}
