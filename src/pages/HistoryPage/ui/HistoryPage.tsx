import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './HistoryPage.module.scss';
import peak from '@/shared/assets/ui/peak.png';
import { Navbar } from '@/widgets/Navbar';
import { ParagraphDecorator, VariantParagraphDecorator } from '@/shared/uiKit/ParagraphDecorator';
import { historyContent } from '@/shared/data/data';

interface HistoryPageProps {
  className?: string;
}

export const HistoryPage = (props: HistoryPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.historyPage, {}, [className])}>
      <Navbar/>
      <img
        src={peak}
        alt="peak"
        className={classNames(cls.peak, {}, [className])}
      />
      <div className={classNames(cls.textContainer, {}, [className])}>
        <ParagraphDecorator
          variant={VariantParagraphDecorator.COLUMN}
          header="01.History"
          content={historyContent}
        />
      </div>
      <div
        className={classNames(cls.carousel, {}, [className])}
      >
        carousel
      </div>
    </div>
  );
};
