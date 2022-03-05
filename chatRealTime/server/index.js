const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet"); 
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

dotenv.config();

const  uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.gyngb.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
const option = { useNewUrlParser: true, useUnifiedTopology: true}

//console.log(process.env.USER_NAME,process.env.DBNAME);
mongoose.connect(uri,option)
	.then(()=> console.log('Base de datos conectada'))
	.catch(e => console.log('Error db: ', e))

//middleware
app.use(express.json())
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(8800,()=>{
	console.log("Backend server is running in port 8800")
});