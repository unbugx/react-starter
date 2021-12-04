import React from 'react'

// components
import { Layout } from 'components/app/Layout'
import { Users } from 'components/pages/Users'

// constants
import { routeNames, routePaths } from 'constants/routes'

export default {
  path: routePaths.USERS,
  action: () => ({
    name: routeNames.USERS,
    component: (
      <Layout>
        <Users />
      </Layout>
    ),
  }),
}
