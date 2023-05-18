import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './HistoryPage.module.scss';
import peak from '../../../../public/assets/peak.png';
import { Navbar } from '@/widgets/Navbar';

interface HistoryPageProps {
  className?: string;
}

export const HistoryPage = (props: HistoryPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.historyPage, {}, [className])}>
      <Navbar/>
      <img
        src={peak} alt="peak"
        className={classNames(cls.peak, {}, [className])}
      />
      <div
        className={classNames(cls.textContainer, {}, [className])}
      >
        <h1>
          01.
          <span>History</span>
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Amet architecto, consequuntur distinctio dolor dolores ducimus esse exercitationem,
          iusto mollitia nostrum pariatur praesentium quibusdam reiciendis similique tenetur
          ullam veniam! Adipisci alias amet animi beatae consectetur enim facere ipsam
          laboriosam libero modi nulla optio praesentium quos repellendus, sint tempora vero
          voluptas voluptate?
        </p>
      </div>
      <div
        className={classNames(cls.carousel, {}, [className])}
      >
        carousel
      </div>
    </div>
  );
};
