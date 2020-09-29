import { Parallax } from 'react-parallax';
import style from './hero.module.scss';
import { useEffect, createRef, useState } from 'react';

export default function Hero() {
  const heroRef = createRef();
  const popupRef = createRef();
  const [index, setIndex] = useState(0);
  useEffect(() => {}, []);

  const onMove = e => {
    setIndex(index + 1);
    if (index % 5 !== 0) return;
    var moveForce = 10; // max popup movement in pixels
    var rotateForce = 10; // max popup rotation in deg
    const area = heroRef.current;

    var docX = area.offsetWidth;
    var docY = area.offsetHeight;

    console.log(docX);

    var moveX = ((e.pageX - docX / 2) / (docX / 2)) * -moveForce;
    var moveY = ((e.pageY - docY / 2) / (docY / 2)) * -moveForce;

    var rotateY = (e.pageX / docX) * rotateForce * 2 - rotateForce;
    var rotateX = -((e.pageY / docY) * rotateForce * 2 - rotateForce);

    const popup = popupRef.current;
    popup.style.left = moveX + 'px';
    popup.style.top = moveY + 'px';
    popup.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
  };

  return (
    <Parallax blur={{ min: -15, max: 15 }} bgImage={'images/hero.jpg'} bgImageAlt="the dog" strength={-200}>
      <div className={style.hero} onMouseMove={onMove} ref={heroRef}>
        <div className={style.overlay}></div>
        <div className={style.popup} ref={popupRef}>
          <h1 className="m-3 text-center">برنج طارم پلا</h1>
          <h3>ارسال برنج به همه‌ی نقاط کشور</h3>
        </div>
      </div>
    </Parallax>
  );
}
