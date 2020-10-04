/* eslint-disable no-unused-vars */
import rootReducer from 'redux/slices';

declare global {
  declare module '*.css' {
    const content: {[className: string]: string};
    export default content;
  }

  type RootState = ReturnType<typeof rootReducer>;

  interface Window {
    APP_STATE: ReturnType<typeof rootReducer>;
  }
}
