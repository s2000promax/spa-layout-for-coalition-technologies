import React, { memo, useCallback, useEffect, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Carousel.module.scss';
import { Circle } from '@/shared/uiKit/Circle';
import { CarouselPhotos } from '@/shared/types/types';

interface CarouselProps {
  className?: string;
  photos: Array<CarouselPhotos>;
}

export const Carousel = memo((props: CarouselProps) => {
  const {
    className,
    photos = [],
  } = props;

  const [selectedId, setSelectedId] = useState<string>('1');

  const handleClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    setSelectedId(event.currentTarget.id);
  }, []);

  return (
    <div className={classNames(cls.carousel, {}, [className])}>
      <div
        className={classNames(cls.imageContainer, {}, [className])}
      >
        {
          photos.length
          &&
          photos.map((slide, index) => (
            <div
              key={`${slide.alt}-${index}`}
              className={classNames(cls.slide, {}, [className])}
              style={{
                transform: `translateX(-${Number(selectedId) * 100}%)`,
              }}
            >
              <img
                src={slide.src}
                alt={slide.alt}
              />
            </div>
          ))
        }
      </div>
      <div className={classNames(cls.navPanel, {}, [className])}>
        {
          photos.map((nav, index) => (
            <Circle
              key={`${nav}-${index}`}
              active={nav.id === selectedId}
              handleClick={handleClick}
              id={nav.id}
            />
          ))
        }
      </div>
    </div>
  );
});
