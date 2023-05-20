import React from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './TabItem.module.scss';
import { Button, VariantButton } from '@/shared/uiKit/Button';

interface TabItemProps {
  className?: string;
  id?: string;
  text?: string;
  active?: boolean;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const TabItem = (props: TabItemProps) => {
  const {
    id = '1',
    className = `Button ${id}`,
    text = `Button ${id}`,
    active = false,
    handleClick,
  } = props;

  const mods: Mods = {
    [cls.active]: active,
  };

  return (
    <div className={classNames(cls.tabItem, {}, [className])}>
      <div className={classNames(cls.rectangle, mods, [className])}>
        <div className={classNames(cls.underline, {}, [className])}/>
      </div>
      <Button
          variant={VariantButton.CLEAR}
          onClick={handleClick}
          id={id}
          active={active}
        >
        {text}
      </Button>
    </div>
  );
};
