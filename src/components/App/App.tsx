import React, { FC } from 'react'
import { Provider } from 'react-redux'

// types
import type { AppProps } from './types'

export const App: FC<AppProps> = ({
  store,
  children,
}) => (
  <Provider store={store}>
    {children}
  </Provider>
)
