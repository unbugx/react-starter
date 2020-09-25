import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

// slices
import rootReducer from 'redux/slices';

export default function configureAppStore(preloadedState = {}) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware()],
    preloadedState,
  });

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('../slices', () => {
      const newRootReducer = require('../slices').default;
      store.replaceReducer(newRootReducer);
    });
  }

  return store;
}
