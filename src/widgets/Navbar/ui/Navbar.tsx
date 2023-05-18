import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, VariantButton } from '@/shared/uiKit/Button';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from '@/shared/uiKit/AppLink';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  console.log('123');
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.links, {}, [className])}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
          <span>{'History'}</span>
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
          <span>{'Team'}</span>
        </AppLink>
      </div>
    </div>
  )
    ;
});
