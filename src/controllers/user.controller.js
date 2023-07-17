import { UserServices } from "../services";
import _ from 'lodash'


export class UserController{

    static async createUser(req, res, next){
        const createdUser = await UserServices.createUser(req.body)

        res.status(201).json({
            "message": `${createdUsser.email} is created successfully`
        })
    }

    static async readAllUsers(req, res, next){
        const users = await UserServices.readAllUsers()
        res.status(201).json([...users])
    } 

    
}
