import * as React from 'react';
import ReactDOM from 'react-dom';

// components
import { App } from 'components/App/App';

// store
import configureStore from 'redux/store/configureStore';

// styles
import './global.css';

const container = document.getElementById('app');

const store = configureStore(window.APP_STATE);

const insertCss = (...styles: any) => {
  const removeCss = styles.map((style: any) => style._insertCss());
  return () => removeCss.forEach((dispose: any) => dispose());
};

function main() {
  ReactDOM.hydrate(React.createElement(App, { store, insertCss }), container);
}

main();
