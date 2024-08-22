import jwt from 'jsonwebtoken';

const auth = (req,res,next)=>{
    const token =req.header('x-auth-token');
    if(!token){
        res.status(401).json({message:'No token is present'})
    }
    try {
        const decoded = jwt.verify(token,'your_jwt_secret');
        req.user = decoded.userId;

       next();      
    } catch (error) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
}

export default auth;