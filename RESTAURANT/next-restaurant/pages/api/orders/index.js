import dbConnect from "../../../util/mongo";
import Order from "../../../models/Order";


const handler = async (req, res) => {
	const { method, query: {id} } = req;

  	await dbConnect();

	if(method === "GET"){
		try{
			const orders = await Order.find();
			res.status(201).status(orders);
		}catch(err){
			res.status(500).json(err);
		}
	}
	if(method === "POST"){
		try{
			const order = await Order.create(req.body);
			res.status(201).status(order);
		}catch(err){
			res.status(500).json(err);
		}
	}
}

export default handler;