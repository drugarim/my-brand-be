import express from "express";
import { UserController } from "../../controllers";

const router = express.Router()

router.post('/', UserController.createUser)
router.get('/', UserController.readAllUsers)


export default router
