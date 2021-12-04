import React from 'react'

// components
import { Layout } from 'components/app/Layout'

// constants
import { routeNames, routePaths } from 'constants/routes'

export default {
  path: routePaths.CONTACTS,
  action: () => ({
    name: routeNames.CONTACTS,
    component: (
      <Layout>
        Contacts Page
      </Layout>
    ),
  }),
}
