import React from 'react'

// components
import { Layout } from 'components/app/Layout'
import { Users } from 'components/pages/Users'

// constants
import { ROUTE } from 'constants/routes'

export default {
  path: '/users',
  action: () => ({
    name: ROUTE.USERS,
    component: (
      <Layout>
        <Users />
      </Layout>
    ),
  }),
}
