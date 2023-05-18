import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/uiKit/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.pageError, {}, [className])}>
      <p>{'Something went wrong'}</p>
      <Button
        onClick={reloadPage}
      >
        {'Refresh page'}
      </Button>
    </div>
  );
};
