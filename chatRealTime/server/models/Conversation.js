const mongoose = require("mongoose");

const ConversationSchema = mongoose.Schema(
	{
		menber:{
			type: Array,
		},
	},
	{ timestamps: true}
); 
module.exports = mongoose.model("Conversation",ConversationSchema);