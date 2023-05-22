import React from 'react';
import { type RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { HistoryPage } from '@/pages/HistoryPage';
import { TeamPage } from '@/pages/TeamPage';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
}

export enum AppRoutes {
  MAIN = 'main',
  HISTORY = 'history',
  TEAM = 'team',
  // Must be last
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.HISTORY]: '/history',
  [AppRoutes.TEAM]: '/team',

  // Must be last
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.HISTORY]: {
    path: RoutePath.history,
    element: <HistoryPage />,
  },
  [AppRoutes.TEAM]: {
    path: RoutePath.team,
    element: <TeamPage />,
  },

  // Must be last
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
