import React from 'react';
import ReactDOM from 'react-dom/server';
import { NextFunction, Request, Response } from 'express';
import UniversalRouter from 'universal-router';
import routes from 'routes';
import 'core/env';
import { getBasePath, getPath } from 'core/utils';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';

// @ts-ignore
import assets from './assets'; // eslint-disable-line import/extensions,import/no-unresolved

// components
import { Html } from 'components/Html/Html';
import { IHtmlProps } from 'components/Html/types';
import { App } from 'components/App/App';

// store
import configureStore from 'redux/store/configureStore';

// constants
import { QUERY_CLIENT_CONFIG } from 'constants/index';

const router = new UniversalRouter(routes, {
  baseUrl: getBasePath(),
});

export default async function handleServerRendering(req: Request, res: Response, next: NextFunction) {
  const store = configureStore();

  try {
    // CSS for all rendered React components
    const css = new Set();
    const insertCss = (...styles: any) => styles.forEach((style: any) => css.add(style._getCss()));

    const { component: route } = await router.resolve({
      pathname: `${getBasePath()}${getPath(req.path)}`,
    });

    const queryClient = new QueryClient(QUERY_CLIENT_CONFIG);
    // you can place here any prefetch. Query with the same key on client side will not be requested repeatedly
    // await queryClient.prefetchQuery('example', getExample);
    const dehydratedState = dehydrate(queryClient);

    const data: IHtmlProps = {
      children: ReactDOM.renderToString(
        React.createElement(App, { store, insertCss, dehydratedState, queryClient }, route.component),
      ),
      state: store.getState(),
      style: [...css].join(''),
      env: {
        APP_BASE_PATH: process.env.APP_BASE_PATH || '',
      },
      dehydratedState,
      scripts: Object.keys(assets)
        .reduce((arr, key) => arr.concat(assets[key].js), []),
    };

    const html = ReactDOM.renderToStaticMarkup(React.createElement(Html, data));

    res.status(route.status || 200);
    res.send(`<!doctype html>${html}`);
  } catch (error) {
    next(error);
  }
}
