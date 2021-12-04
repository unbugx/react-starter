import React from 'react'

// components
import { Layout } from 'components/app/Layout'

// constants
import { routeNames, routePaths } from 'constants/routes'

export default {
  path: routePaths.NOT_FOUND,
  action: () => ({
    name: routeNames.NOT_FOUND,
    component: (
      <Layout>
        404 Page
      </Layout>
    ),
    status: 404,
  }),
}
