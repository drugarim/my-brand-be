import mongoose from 'mongoose'

const schema = mongoose.Schema ({
    name: {
        type: String, required: true
    },
    description: {
        type: String, required: true
    },
    location:{
        type: String, required: true 
    },
    image:{
        type: String, required: true 
    },
    created_at:{
        type: Date, default: Date.now()
    },
    is_visible: {
        type: Boolean, required: true, default: true
    },
    is_deleted: {
        type: Boolean, required: true, default: false
    }
})

export const Project = mongoose.model('Project', schema)