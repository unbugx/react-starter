/* eslint-disable no-console */
import express from 'express'
import request from 'request'

// utils
import { getPath } from 'utils/core'

const router = express.Router()
const proxy = process.env.APP_API_PROXY

if (proxy) {
  console.log(`==== All requests will be redirected to ${proxy} ====`)
}

router.use('/', (req, res) => {
  request(
    {
      url: getPath(`${proxy}${req.baseUrl}${req.url}`),
      strictSSL: false,
      headers: {
        authorization: req.headers.authorization,
        accept: req.headers.accept,
      },
      method: req.method,
      body: req.body,
      json: true,
    },
    (error, response, body) => {
      console.log('==== PROXY REQUEST START ====')
      console.log('URL: ', `'${getPath(`${proxy}${req.baseUrl}${req.url}`)}'`)
      console.log('Error: ', error)
      console.log('Response: ', response.headers)
      console.log('Body: ', body)
      console.log('==== PROXY REQUEST END ====')
    },
  ).pipe(res)
})

export default router
