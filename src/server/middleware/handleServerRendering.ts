import React from 'react';
import ReactDOM from 'react-dom/server';
import { NextFunction, Request, Response } from 'express';
import { Html } from 'components/Html/Html';
import { IHtmlProps } from 'components/Html/types';
import { App } from 'components/App/App';
import configureStore from 'redux/store/configureStore';

export default function handleServerRendering(req: Request, res: Response, next: NextFunction) {
  const store = configureStore();

  // CSS for all rendered React components
  const css = new Set();
  const insertCss = (...styles: any) => styles.forEach((style: any) => css.add(style._getCss()));

  const data: IHtmlProps = {
    children: ReactDOM.renderToString(React.createElement(App, { store, insertCss })),
    state: store.getState(),
    style: [...css].join(''),
  };

  const html = ReactDOM.renderToStaticMarkup(React.createElement(Html, data));

  res.status(200);
  res.send(`<!doctype html>${html}`);
}
