import Paper from '@material-ui/core/Paper';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import style from './hero.module.scss';

export default function Hero() {
  const heroRef = useRef();
  const popupRef = useRef();
  const [index, setIndex] = useState(0);
  useEffect(() => {}, []);

  const onMove = e => {
    setIndex(index + 1);
    if (index % 5 !== 0) return;
    var moveForce = 10; // max popup movement in pixels
    var rotateForce = 10; // max popup rotation in deg
    const area: { offsetWidth?: number; offsetHeight?: number } = heroRef.current;
    var docX = area.offsetWidth;
    var docY = area.offsetHeight;
    console.log(docX);
    var moveX = ((e.pageX - docX / 2) / (docX / 2)) * -moveForce;
    var moveY = ((e.pageY - docY / 2) / (docY / 2)) * -moveForce;
    var rotateY = (e.pageX / docX) * rotateForce * 2 - rotateForce;
    var rotateX = -((e.pageY / docY) * rotateForce * 2 - rotateForce);
    const popup: { style?: any } = popupRef.current;
    popup.style.left = moveX + 'px';
    popup.style.top = moveY + 'px';
    popup.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
  };

  return (
    <div className={style.hero} onMouseMove={onMove} ref={heroRef}>
      <div className={style.image_wrapper}>
        <Image src="/images/parallax.webp" alt="Picture of the author" layout="fill" />
      </div>
      <div className={style.overlay}></div>
      <div className={style.popup} ref={popupRef}>
        <h1 className="m-3 text-center">برنج طارم پلا</h1>
        <h3>ارسال برنج به همه‌ی نقاط کشور</h3>
      </div>
    </div>
  );
}
