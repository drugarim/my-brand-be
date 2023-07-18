import { uploadFile } from "../helpers/fileUpload";
import { ProjectService } from "../services";

export class ProjectController {

    static async createProject(req, res, next) {
        try {
            const image = await uploadFile(req.file)
            const createdProject = await ProjectService.createProject({ ...req.body, image })
            res.status(201).json(createdProject)
        } catch (error) {
            next(error);
        }
    }
    static async readAllProject(req, res, next){
        try{
            const projects = await ProjectService.readAllProject()
            res.status(200).json([...projects])
        }catch(error){
            next(error)
        }
    }
}