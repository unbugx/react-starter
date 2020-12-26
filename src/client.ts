import * as React from 'react';
import ReactDOM from 'react-dom';
import UniversalRouter from 'universal-router';
import store from 'redux/store/clientStore';
import history from 'core/history';
import routes from 'routes';
import RedBox from 'redbox-react';
import { Location } from 'history';
import { getBasePath, getPath } from 'core/utils';

// components
import { App } from 'components/App/App';

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line no-console
  console.warn('Looks like we are in development mode!');
}

// expose store when run in Cypress
if (window.Cypress) {
  window.store = store;
  window.appReady = true;
}

const container = document.getElementById('app');

const insertCss = (...styles: any) => {
  const removeCss = styles.map((style: any) => style._insertCss());
  return () => removeCss.forEach((dispose: any) => dispose());
};

const router = new UniversalRouter(routes, {
  baseUrl: getBasePath(),
});

let initialRender = true;

function onRender() {
  if (initialRender) {
    initialRender = false;

    const element = document.getElementById('css');
    element?.parentNode?.removeChild(element);
  }
}

async function render(location: Location) {
  try {
    const { component: route } = await router.resolve({
      pathname: `${getBasePath()}${getPath(location.pathname)}`,
    });
    ReactDOM.hydrate(React.createElement(App, { store, insertCss }, route.component), container, onRender);
  } catch (error) {
    if (process.env.NODE_ENV === 'production') {
      // eslint-disable-next-line no-console
      console.error('Application Error: Please contact technical support!');
    } else {
      // eslint-disable-next-line no-console
      console.error(error);
    }

    ReactDOM.hydrate(React.createElement(RedBox, { error }), container);
  }
}

function main() {
  if (!history) {
    return;
  }

  // Listening for the history changes to the current location
  history.listen((update) => render(update.location));

  // Initial Rendering for the initial location
  render(history.location);
}

main();

// check if HMR is enabled
if (module.hot) {
  // accept itself
  module.hot.accept();
}
