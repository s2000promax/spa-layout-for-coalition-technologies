import React, { useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './TeamPage.module.scss';
import { ParagraphDecorator } from '@/shared/uiKit/ParagraphDecorator';
import { climbContent } from '@/shared/data/mockData';
import { Tabs } from '@/features/Tabs';



interface TeamPageProps {
  className?: string;
}

export const TeamPage = (props: TeamPageProps) => {
  const {
    className,
  } = props;

  return (
    <div className={classNames(cls.teamPage, {}, [className])}>
      <ParagraphDecorator
      header="02.Climb"
      content={climbContent}
      />
      <Tabs />
    </div>
  );
};
