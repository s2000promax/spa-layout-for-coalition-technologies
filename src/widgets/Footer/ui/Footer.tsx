import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Footer.module.scss';
import { AppLink, AppLinkTheme } from '@/shared/uiKit/AppLink';
import logo from '@/shared/assets/ui/logo.png';

interface FooterProps {
  className?: string;
}

export const Footer = memo((props: FooterProps) => {
  const {
    className,
  } = props;

  return (
    <div
      className={classNames(cls.footer, {}, [className])}
    >
      <div
        className={classNames(
          cls.backgroundContainer,
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
            display: 'flex',
          }}>
              <span>LosAngeles</span>
              <span>Mountains</span>
            </div>
          </div>
        </AppLink>
        <div className={classNames(cls.footerText, {}, [className])}>
          <span>COPYRIGHT 2016. ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </div>
  );
});
