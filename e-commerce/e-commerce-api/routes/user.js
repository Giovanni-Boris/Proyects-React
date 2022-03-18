const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");
const router = require("express").Router();

router.put("/:id",verifyTokenAndAuthorization ,async(req,res)=>{
	if(req.user.id === req.params.id){

	}
});

module.exports = router;