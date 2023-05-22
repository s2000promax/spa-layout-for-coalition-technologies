import { useEffect, useState } from 'react';

type ScreenSize = {
  screenWidth: number;
  screenHeight: number;
}

export const useBrowserWindowSize = () => {
  const [windowSize, setWindowSize] = useState<ScreenSize>({
    // windowWidth: window.innerWidth,
    screenWidth: screen.width,
    screenHeight: screen.height,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        screenWidth: screen.width,
        screenHeight: screen.height,
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
