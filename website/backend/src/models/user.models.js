import mongoose from "mongoose"
import { Schema } from "mongoose"

const UserSchema = new Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    fullname : {
        type : String,
        default : "User"
    },
    password : {
        type : String,
        required : [true, "Password is required"]
    },
    avatar : {
        type : String
    }
}, {timestamps : true})


export const User = mongoose.model("User", UserSchema)