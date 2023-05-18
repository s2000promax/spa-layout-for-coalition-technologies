import { type ReactElement, useEffect, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import MainImage from '../../../../public/assets/image_1.png';
import LaMountains from '../../../../public/assets/la_mountains.png';
import someSpace from '../../../../public/assets/space.png';
import { useBrowserWindowSize } from '@/shared/lib/hooks/WindowSize';
import { Navbar } from '@/widgets/Navbar';
import { VariantNavbar } from '@/widgets/Navbar/ui/Navbar';

const MainPage = (): ReactElement => {
  // MainImage
  // width: 2533
  // height: 1530
  // OffsetX: -757
  // OffsetY: -9

  // LA Mountains
  // width: 594
  // height: 230
  // OffsetX: 413
  // OffsetY: 241

  // Space
  // width: 1600
  // height: 912
  // OffsetX: 0
  // OffsetY: 0

  const [offSetX, setOffSetX] = useState<number>(0);

  const { windowWidth } = useBrowserWindowSize();

  useEffect(() => {
    setOffSetX(windowWidth / 2);
  }, [windowWidth]);

  return (
    <>
      <Navbar variant={VariantNavbar.CLEAR}/>
      <div className={classNames(cls.mainPage)}>
        <img
          src={MainImage}
          alt="Mountains"
          className={cls.mainImage}
          style={{
            top: `${-9}px`,
            left: `${offSetX - (2533 / 2) - 300}px`,
          }}
        />
        <img
          src={LaMountains} alt="LosAngeles Mountains"
          className={cls.laMountains}
          style={{
            top: `${241}px`,
            left: `${offSetX - 396}px`,
          }}
        />
        <img
          src={someSpace}
          alt="space"
          className={cls.space}
        />
        <div
          className={cls.mask}
        />
      </div>
    </>
  );
};

export default MainPage;
