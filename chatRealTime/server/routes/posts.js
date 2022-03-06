const router = require("express").Router();
const Post = require("../models/Post");

//create a post
router.post("/", async(req,res)=>{
	const newPost = new Post(req.body)
	try{
		const savePost = await newPost.save();
		res.status(200).json(savePost);

	}catch(err){
		res.status(500).json(err);
	}
});
//update a post

router.put("/:id", async(req,res)=>{
	try{
		const post = await Post.findById(req.params.id);
		if(post.userId === req.body.userId){
			await post.updateOne({$set:req.body})
			res.status(200).json({message:"your post has been updated"});
		}else{
			res.status(403).json({message:"you can update only your post"});
		}
	}catch(err){
		res.status(500).json(err);
	}
})
//like a post

router.delete("/:id", async(req,res)=>{
	try{
		const post = await Post.findById(req.params.id);
		if(post.userId === req.body.userId){
			await post.deleteOne()
			res.status(200).json({message:"the post has been deleted"});
		} else {
			res.status(403).json({message:"you can delete only your post"});
		}
	}catch(err){
		res.status(500).json(err);
	}
})

//get a post


//get timeline posts


module.exports = router;