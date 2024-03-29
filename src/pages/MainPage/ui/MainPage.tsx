import { type ReactElement, useEffect, useRef, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import MainImage from '@/shared/assets/ui/image_1.png';
import LaMountains from '@/shared/assets/ui/la_mountains.png';
import someSpace from '@/shared/assets/ui/space.png';
import { useBrowserWindowSize } from '@/shared/lib/hooks/WindowSize';
import { Navbar } from '@/widgets/Navbar';
import { VariantNavbar } from '@/widgets/Navbar/ui/Navbar';

const MainPage = (): ReactElement => {
  const [offSetX, setOffSetX] = useState<number>(0);
  const { screenWidth, screenHeight } = useBrowserWindowSize();
  const mainDivRef = useRef<any>();

  useEffect(() => {
    setOffSetX(screenWidth / 2);

    if (mainDivRef.current) {
      if (screenHeight < 500) {
        mainDivRef.current.scrollTop = 150;
      }
    }
  }, [screenHeight, screenWidth]);

  return (
    <>
      <Navbar variant={VariantNavbar.CLEAR}/>
      <div
        className={classNames(cls.mainPage)}
        ref={mainDivRef}
        style={{
          overflowY: `${screenHeight < 500 ? 'auto' : 'hidden'}`,
        }}
      >
        <img
          src={MainImage}
          alt="Mountains"
          className={cls.mainImage}
          style={{
            left: `${screenWidth > 600 ? (offSetX - (2533 / 2) - 295) : (offSetX - (2533 / 2) - 420)}px`,
          }}
        />
        <img
          src={LaMountains}
          alt="LosAngeles Mountains"
          className={cls.laMountains}
          style={{
            top: `${screenWidth > 600 ? 250 : 350}px`,
            left: `${screenWidth > 600 ? (offSetX - 390) : (offSetX - 35)}px`,
            scale: `${screenWidth > 600 ? 1 : 1.4}`,
          }}
        />
        <img
          src={someSpace}
          alt="space"
          className={cls.space}
        />
      </div>
      <div className={cls.mask} />
    </>
  );
};

export default MainPage;
