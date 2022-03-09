const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet"); 
const morgan = require("morgan");
const multer = require("multer");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const path = require("path");
const app = express();
const cors = require('cors');
dotenv.config();

// cors 
var corsOption = {
	origin: '#',
	optionsSuccessStatus:200
}
app.use(cors({corsOption}))
const  uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.gyngb.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
const option = { useNewUrlParser: true, useUnifiedTopology: true}

//console.log(process.env.USER_NAME,process.env.DBNAME);

mongoose.connect(uri,option)
	.then(()=> console.log('Base de datos conectada'))
	.catch(error => console.log('Error db: ', error))

app.use("/images", express.static(path.join(__dirname, "public/images")));

//middleware
app.use(express.json())
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
	destination: (req, file, cb) =>{
		cb(null, "public/images");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	}
});

const upload = multer({storage});
app.post("/api/upload", upload.single("file"), (req,res)=>{
	try{
		console.log("hola")
		return res.status(200).json("File upload successfuly");
	} catch(err){
		console.log(err);
	}
})


//Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.listen(8800,()=>{
	console.log("Backend server is running in port 8800")
});