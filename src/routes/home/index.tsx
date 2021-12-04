import React from 'react'

// components
import { Layout } from 'components/app/Layout'
import { Counter } from 'components/Counter'

// constants
import { routeNames, routePaths } from 'constants/routes'

export default {
  path: routePaths.ROOT,
  action: () => ({
    name: routeNames.ROOT,
    component: (
      <Layout>
        Home Page
        <div>
          <Counter />
        </div>
      </Layout>
    ),
  }),
}
