import { useEffect } from 'react';

const useScript = (url, element) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    element.appendChild(script);

    return () => {
      element.removeChild(script);
    };
  }, [url]);
};

export default useScript;
