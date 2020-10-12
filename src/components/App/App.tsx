import React, { FC } from 'react';
import { Provider } from 'react-redux';
import StyleContext from 'isomorphic-style-loader/StyleContext';

// types
import { IAppProps } from './types';

export const App: FC<IAppProps> = ({
  store,
  insertCss,
  children,
}) => (
  <Provider store={store}>
    <StyleContext.Provider value={{ insertCss }}>
      {children}
    </StyleContext.Provider>
  </Provider>
);
