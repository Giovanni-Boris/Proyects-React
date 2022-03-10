const router = require("express").Router();
const Conversation = require("../models/Conversation");

//new conv

router.post("/", async(req,res)=>{
	const newConversation =  new Conversation({
		members:[req.body.senrderId,req.body.recieverId]
	});
	try{
		const savedConversation = await newConversation.save();
		res.status(200).json(savedConversation);
	} catch(err){
		res.status(500).json(err);
	}
})

//get conv of a user

module.exports = router;