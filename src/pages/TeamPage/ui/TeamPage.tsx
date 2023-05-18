import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './TeamPage.module.scss';

interface TeamPageProps {
  className?: string;
}

export const TeamPage = (props: TeamPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.teamPage, {}, [className])}>
      {/*<img src={} alt="peak"/>*/}
    </div>
  );
};
