import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import style from './hero.module.scss';
import Fade from '@material-ui/core/Fade';

export default function Hero() {
  const heroRef = useRef();
  const popupRef = useRef();
  const [index, setIndex] = useState(0);
  const [slider, setSlider] = useState(0)
  useEffect(() => {
    const interval = setTimeout(() => setSlider(slider+1), 4000)
    return () => clearTimeout(interval)
  }, [slider]);


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

  const renderSlideImage = () => {
    switch (slider % 3) {
      case 1:
        return <Image src="/images/parallax.webp" alt="طارم‌پلا" layout="fill" /> 
      case 2:
        return <Image src="/images/hero-1.webp" alt="طارم‌پلا" layout="fill" />
      default:
        return <Image src="/images/hero-2.webp" alt="طارم‌پلا" layout="fill" />
    }
  }

  return (
    <div className={style.hero} onMouseMove={onMove} ref={heroRef}>
      <div className={style.image_wrapper}>
    
        {renderSlideImage()}
        
        </div>
      <div className={style.overlay}></div>
      <div className={style.popup} ref={popupRef}>
        <h1 className="m-3 text-center">برنج طارم پلا</h1>
        <h3>ارسال برنج به همه‌ی نقاط کشور</h3>
      </div>
    </div>
  );
}
