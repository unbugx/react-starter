import React from 'react'

// components
import { Layout } from 'components/Layout'

// constants
import { ROUTE } from 'constants/routes'

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
}
