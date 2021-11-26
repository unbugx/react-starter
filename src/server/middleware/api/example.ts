import express from 'express'

// utils
import { doDelay } from 'utils/core'

const router = express.Router()

router.get('/some-data/', async (req, res) => {
  await doDelay(10)

  res.status(200).json({
    someData: 'example',
  })
})

export default router
