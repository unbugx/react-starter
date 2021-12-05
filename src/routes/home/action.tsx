import React from 'react'

// components
import { Layout } from 'components/app/Layout'
import { Counter } from 'components/Counter'

// constants
import { routeNames } from 'constants/routes'

export const action = () => ({
  name: routeNames.ROOT,
  component: (
    <Layout>
      Home Page
      <div>
        <Counter />
      </div>
    </Layout>
  ),
})
