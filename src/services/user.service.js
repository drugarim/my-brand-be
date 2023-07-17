import { User } from "../models";
import hash from "../utils/bcrypt.functions"

export class UserServices {
    
    static async cereateUser(data) {
        
        const user = new User({
            ...data, password: hash(data.password)
        });
        
        return await user.save
    }

    static async readAllUsers(){
        return await User.find({is_active: true}).select('-password')
    }
}