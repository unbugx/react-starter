import React, { FC } from 'react';
import { Provider } from 'react-redux';
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
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        {children}
      </Hydrate>
    </QueryClientProvider>
  </Provider>
);
