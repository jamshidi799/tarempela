import style from './parallax.module.scss';
import { Parallax } from 'react-parallax';

export default function landingParallax() {
  return (
    <Parallax blur={{ min: -15, max: 15 }} bgImage={'images/ssg-ssr.png'} bgImageAlt="the dog" strength={-200}>
      <div className={style.parallax} />
    </Parallax>
  );
}
