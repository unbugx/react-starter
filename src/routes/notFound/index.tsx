import React from 'react';
import { Layout } from 'components/Layout/Layout';
import { ROUTE } from 'constants/routes';

export default {
  path: '(.*)',
  action: () => ({
    name: ROUTE.NOT_FOUND,
    component: (
      <Layout>
        404 Page
      </Layout>
    ),
    status: 404,
  }),
};
