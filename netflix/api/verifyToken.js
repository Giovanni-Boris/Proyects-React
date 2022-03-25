const jwt = require("jsonwebtoken");

function verify(req,res,next) {
	const authHeader = req.headers.token;
	if(authHeader){
		console.log(authHeader.split(" "));
		const token = authHeader.split(" ")[2];
		jwt.verify(token, process.env.SECRET_KEY, (err,user)=>{
			if(err) return res.status(403).json("Token is not valited");
			req.user = user;
			next();
		});
	}else{
		return res.status(401).json("You are not authenticated");
	}
}


module.exports = verify;