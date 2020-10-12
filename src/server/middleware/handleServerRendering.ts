import React from 'react';
import ReactDOM from 'react-dom/server';
import { Request, Response } from 'express';
import UniversalRouter from 'universal-router';
import routes from 'routes';

// components
import { Html } from 'components/Html/Html';
import { IHtmlProps } from 'components/Html/types';
import { App } from 'components/App/App';

// store
import configureStore from 'redux/store/configureStore';

const router = new UniversalRouter(routes);

export default async function handleServerRendering(req: Request, res: Response) {
  const store = configureStore();

  // CSS for all rendered React components
  const css = new Set();
  const insertCss = (...styles: any) => styles.forEach((style: any) => css.add(style._getCss()));

  const routeComponent = await router.resolve({
    pathname: req.path,
  });

  const data: IHtmlProps = {
    children: ReactDOM.renderToString(React.createElement(App, { store, insertCss }, routeComponent)),
    state: store.getState(),
    style: [...css].join(''),
  };

  const html = ReactDOM.renderToStaticMarkup(React.createElement(Html, data));

  res.status(200);
  res.send(`<!doctype html>${html}`);
}
