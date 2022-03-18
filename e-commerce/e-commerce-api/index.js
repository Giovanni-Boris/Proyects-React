const express= require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user')
const authRoute = require("./routes/auth");
dotenv.config();

const option = { useNewUrlParser: true, useUnifiedTopology: true}

mongoose.connect(process.env.MONGO_URL,option)
	.then(()=> console.log('Base de datos conectada'))
	.catch(error => console.log('Error db: ', error))

app.use(express.json())
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);


app.listen(process.env.PORT || 5000, () =>{
	console.log("Backend server is running");
});

