import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    // id: {
    //     type: Number,
    //     required: true
    // },
    first: {
        type: String,
        required: true
    },
    last: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    dob: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    
    
})

const userModel = mongoose.model("userModel",userSchema)
export default userModel
