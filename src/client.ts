import * as React from 'react';
import ReactDOM from 'react-dom';

// components
import { App } from 'components/App/App';

// store
import store from 'redux/store/clientStore';

// styles
import './global.css';

const container = document.getElementById('app');

const insertCss = (...styles: any) => {
  const removeCss = styles.map((style: any) => style._insertCss());
  return () => removeCss.forEach((dispose: any) => dispose());
};

function main() {
  ReactDOM.hydrate(React.createElement(App, { store, insertCss }), container);
}

main();

// check if HMR is enabled
if (module.hot) {
  // accept itself
  module.hot.accept();
}
