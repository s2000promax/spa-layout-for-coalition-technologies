import React from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Circle.module.scss';

interface CircleProps {
  className?: string;
  active?: boolean;
  id?: string;
  handleClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const Circle = (props: CircleProps) => {
  const {
    className,
    active = false,
    id = '0',
    handleClick,
  } = props;

  const mods: Mods = {
    [cls.active]: active,
  };

  return (
    <div
      className={classNames(cls.circle, mods, [className])}
      onClick={handleClick}
      id={id}
    />
  );
};
