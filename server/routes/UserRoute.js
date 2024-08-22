import express from 'express';
import auth from '../middleware/Auth.js';
import { User } from "../models/UserModel.js";

const router = express.Router();

router.get('/',auth,async(req,res)=>{
    try {
        const user = await User.findById(req.user);
        res.status(200).json({ name: user.name, email: user.email })        
    } catch (error) {
        res.status(500).json({message:'User not found'})       
    }
})



export default router;