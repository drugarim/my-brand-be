import express from "express";

import userRoutes from './user.routes'
import projectRoutes from './project.routes'

const router = express.Router()

router.use('/users', userRoutes)
router.use('/projects', projectRoutes)

export default router
