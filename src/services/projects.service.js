import { Project } from "../models";

export class ProjectService {
    
    static async createProject(data){
        const project = new Project({...data})
        return await project.save()
    }
    static async readAllProject(data){
        return await Project.find({is_visible: true, is_deleted: false})
    }
}