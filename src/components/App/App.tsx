import React, { FC } from 'react';
import { Provider } from 'react-redux';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import { QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

// types
import { IAppProps } from './types';

// themes
import * as themes from 'themes';
import { createTheme } from 'themes/colorized';

const colorizedTheme = createTheme(themes.base, '1');

export const App: FC<IAppProps> = ({
  store,
  insertCss,
  children,
  dehydratedState,
  queryClient,
}) => (
  <ThemeProvider theme={colorizedTheme}>
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
