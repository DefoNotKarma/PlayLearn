import mongoose from "mongoose"
import { Schema } from "mongoose"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

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
    },
    refreshToken : {
        type : String
    }
}, {timestamps : true})


UserSchema.pre("save" , async function(next) {
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10)
        next()
    }
})

UserSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

UserSchema.methods.generateAccessTokens = function(){
    jwt.sign(
        {
            _id : this._id,
            username : this.username,
            email : this.email,
            fullname : this.fullname
        },
        process.env.ACCESS_TOKEN,
        {
            expiresIn : ACCESS_TOKEN_EXPIRY
        }
)
}


export const User = mongoose.model("User", UserSchema)