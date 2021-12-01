/* eslint-disable no-unused-vars */
// store
import rootReducer from 'store/rootReducer'
import store from 'store/clientStore'

declare global {
  declare module '*.css' {
    const content: {[className: string]: string}
    export default content
  }

  type State = ReturnType<typeof rootReducer>;

  interface EnvVariables {
    APP_BASE_PATH: string,
  }

  interface Window extends EnvVariables {
    APP_STATE: ReturnType<typeof rootReducer>,
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

  declare const global: Global
}
