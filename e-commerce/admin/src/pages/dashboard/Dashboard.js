import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./dashboard.css";
import Home from "../home/Home";
import UserList from "../userList/UserList";
import User from "../user/User";
import NewUser from "../newUser/NewUser";
import ProductList from "../productList/ProductList";
import Product from "../product/Product";
import NewProduct from "../newProduct/NewProduct";

import {
	Routes,
	Route, 
} from "react-router-dom";
const Dashboard = () => {
	return (
		<>
			<Topbar/>
        	<div className="container">
              <Sidebar/> 
              <Routes>   
	              <Route path='/' element={<Home/>}/>
	              <Route path="/users" element={<UserList/>}/>
	              <Route path="/user/:userId" element={<User/>}/>
	              <Route path="/newUser" element={<NewUser/>}/>
	              <Route path="/products" element={<ProductList/>}/>
	              <Route path="/product/:productsId" element={<Product/>}/>
	              <Route path="/newproduct" element={<NewProduct/>}/>
              </Routes>  
            </div>
        </>
	)
}

export default Dashboard