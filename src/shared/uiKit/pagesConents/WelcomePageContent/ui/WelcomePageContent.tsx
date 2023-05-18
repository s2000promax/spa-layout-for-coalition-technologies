import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './WelcomePage.module.scss';

interface WelcomePageProps {
  className?: string;
}

export const WelcomePageContent = (props: WelcomePageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.welcomePage, {}, [className])}>
      <header>
        <h1>{'Welcome to Fortune Island Casino'}</h1>
      </header>
      <main>
        <div className={classNames(cls.img)}>
          <img src={'assets/MainImage.png'} alt={''}/>
        </div>
        <section className={classNames(cls.intro)}>
          <h2>{'Experience the thrill of the game!'}</h2>
          <p>
            {`At Fortune Island Casino, we offer the best gaming experience, 
            top-notch services, and luxurious amenities`}
          </p>
        </section>
      </main>
      <footer>
        <p>{'2023 Fortune Island Casino. All rights reserved.'}</p>
      </footer>
    </div>
  );
};
