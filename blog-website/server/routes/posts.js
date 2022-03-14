const router = require("express").Router();
const Post = require("../models/Post");
const bcrypt  = require("bcrypt");

//CREATE POST
router.post ("/",async(req,res)=>{
	const newPost = new Post(req.body);
	try{
		const savePost = await newPost.save();
		res.status(200).json(savePost);
	}catch(err){
		res.status(500).json(err);
	}
})
//UPDATE POST
router.put("/:id", async(req,res)=>{
	try{
		const post = await Post.findById(req.params.id);
		if (post.username === req.body.username){
			try{
				const updatePost = await Post.findByIdAndUpdate(req.params.id,{
					$set:req.body
				},{ new:true })
				res.status(200).json(updatePost);
			}catch(err){
				res.status(500).json(err);
			}
		} else {
			res.status(401).json("You can update only your posts")
		}
	}catch(err){
		res.status(500).json(err);
	}
})
//DELETE POST
router.delete("/:id", async(req,res)=>{
	try{
		const post = await Post.findById(req.params.id);
		if (post.username === req.body.username){
			try{
				await post.delete()
				res.status(200).json("Post has been deleted....");
			}catch(err){
				res.status(500).json(err);
			}
		} else {
			res.status(401).json("You can delete only your posts")
		}
	}catch(err){
		res.status(500).json(err);
	}
})

//GET POST
router.get("/:id", async(req,res)=>{
	try{
		const post = await Post.findById(req.params.id);
		res.status(200).json(post);
	} catch(err){
		res.status(500).json(err);
	}
})
module.exports = router;