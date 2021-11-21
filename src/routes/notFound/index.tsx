import React from 'react'

// components
import { Layout } from 'components/Layout'

// constants
import { ROUTE } from 'constants/routes'

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
}
