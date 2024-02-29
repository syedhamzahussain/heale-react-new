import { Fragment, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PLACEMENT, ToasterContainer } from 'baseui/toast';

import Layout from 'layout';
import Loader from './shared/components/loader';
import AppRouter from './shared/components/app-router';

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Layout>
            <AppRouter />
            <ToasterContainer
              placement={PLACEMENT.bottomRight}
              overrides={{
                Root: {
                  style: ({ $theme }) => ({
                    zIndex: 9999,
                  }),
                },
              }}
            />
          </Layout>
        </Suspense>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
