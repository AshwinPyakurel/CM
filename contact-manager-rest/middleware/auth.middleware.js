import jwt from "jsonwebtoken";

export const authenticate = (req,res,next) =>{      
    const authHeader = req.headers.authorization;    
    if(!authHeader){
        console.log('error');
        res.status(401).send({message:"No Authorized token",});
    }
    const token = authHeader.split(' ')[1];         
    let decodedToken;
    try{
        decodedToken = jwt.verify(token,process.env.MY_SECRET_KEY,);             
        res.locals.user = decodedToken.userID;        
        next();
    }catch(err){
        console.log(err);
        res.status(401).json({message:"Invalid Token"});
    }
    
    if(!decodedToken){
        res.status(401).json({message:"No authorized token passed"});
    }
}


