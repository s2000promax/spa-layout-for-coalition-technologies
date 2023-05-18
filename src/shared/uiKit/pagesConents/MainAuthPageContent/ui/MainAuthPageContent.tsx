import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainAuthPage.module.scss';
import { Link } from 'react-router-dom';

interface MainAuthPageProps {
  className?: string;
}

export const MainAuthPageContent = (props: MainAuthPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.mainAuthPage, {}, [className])}>
      <p>{`Step right up and immerse yourself in the world of American Roulette at Fortune Island Casino, 
      where excitement and anticipation swirl around the roulette wheel! 
      Will the ball land on your lucky number, or will it be the color you've been dreaming of?`}
      </p>

      <div>
        <img src={'/assets/RouletteImage.png'} alt={''}/>
      </div>
      <div>
        <Link
          to={'/roulette'}
          className={classNames(cls.btn)}
        >
          {'Play'}
        </Link>
      </div>
    </div>
  );
};
