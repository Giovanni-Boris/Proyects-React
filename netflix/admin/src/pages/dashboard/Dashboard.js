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
import ListList from "../listList/ListList";
import List from "../list/List";
import NewList from "../newList/NewList";
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
	              <Route path="/movies" element={<ProductList/>}/>
	              <Route path="/product/:movieId" element={<Product/>}/>
	              <Route path="/newproduct" element={<NewProduct/>}/>
	              <Route path="/lists" element={<ListList/>}/>
	              <Route path="/list/:listId" element={<List/>}/>
	              <Route path="/newList" element={<NewList/>}/>
              </Routes>  
            </div>
        </>
	)
}

export default Dashboard