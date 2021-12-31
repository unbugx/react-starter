import React from 'react'
import * as ReactDOM from 'react-dom/server'
import { NextFunction, Request, Response } from 'express'
import UniversalRouter from 'universal-router'
import routes from 'routes'
import path from 'path'
import stripCssComments from 'strip-css-comments'
// @ts-ignore
import purify from 'purify-css'

// utils
import 'server/helpers/env'
import { getBasePath, getPath } from 'utils/core'

// @ts-ignore
import assets from './assets' // eslint-disable-line import/extensions,import/no-unresolved

// components
import { Html } from 'components/app/Html'
import { App } from 'components/app/App'

// store
import configureStore from 'store/configureStore'

// types
import type { HtmlProps } from 'components/app/Html/Html.types'

const router = new UniversalRouter(routes, {
  baseUrl: getBasePath(),
})

const getCriticalCss = (html: string) => {
  const criticalCss = purify(html, [path.resolve(__dirname, './public/*.css')], { minify: true })
  return stripCssComments(criticalCss, { preserve: false })
}

export default async function handleServerRendering(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const store = configureStore()

  try {
    const { component: route } = await router.resolve({
      pathname: `${getBasePath()}${getPath(req.path)}`,
    })

    const data: HtmlProps = {
      children: ReactDOM.renderToString(React.createElement(App, { store }, route.component)),
      state: store.getState(),
      style: '',
      env: {
        APP_BASE_PATH: process.env.APP_BASE_PATH || '',
      },
      css: Object.keys(assets).reduce((arr, key) => {
        if (!['client', 'runtime', ''].includes(key)) {
          return arr
        }
        return arr.concat(assets[key].css)
      }, []),
      scripts: Object.keys(assets).reduce((arr, key) => {
        if (!['client', 'runtime', ''].includes(key)) {
          return arr
        }
        return arr.concat(assets[key].js)
      }, []),
    }

    const html = ReactDOM.renderToString(React.createElement(Html, data))
    const criticalCss = getCriticalCss(html)
    res.status(route.status || 200)
    res.send(
      `<!doctype html>${html.replace('</head>', `<style id="css">${criticalCss}</style></head>`)}`,
    )
  } catch (error) {
    next(error)
  }
}
