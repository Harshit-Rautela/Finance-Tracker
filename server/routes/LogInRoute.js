import express from 'express'
import { User } from "../models/UserModel.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/LogIn',async(req,res)=>{
    const {email,password} = req.body;
    try {
        let user = await User.findOne({email});
        if(!user){
            res.status(400).json('User not found');
        }
        const IsAuthenticated = await bcrypt.compare(password,user.passwordHash);
        if(!IsAuthenticated){
            res.status(500).json('User is not authenticated');
        }

        const payload = {userId:user.id};
         const token = jwt.sign(payload, 'your_jwt_secret',{expiresIn:'1h'});
        res.status(200).json({token})
    } catch (error) {
        console.error('The LoginRouter error is:', error.message);
        res.status(500).json('Server Error')
        
    }
})



export default router;