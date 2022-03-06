const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
	{
		userId:{
			type:String,
			required:true
		},
		desc:{
			type:String,
			max:500
		},
		img:{
			type:Strig
		},
		likes:{
			types:Array,
			default:[]
		}
	},
	{ timestamps: true}
); 
module.exports = mongoose.model("Post",PostSchema);





