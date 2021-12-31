import React, { FC } from 'react'

// styles
import 'components/ui/styles/index.css'

// components
import { Provider } from 'react-redux'

// types
import type { AppProps } from 'components/app/App/App.types'

export const App: FC<AppProps> = ({ store, children }) => (
  <Provider store={store}>{children}</Provider>
)
