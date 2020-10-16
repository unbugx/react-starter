import React from 'react';
import { Layout } from 'components/Layout/Layout';
import { ROUTE } from 'constants/routes';

export default {
  path: '/contacts',
  action: () => ({
    name: ROUTE.CONTACTS,
    component: (
      <Layout>
        Contacts Page
      </Layout>
    ),
  }),
};
