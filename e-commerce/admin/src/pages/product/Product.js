import "./product.css"
import { Link, useParams } from 'react-router-dom'
import Chart from "../../components/chart/Chart";
import {productData} from "../../dummyData";
import PublishIcon from "@mui/icons-material/Publish"
import { useSelector } from "react-redux";
import { useEffect, useState,useMemo } from "react"; 
import { userRequest } from "../../requestMethods";
const Product = () => {
	let {productId} = useParams();
	const [pStats, setPStats] = useState([])
	const product = useSelector((state) =>
		state.product.products.find((item)=> item._id === productId)
	);

	const MONTHS = useMemo(
	    () => [
	      "Jan",
	      "Feb",
	      "Mar",
	      "Apr",
	      "May",
	      "Jun",
	      "Jul",
	      "Agu",
	      "Sep",
	      "Oct",
	      "Nov",
	      "Dec",
	    ],
	    []
	);
	useEffect(() => {
	    const getStats = async () => {
	      try {
	        const res = await userRequest.get("orders/income?pid=" + productId);
	        console.log(res.data)
	        const list = res.data.sort((a,b)=>{
	            return a._id - b._id
	        })
	        list.map((item) =>
	          setPStats((prev) => [
	            ...prev,
	            { name: MONTHS[item._id - 1], Sales: item.total },
	          ])
	        );
	      } catch (err) {
	        console.log(err);
	      }
	    };
	    getStats();
	  }, [productId, MONTHS]);
	return (
		<div className="product">
			<div className="productTitleContainer">
				<h1 className="productTitle">Product</h1>
				<Link to="/dashboard/newproduct">
					<button className="productAddButton">Create</button>
				</Link>
			</div>
			<div className="productTop">
				<div className="productTopLeft">
					<Chart data={pStats} dataKey="Sales" title="Sales Performance"/>
				</div>
				<div className="productTopRight">
					<div className="productInfoTop">
						<img src={product.img} alt="" className="productInfoImg" />
                  		<span className="productName">{product.title}</span>
					</div>
					<div className="productInfoBottom">
						<div className="productInfoItem">
							<span className="productInfoKey">id:</span>
							<span className="productInfoValue">{product._id}</span>
						</div>
						<div className="productInfoItem">
							<span className="productInfoKey">sales:</span>
							<span className="productInfoValue">$123</span>
						</div>
						<div className="productInfoItem">
							<span className="productInfoKey">in stock</span>
							<span className="productInfoValue">{product.inStock}</span>
						</div>
					</div>
				</div>
			</div>
			<div className="productBottom">
				<form className="productForm">
					<div className="productFormLeft">
						<label>Product Name</label>
						<input type="text" placeholder={product.title}/>
						<label>Product Description</label>
						<input type="text" placeholder={product.desc}/>
						<label>Price</label>
						<input type="text" placeholder={product.price}/>
						<label>In Stock</label>
						<select name="inStock" id="idStock">
							<option value="true">Yes</option>
							<option value="false">No</option>
						</select>
					</div>
					<div className="productFormRight">
						<div className="productUpload">
						    <img src={product.img} alt="" className="productUploadImg" />
						    <label htmlFor="file">
						    	<PublishIcon/>
						    </label>
						    <input type="file" id="file" style={{display: "none"}}/>
						</div>
						<button className="porductButton">Update</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Product