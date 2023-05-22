import React, { useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './TeamPage.module.scss';
import tab1 from '@/shared/assets/ui/tab1.png';
import tab2 from '@/shared/assets/ui/tab2.png';
import { TabItem } from '@/shared/uiKit/TabItem';
import { Schedule } from '@/shared/uiKit/Schedule';
import { schedulesTab1,schedulesTab2 } from '@/shared/data/mockData';
import { ParagraphDecorator } from '@/shared/uiKit/ParagraphDecorator';
import { climbContent } from '@/shared/data/mockData';

enum Tabs {
  TAB1 = 'tab1',
  TAB2 = 'tab2',
}

interface TeamPageProps {
  className?: string;
}

export const TeamPage = (props: TeamPageProps) => {
  const { className } = props;
  const [tabs, setTabs] = useState<Tabs>(Tabs.TAB1);

  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setTabs(event.currentTarget.id as Tabs);
  }, []);

  return (
    <div className={classNames(cls.teamPage, {}, [className])}>
      <ParagraphDecorator
      header="02.Climb"
      content={climbContent}
      />
      <div className={classNames(cls.navTab, {}, [className])}>
        <div className={classNames(cls.tabContainer, {}, [className])}>
          <TabItem
            text="MOUNTAIN 1"
            id={Tabs.TAB1}
            active={tabs === Tabs.TAB1 ? true : false}
            handleClick={handleClick}
          />
          <TabItem
            text="MOUNTAIN 2"
            id={Tabs.TAB2}
            active={tabs === Tabs.TAB2 ? true : false}
            handleClick={handleClick}
          />
        </div>
      </div>
      {
        tabs === Tabs.TAB1
          ? (
            <div
              className={classNames(cls.tabBlock, {}, [className])}
              style={{
                backgroundImage: `url(${tab1})`,
                backgroundPositionY: '-350px',
              }}
            >
              <div
                className={classNames(cls.contentContainer, {}, [className])}
              >
                <div className={classNames(cls.schedule, {}, [className])}>
                  <Schedule
                  schedules={schedulesTab1}
                />
                </div>
              </div>
            </div>
          )
          : (
            <div
              className={classNames(cls.tabBlock, {}, [className])}
              style={{
                background: `url(${tab2})`,
                backgroundPositionY: '-250px',
              }}
            >
              <div
                className={classNames(cls.contentContainer, {}, [className])}
              >
                <div className={classNames(cls.schedule, {}, [className])}>
                  <Schedule
                    schedules={schedulesTab2}
                  />
                </div>
              </div>
            </div>
          )
      }
    </div>
  );
};
