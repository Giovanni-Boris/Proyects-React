const router = require("express").Router();
const User = require("../models/User");
const CryptoJS  = require("crypto-js");
const jwt = require("jsonwebtoken");
//REGISTER 
router.post("/register", async(req,res)=>{
	const newUser = new User({
		username: req.body.username,
		email: req.body.email,
		password: CryptoJS.AES.encrypt(
			req.body.password, 
			process.env.SECRET_KEY
		).toString()
	});
	try{
		const user = await newUser.save();
		res.status(201).json(user);
	}catch(err){
		res.status(500).json(err);
	}
});

//LOGIN
router.post("/login", async(req,res)=>{
	try{
		const user = await User.findOne({ email: req.body.email });
		if(!user) return res.status(404).json("Wrong credentials!");
		const hashedPassword = CryptoJS.AES.decrypt(
			user.password, 
			process.env.SECRET_KEY
		);
		const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
		if(OriginalPassword !== req.body.password) 
			return res.status(401).json("Wrong credentials!")

		const accessToken = jwt.sign(
			{id: user._id, isAdmin: user.isAdmin}, 
			process.env.SECRET_KEY ,
			{ expiresIn: "5d"}
		);

		const {password, ...others} = user._doc;

		res.status(200).json({...others, accessToken});

	}catch(err){
		console.log(err)
		res.status(500).json(err);
	}
})

module.exports = router;