import React, { FC } from 'react';
import { Provider } from 'react-redux';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import { QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import AOS from 'aos';

// types
import { IAppProps } from './types';

// themes
import * as themes from 'themes';

if (process.env.BROWSER) {
  AOS.init({
    duration: 500,
  });
}

export const App: FC<IAppProps> = ({
  store,
  insertCss,
  children,
  dehydratedState,
  queryClient,
}) => (
  <ThemeProvider theme={themes.base}>
    <CssBaseline />
    <Provider store={store}>
      <StyleContext.Provider value={{ insertCss }}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={dehydratedState}>
            {children}
          </Hydrate>
        </QueryClientProvider>
      </StyleContext.Provider>
    </Provider>
  </ThemeProvider>
);
