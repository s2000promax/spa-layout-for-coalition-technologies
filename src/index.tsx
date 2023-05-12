import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import App from './app/App';
import './app/styles/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <ErrorBoundary>
            <App/>
        </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
);
