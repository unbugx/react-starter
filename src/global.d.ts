/* eslint-disable no-unused-vars */
import rootReducer from 'redux/slices';
import store from 'redux/store/clientStore';
import { DehydratedState } from 'react-query/hydration';

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
