import { Parallax } from 'react-parallax';
import style from './hero.module.scss';

export default function Hero() {
  return (
    <Parallax blur={{ min: -15, max: 15 }} bgImage={'images/hero.jpg'} bgImageAlt="the dog" strength={-200}>
      <div className={style.hero}>
        <div className={style.overlay}></div>
      </div>
    </Parallax>
  );
}
