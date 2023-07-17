import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import routes from './routes'
import mongoose from 'mongoose'


const app = express()

const port = process.env.PORT || 3000
const mode = process.env.NODE_ENV || 'development'



const server = async () => {

    try {

        if (mode == 'development'){
            mongoose.connect(process.env.DATABESE_URL_DEV, { useNewUrlParse: true})
            console.log("Connecting to database (Development)");
        }

        if (mode == 'production'){
            mongoose.connect(process.env.DATABESE_URL_DEV, { useNewUrlParse: true})
            console.log("Connecting to database (Production)"); 
        }

        app.use(express.json());
        app.use(cors());
        app.use(morgan("dev"));

        app.get('/', (req, res) => {
            res.status(200).json({
                message: "My brand api!!!"
            })
        })

        app.use('/api', routes)

        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    }
    catch (error) {
        console.log(error);
    }
}

export default server