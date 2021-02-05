/* eslint-disable no-unused-vars */
import rootReducer from 'redux/slices';
import store from 'redux/store/clientStore';
import { DehydratedState } from 'react-query/hydration';
import { PaletteColorOptions } from '@material-ui/core';
import { PaletteColor } from '@material-ui/core/styles/createPalette';

declare global {
  declare module '*.css' {
    const content: {[className: string]: string};
    export default content;
  }

  type RootState = ReturnType<typeof rootReducer>;

  interface EnvVariables {
    APP_BASE_PATH: string,
  }

  interface Window extends EnvVariables {
    APP_STATE: ReturnType<typeof rootReducer>,
    REACT_QUERY_STATE: DehydratedState,
    store: typeof store,
    Cypress: unknown,
    appReady: boolean,
  }

  type AppDispatch = typeof store.dispatch;

  interface Global {
    window: Window,
    process: {
      env: EnvVariables & { BROWSER: boolean, },
    }
  }

  declare const global: Global;
}

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    xm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    backgroundPrimary: PaletteColor;
    backgroundSecondary: PaletteColor;
  }
  interface PaletteOptions {
    backgroundPrimary?: PaletteColorOptions;
    backgroundSecondary?: PaletteColorOptions;
  }
}
