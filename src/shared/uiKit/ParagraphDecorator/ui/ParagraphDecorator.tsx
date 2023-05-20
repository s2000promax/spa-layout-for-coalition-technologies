import React from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './ParagraphDecorator.module.scss';

export enum VariantParagraphDecorator {
  ROW = 'row',
  COLUMN = 'column',
}
interface ParagraphDecoratorProps {
  className?: string;
  variant?: VariantParagraphDecorator;
  header?: string;
  content?: string;
}

export const ParagraphDecorator = (props: ParagraphDecoratorProps) => {
  const {
    className,
    variant = VariantParagraphDecorator.ROW,
    header = '01.History',
    content = 'lorem ipsum',
  } = props;

  const mods: Mods = {
    [cls[variant]]: true,
  };

  return (
    <div className={classNames(cls.paragraphDecorator, mods, [className])}>
      <div className={classNames(cls.headerContainer, {}, [className])}>
        <h1>{`${header.split('.')[0]}.`}</h1>
        <span>{header.split('.')[1]}</span>
      </div>
      <div className={classNames(cls.textContainer, {}, [className])}>
        <p>{content}</p>
      </div>
    </div>
  );
};
