

import userModel from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from '../config/config.js'

 async function register(req, res){

    const{username, email, password} = req.body

    const userAlreadyExit = await userModel.findOne({
        $or: [
            {username}, {email}
        ]
    })
        
    if(userAlreadyExit){
        return res.status(409).json({
            message: "You are already registered go back to login"
        })
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username,
        email,
        password: hashPassword
    })

     const token = jwt.sign(
        {id: user._id},
        config.JWTSERECT_KEY,
        {expiresIn: '1d'}
         )

         req.cookie = token

         res.status(201).json(
            {
                message: "User are registered successfully",
                user:{
                    user : user.username,
                    email: user.email
                },
                token
            }
         )
}


export default {register};