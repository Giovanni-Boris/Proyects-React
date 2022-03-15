const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const morgan = require("morgan");
const path = require("path");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")

dotenv.config();
app.use(express.json());
app.use(morgan("common"));
app.use("/images", express.static(path.join(__dirname,"/images")))

mongoose.connect(process.env.MONGO_URL,{
	useNewUrlParser: true, 
 	useUnifiedTopology: true,
})
	.then(console.log("Connected to BD"))
	.catch((err) => console.log(err));

//IMG
const storage = multer.diskStorage({
	destination:(req,file,cb)=>{
		cb(null,"images")
	},
	filename:(req,file,cb)=>{
		cb(null,req.body.name)
	}
})

const upload = multer({storage})
app.post("/api/upload", upload.single("file"),(req,res)=>{
	res.status(200).json("File has been uploaded")
})
//Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
app.listen("5000", ()=>{
	console.log("Backend is running.");
})