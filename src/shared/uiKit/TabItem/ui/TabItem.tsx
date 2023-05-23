import React from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './TabItem.module.scss';
import { Button, VariantButton } from '@/shared/uiKit/Button';
import { SizeButton } from '@/shared/uiKit/Button/ui/Button';

interface TabItemProps {
  className?: string;
  id?: string;
  text?: string;
  active?: boolean;
  isMobile?: boolean;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const TabItem = (props: TabItemProps) => {
  const {
    id = '1',
    className = `Button ${id}`,
    text = `Button ${id}`,
    active = false,
    isMobile = false,
    handleClick,
  } = props;

  const mods: Mods = {
    [cls.active]: active,
  };

  if (isMobile) {
    return (
      <div className={classNames(cls.tabMobileItem, {}, [className])}>
        {/*<div className={classNames(cls.mobileRectangle, mods, [className])}>*/}
        <Button
            variant={VariantButton.BACKGROUND}
            size={SizeButton.F}
            onClick={handleClick}
            id={id}
            active={active}
          >
          {text}
        </Button>
        <div className={classNames(cls.mobileUnderline, {}, [className])}/>
        {/*</div>*/}
      </div>
    );
  } else {
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
  }
};
