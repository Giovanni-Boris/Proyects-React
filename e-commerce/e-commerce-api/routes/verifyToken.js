const jwt = require("jsonwebtoken")


const verifyToken = (req,res,next)=>{
	const authHeader = req.headers.token;
	if(authHeader){
		const token = authHeader.split(' ')[1];
		//console.log("tokjen",token)
		jwt.verify(token, process.env.JWT_SEC,(err,user)=>{
			if(err) return res.status(401).json("Token is not valited!");
			//console.log(user);
			req.user = user; 
			next();
		})
	}else{
		return res.status(401).json("You are not authenticated!");
	}
}
//to performance and not repeat this code
const verifyTokenAndAuthorization = (req,res,next)=>{
	verifyToken(req,res,()=>{
		if(req.user.id === req.params.id || req.user.isAdmin){
			next();
		} else{
			res.status(401).json("You are not allowed to do that!")
		}
	})
}
const verifyTokenAndAdmin = (req,res,next)=>{
	verifyToken(req,res,()=>{
		if(req.user.isAdmin){
			next();
		} else{
			res.status(401).json("You are not allowed to do that!")
		}
	})
}


module.exports = {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin };









