import * as React from 'react';
import ReactDOM from 'react-dom';
import UniversalRouter from 'universal-router';
import store from 'redux/store/clientStore';
import history from 'core/history';
import routes from 'routes';

// components
import { App } from 'components/App/App';

// styles
import './global.css';

const container = document.getElementById('app');

const insertCss = (...styles: any) => {
  const removeCss = styles.map((style: any) => style._insertCss());
  return () => removeCss.forEach((dispose: any) => dispose());
};

const router = new UniversalRouter(routes);

async function render(location: Location) {
  const routeComponent = await router.resolve(location);
  ReactDOM.hydrate(React.createElement(App, { store, insertCss }, routeComponent), container);
}

function main() {
  if (!history) {
    return;
  }

  // Listening for the history changes to the current location
  history.listen(render);

  // Initial Rendering for the initial location
  render(history.location);
}

main();

// check if HMR is enabled
if (module.hot) {
  // accept itself
  module.hot.accept();
}
