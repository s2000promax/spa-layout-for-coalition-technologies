import React, { useCallback, useEffect, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { TabItem } from '@/shared/uiKit/TabItem';
import tab1 from '@/shared/assets/ui/tab1.png';
import { Schedule } from '@/shared/uiKit/Schedule';
import { schedulesTab1, schedulesTab2 } from '@/shared/data/mockData';
import tab2 from '@/shared/assets/ui/tab2.png';
import { useBrowserWindowSize } from '@/shared/lib/hooks/WindowSize';
import { ScheduleItem } from '@/shared/types/types';

enum TabsItems {
  TAB1 = 'tab1',
  TAB2 = 'tab2',
}

type ItemsContentType = {
  id: TabsItems;
  text: string;
  collapsed: boolean;
  src: string;
  schedule: Array<ScheduleItem>;
}

interface TabsProps {
  className?: string;
}

export const Tabs = (props: TabsProps) => {
  const {
    className,
  } = props;

  const [tabs, setTabs] = useState<TabsItems>(TabsItems.TAB1);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [itemsContent, setItemsContent] = useState<Array<ItemsContentType>>([
    { id: TabsItems.TAB1, text: 'MOUNTAIN 1', collapsed: false, src: tab1, schedule: schedulesTab1 },
    { id: TabsItems.TAB2, text: 'MOUNTAIN 2', collapsed: false, src: tab2, schedule: schedulesTab2 },
  ]);
  const { screenWidth } = useBrowserWindowSize();

  useEffect(() => {
    if (screenWidth < 600) {
      setIsMobile(() => true);
    } else {
      setIsMobile(() => false);
    }
  }, [screenWidth]);

  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setTabs(event.currentTarget.id as TabsItems);

    const newItemsContent: Array<ItemsContentType> = [];

    itemsContent.forEach(item => {
      if (item.id === event.currentTarget.id as TabsItems) {
        newItemsContent.push({ ...item, collapsed: !item.collapsed });
      } else {
        newItemsContent.push({ ...item });
      }
    });

    setItemsContent(newItemsContent);
  }, [itemsContent]);

  if (isMobile) {
    return (
      <div className={classNames(cls.tabs, {}, [className])}>
        {
          itemsContent.length && (
            itemsContent.map((content, index) => (
              <div
                  className={classNames(cls.tab, {}, [className])}
                  key={`${content.text}-${index}`}
                >
                <TabItem
                    text={content.text}
                    id={content.id}
                    active={!content.collapsed}
                    handleClick={handleClick}
                    isMobile={isMobile}
                  />
                <div
                    className={
                      classNames(
                        cls.tabContent,
                        { [cls.collapsed]: content.collapsed },
                        [className],
                      )
                    }
                    style={{
                      backgroundImage: `url(${content.src})`,
                      backgroundPositionY: `${content.id === TabsItems.TAB1 ? -350: -250}px`,
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                  <div className={classNames(cls.schedule, {}, [className])}>
                    <Schedule
                        schedules={content.schedule}
                      />
                  </div>
                </div>
              </div>
            ))
          )
        }
      </div>
    );
  } else {
    return (
      <div className={classNames(cls.tabs, {}, [className])}>
        <div className={classNames(cls.navTab, {}, [className])}>
          <div className={classNames(cls.tabContainer, {}, [className])}>
            <TabItem
              text="MOUNTAIN 1"
              id={TabsItems.TAB1}
              active={tabs === TabsItems.TAB1 ? true : false}
              handleClick={handleClick}
            />
            <TabItem
              text="MOUNTAIN 2"
              id={TabsItems.TAB2}
              active={tabs === TabsItems.TAB2 ? true : false}
              handleClick={handleClick}
            />
          </div>
        </div>
        {
          tabs === TabsItems.TAB1
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
  }
};
