import React, { FC } from 'react';
import { Provider } from 'react-redux';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import { QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';

// types
import { IAppProps } from './types';

export const App: FC<IAppProps> = ({
  store,
  insertCss,
  children,
  dehydratedState,
  queryClient,
}) => (
  <Provider store={store}>
    <StyleContext.Provider value={{ insertCss }}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={dehydratedState}>
          {children}
        </Hydrate>
      </QueryClientProvider>
    </StyleContext.Provider>
  </Provider>
);
