/* eslint-disable no-console */
// libs
import express, { Express } from 'express'
import proxy from 'express-http-proxy'
import webpack, { Compiler } from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from './webpack.config'
import runServer from './runServer'
import copy from './copy'
import clean from './clean'

// utils
import { getBasePath } from '../src/core/utils'
import '../src/core/env'

const PORT = Number(process.env.APP_PORT) || 3030

const watchOptions = {
  aggregateTimeout: 200,
  poll: 1000,
}

let server: Express

async function compilerPromise(compiler: Compiler, cb?: () => Promise<unknown>) {
  await new Promise<void>((resolve) => {
    const handleBundleComplete = async () => {
      if (cb) {
        await cb()
      }
      resolve()
    }

    compiler.hooks.done.tap(compiler.name || 'custom_compiler', handleBundleComplete)
  })
}

async function start() {
  if (server) return server

  await clean()
  await copy()

  server = express()

  const clientConfig = webpackConfig.find((config) => config.name === 'client')
  clientConfig.entry.client = ['webpack-hot-middleware/client?overlay=false'].concat(clientConfig.entry.client)

  const multiCompiler = webpack(webpackConfig)

  const clientCompiler = multiCompiler.compilers.find((compiler) => compiler.name === 'client') as Compiler
  const serverCompiler = multiCompiler.compilers.find((compiler) => compiler.name === 'server') as Compiler

  const clientPromise = compilerPromise(clientCompiler)
  const serverPromise = compilerPromise(serverCompiler, runServer)

  server.use(
    webpackDevMiddleware(clientCompiler, {
      publicPath: `${getBasePath()}/${clientConfig.output.publicPath}`,
    }),
  )

  server.use(webpackHotMiddleware(clientCompiler))

  serverCompiler.watch(watchOptions, (error, stats) => {
    if (error) {
      console.error('Compile error:', error)
      return
    }

    if (stats) {
      console.log(stats.toString({
        chunks: false,
        colors: true,
      }))
    }
  })

  await clientPromise
  await serverPromise

  server.get('*', (req: any, res: any, next: any) => {
    const requestedUrl = `${req.protocol}://${req.hostname}:${PORT}${req.path}`
    proxy(requestedUrl)(req, res, next)
  })

  server.post('*', (req: any, res: any, next: any) => {
    const requestedUrl = `${req.protocol}://${req.hostname}:${PORT}${req.path}`
    proxy(requestedUrl)(req, res, next)
  })

  server.use(() => {
    console.log('handle error here')
  })

  server.listen(PORT + 1, () => {
    console.log(`The server is running at http://localhost:${PORT + 1}${getBasePath()}/`)
  })
}

start()
