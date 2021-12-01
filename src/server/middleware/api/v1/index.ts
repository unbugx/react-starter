import express from 'express'
import users from 'server/middleware/api/v1/users'

const router = express.Router()

router.use('/users', users)

export { router as v1Router }
