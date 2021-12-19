/* eslint-disable no-console */
// libs
import path from 'path'
import express, { Express } from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import expressRequestId from 'express-request-id'

// utils
import { getBasePath } from 'utils/core'
import 'server/helpers/env'

// middleware
import handleServerRendering from './helpers/handleServerRendering'

const isDev = process.env.NODE_ENV !== 'production'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const devApiRouter = isDev ? require('server/middleware/api').default : null
// eslint-disable-next-line @typescript-eslint/no-var-requires
const proxyApiRouter = require('./middleware/proxy').default

const apiRouter = process.env.APP_API_PROXY ? proxyApiRouter : devApiRouter

const PORT = Number(process.env.APP_PORT) || 3030
const addRequestId = expressRequestId()

const app: Express = express()

// for cookie parser & sessions
const secret = 'HI&^Wugks-2'

// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.navigator.userAgent = global.navigator.userAgent || 'all'

// It's a security best practice to disable x-powered-by header
app.disable('x-powered-by')

app.use(
  `${getBasePath()}/assets`,
  express.static(path.join(__dirname, 'public'), { index: false, redirect: false }),
)
app.use(cookieParser(secret))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(addRequestId)

if (apiRouter) {
  app.use(`${getBasePath()}/api`, apiRouter)
}

// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', handleServerRendering)

app.use(() => {
  console.log('handle error here')
})

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}${getBasePath()}/`)
})
