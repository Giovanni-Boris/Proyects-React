const express= require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user')
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const morgan = require("morgan");
const cors = require("cors");
dotenv.config();
//console.log(process.env.STRIPE_KEY)
const option = { useNewUrlParser: true, useUnifiedTopology: true}
mongoose.connect(process.env.MONGO_URL,option)
	.then(()=> console.log('Base de datos conectada'))
	.catch(error => console.log('Error db: ', error))

//midleware
// cors 
const  corsOption = {
	origin: '#',
	optionsSuccessStatus:200
}
app.use(cors({corsOption}))
app.use(express.json());
app.use(morgan("common"));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);


app.listen(process.env.PORT || 5000, () =>{
	console.log("Backend server is running");
});

