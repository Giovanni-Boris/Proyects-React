const jwt = require("jsonwebtoken")


const verifyToken = (req,res,next)=>{
	const authHeader = req.header.token;
	if(authHeader){
		jwt.verify(token, process.env.JWT_SEC,(err,data)=>{
			if(err) return res.status(401).json("Token is not valited!");
			console.log(user);
			req.user = user; 
			next();
		})
	}else{
		return res.status(401).json("You are not authenticated!");
	}
}
//to performance and not repet this code
const verifyTokenAndAuthorization = (req,res,next)=>{
	verifyToken(req,res,()=>{
		if(req.user.id === req.params.id || req.user.isAdmin){
			next();
		} else{
			res.status(401).json("You are not allowed to do that!")
		}
	})
}

module.exports = {verifyToken, verifyTokenAndAuthorization };