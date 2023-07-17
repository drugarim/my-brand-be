import mongoose from 'mongoose'

const schema = mongoose.Schema ({
    name: {
        type: String, required: true
    },
    email: {
        type: String, required: true, unique: true
    },
    password: {
        type: String, required: true
    },
    role: {
        type: String, required: true, enum: ['ADMIN', 'OTHER'],
        default: "OTHER"
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    is_active: {
        type: Boolean, required: true, default: true
    },
    is_delete: {
        type: Boolean, required: true, default: false
    }
})

export const User = mongoose.model('User', schema)