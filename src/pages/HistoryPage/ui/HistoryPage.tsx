import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './HistoryPage.module.scss';
import peak from '@/shared/assets/ui/peak.png';
import { Navbar } from '@/widgets/Navbar';
import { ParagraphDecorator, VariantParagraphDecorator } from '@/shared/uiKit/ParagraphDecorator';
import { historyContent } from '@/shared/data/mockData';
import { Carousel } from '@/widgets/Carousel';
import { carouselPhotos } from '@/shared/data/mockData';

interface HistoryPageProps {
  className?: string;
}

export const HistoryPage = (props: HistoryPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.historyPage, {}, [className])}>
      <Navbar/>
      <div
        className={classNames(cls.peak, {}, [className])}
        style={{
          background: `url(${peak})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className={classNames(cls.textContainer, {}, [className])}>
          <ParagraphDecorator
            variant={VariantParagraphDecorator.COLUMN}
            header="01.History"
            content={historyContent}
          />
        </div>
        <Carousel photos={carouselPhotos}/>
      </div>
    </div>
  );
};
