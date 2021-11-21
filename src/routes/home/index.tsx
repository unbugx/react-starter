import React from 'react'

// components
import { Layout } from 'components/Layout'
import { Counter } from 'components/Counter'

// constants
import { ROUTE } from 'constants/routes'

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
}
