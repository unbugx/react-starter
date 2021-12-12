import express from 'express'

// utils
import { doDelay } from 'utils/core'

// fixtures
import { usersFixture } from 'server/middleware/api/v1/data/users.fixture'

const router = express.Router()

router.get('/', async (req, res) => {
  await doDelay(500)

  res.status(200).json(usersFixture)
})

export default router
