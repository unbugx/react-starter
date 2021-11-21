import React from 'react'
import * as ReactDOM from 'react-dom/server'
import { NextFunction, Request, Response } from 'express'
import UniversalRouter from 'universal-router'
import routes from 'routes'

// utils
import 'core/env'
import { getBasePath, getPath } from 'core/utils'

// @ts-ignore
import assets from './assets' // eslint-disable-line import/extensions,import/no-unresolved

// components
import { Html } from 'components/Html'
import { App } from 'components/App'

// store
import configureStore from 'redux/store/configureStore'

// types
import type { HtmlProps } from 'components/Html/Html.types'

const router = new UniversalRouter(routes, {
  baseUrl: getBasePath(),
})

export default async function handleServerRendering(req: Request, res: Response, next: NextFunction) {
  const store = configureStore()

  try {
    const { component: route } = await router.resolve({
      pathname: `${getBasePath()}${getPath(req.path)}`,
    })

    const data: HtmlProps = {
      children: ReactDOM.renderToString(
        React.createElement(App, { store }, route.component),
      ),
      state: store.getState(),
      style: '',
      env: {
        APP_BASE_PATH: process.env.APP_BASE_PATH || '',
      },
      scripts: Object.keys(assets)
        .reduce((arr, key) => arr.concat(assets[key].js), []),
    }

    const html = ReactDOM.renderToStaticMarkup(React.createElement(Html, data))

    res.status(route.status || 200)
    res.send(`<!doctype html>${html}`)
  } catch (error) {
    next(error)
  }
}
