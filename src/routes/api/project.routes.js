import express from "express";
import { ProjectController } from "../../controllers";
import upload from "../../helpers/multer";

const router = express.Router()

router.post('/', upload.single('image'), ProjectController.createProject)
router.get('/', ProjectController.readAllProject)


export default router
