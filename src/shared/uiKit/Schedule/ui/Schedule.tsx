import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Schedule.module.scss';
import { ScheduleItem } from '@/shared/types/types';

interface ScheduleProps {
  className?: string;
  schedules: Array<ScheduleItem>;
}

export const Schedule = memo((props: ScheduleProps) => {
  const {
    className,
    schedules,
  } = props;

  return (
    <div className={classNames(cls.schedule, {}, [className])}>
      <h1
        className={classNames(cls.header, {}, [className])}
      >
        Schedule
      </h1>
      <ul>
        {
          schedules.map((item, index) => (
            <li key={`${item}-${index}`}>
              <span>{item.data ? item.data : <br/>}</span>
              <span>{item.description}</span>
            </li>
          ))
        }
      </ul>
    </div>
  );
});
