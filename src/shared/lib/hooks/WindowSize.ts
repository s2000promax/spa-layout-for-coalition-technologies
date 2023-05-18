import { useEffect, useState } from 'react';

type WindowSize = {
  windowWidth: number;
  windowHeight: number;
}

export const useBrowserWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    ...windowSize,
  };
};
