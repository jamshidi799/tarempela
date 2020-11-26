import Image from 'next/image';
import style from './parallax.module.scss';
// import { Parallax } from 'react-parallax';

export default function landingParallax() {
  return (
    // <Parallax blur={{ min: -9, max: 15 }} bgImage={'images/parallax.webp'} bgImageAlt="tarempela" strength={-400}>
    //   <div className={style.parallax} />
    // </Parallax>
    <Image src="/images/parallax.webp" alt="Picture of the author" layout="responsive" width={700} height={475} />
  );
}
