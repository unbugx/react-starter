import React from 'react';
import { Layout } from 'components/Layout/Layout';
import { Counter } from 'components/Counter/Counter';
import { ROUTE } from 'constants/routes';

export default {
  path: '',
  action: () => ({
    name: ROUTE.HOME,
    component: (
      <Layout>
        Home Page
        <div>
          <Counter />
        </div>
      </Layout>
    ),
  }),
};
