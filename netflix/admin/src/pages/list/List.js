import "./list.css"
import { Link, useParams } from 'react-router-dom'
import PublishIcon from "@mui/icons-material/Publish"
import { ListContext }  from "../../context/listContext/ListContext";
import { useContext } from "react";

const List = () => {
	let { listId } = useParams();
	const { lists } = useContext(ListContext);
	const list  = lists.find((item)=>item._id === listId);
	return (
	    <div className="product">
	      <div className="productTitleContainer">
	        <h1 className="productTitle">List</h1>
	        <Link to="/dashboard/newList">
	          <button className="productAddButton">Create</button>
	        </Link>
	      </div>
	      <div className="productTop">
	          <div className="productTopRight">
	              <div className="productInfoTop">
	                  <span className="productName">{list.title}</span>
	              </div>
	              <div className="productInfoBottom">
	                  <div className="productInfoItem">
	                      <span className="productInfoKey">id:</span>
	                      <span className="productInfoValue">{list._id}</span>
	                  </div>
	                  <div className="productInfoItem">
	                      <span className="productInfoKey">genre:</span>
	                      <span className="productInfoValue">{list.genre}</span>
	                  </div>
	                  <div className="productInfoItem">
	                      <span className="productInfoKey">type:</span>
	                      <span className="productInfoValue">{list.type}</span>
	                  </div>
	              </div>
	          </div>
	      </div>
	      <div className="productBottom">
	          <form className="productForm">
	              <div className="productFormLeft">
	                  	<label>List Title</label>
		              	<input type="text" placeholder={list.title} />
		              	<label>Type</label>
		              	<input type="text" placeholder={list.type} />
		              	<label>Genre</label>
		              	<input type="text" placeholder={list.genre} />
	              </div>
	              <div className="productFormRight">
	                  <button className="productButton">Update</button>
	              </div>
	          </form>
	      </div>
	    </div>
	);
}

export default List