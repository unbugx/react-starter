import express from 'express';
import example from 'server/middleware/api/example';

const router = express.Router();

router.use('/example', example);

export default router;
