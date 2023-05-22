import { type ReactElement, Suspense } from 'react';
import './styles/index.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from '@/app/providers/router';
import { Footer } from '@/widgets/Footer';

const App = (): ReactElement => {

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="">
        <div className="content-page">
          <AppRouter />
        </div>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
