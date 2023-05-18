import { MutableRefObject, type ReactElement, useEffect, useRef, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import MainImage from '../../../../public/assets/image_1.png';
import LaMountains from '../../../../public/assets/la_mountains.png';
import { useBrowserWindowSize } from '@/shared/lib/hooks/WindowSize';

function getOffset(el: HTMLImageElement) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
}

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

  const mountainsRef = useRef<HTMLImageElement>(null);
  const laRef = useRef<HTMLImageElement>(null);

  const { windowWidth, windowHeight } = useBrowserWindowSize();

  useEffect(() => {
    setOffSetX(windowWidth / 2);
  }, [windowWidth]);

  // console.log(width, height);
  console.log(mountainsRef.current?.width, mountainsRef.current?.height);

  return (
    <div className={classNames(cls.mainPage)}>
      <img
        ref={mountainsRef}
        src={MainImage}
        alt="Mountains"
        className={cls.mainImage}
        style={{
          top: `${-9}px`,
          left: `${offSetX - (2533 / 2) - 317}px`,
        }}
      />
      <img
        ref={laRef}
        src={LaMountains} alt="LosAngeles Mountains"
        className={cls.laMountains}
        style={{
          top: `${241}px`,
          left: `${offSetX - 413}px`,
        }}
      />
    </div>
  );
};

export default MainPage;
