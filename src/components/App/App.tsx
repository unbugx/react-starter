import React, { FC } from 'react';
import { Provider } from 'react-redux';
import StyleContext from 'isomorphic-style-loader/StyleContext';

// components
import { Layout } from 'components/Layout/Layout';

// types
import { IAppProps } from './types';

export const App: FC<IAppProps> = ({
  store,
  insertCss,
}) => (
  <Provider store={store}>
    <StyleContext.Provider value={{ insertCss }}>
      <Layout />
    </StyleContext.Provider>
  </Provider>
);
