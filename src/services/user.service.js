import { User } from "../models";
import {hash} from "../utils/bcrypt.functions"

export class UserServices {
    
    static async createUser(data) {
        
        const user = new User({
            ...data, password: hash(data.password)
        });
        
        return await user.save()
    }

    static async readAllUsers(){
        return await User.find({is_active: true,is_deleted: false}).select('-password')
    }
}