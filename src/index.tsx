import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// styles
import './global.css';

// store
import configureStore from 'redux/store/configureStore';

// components
import { Layout } from 'components/Layout/Layout';

const element = document && document.getElementById('app');

if (!element) {
  throw Error('Should never happen');
}

const store = configureStore();

function Root() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

render(React.createElement(Root), element);

// check if HMR is enabled
if (module.hot) {
  // accept itself
  module.hot.accept();
}
