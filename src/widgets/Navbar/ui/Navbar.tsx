import React, { memo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from '@/shared/uiKit/AppLink';
import logo from '@/shared/assets/ui/logo.png';

export enum VariantNavbar {
  CLEAR = 'clear',
  BACKGROUND = 'background',
}

interface NavbarProps {
  className?: string;
  variant?: VariantNavbar;
}

export const Navbar = memo((props: NavbarProps) => {
  const {
    className,
    variant = VariantNavbar.BACKGROUND,
  } = props;

  const mods: Mods = {
    [cls[variant]]: true,
  };

  return (
    <div
      className={classNames(cls.navbar, mods, [className])}
    >
      <div
        className={classNames(variant === VariantNavbar.BACKGROUND
          ? cls.backgroundContainer
          : cls.clearContainer,
          {},
          [className])}
      >
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
          <div
          className={classNames(cls.logo, {}, [className])}
        >
            <img
        src={logo}
        alt="logo"
      />
            <div
            className={classNames(cls.logoContainer, {}, [className])}
            style={{
            display: `${variant === VariantNavbar.BACKGROUND ? 'flex' : 'none'}`,
          }}>
              <span>LosAngeles</span>
              <span>Mountains</span>
            </div>
          </div>
        </AppLink>
        <div className={classNames(cls.links, {}, [className])}>
          <AppLink theme={AppLinkTheme.SECONDARY} to={'/history'}>
            <span>{'01. History'}</span>
          </AppLink>
          <AppLink theme={AppLinkTheme.SECONDARY} to={'/team'}>
            <span>{'02. Team'}</span>
          </AppLink>
        </div>
      </div>
    </div>
  );
});
