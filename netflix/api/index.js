const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
dotenv.config();

const option = { useNewUrlParser: true, useUnifiedTopology: true}
mongoose.connect(process.env.MONGO_URL,option)
	.then(()=> console.log('Base de datos conectada'))
	.catch(error => console.log('Error db: ', error))


 
//midlewares
app.use(morgan("common"));
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movie", movieRoute);
app.listen(8800, ()=>{
	console.log("Backend server is running!");
})