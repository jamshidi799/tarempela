import { useEffect, useState } from 'react';

export default function useWindowWidth() {
  const [windowDimensions, setWindowDimensions] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(window.innerWidth);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
