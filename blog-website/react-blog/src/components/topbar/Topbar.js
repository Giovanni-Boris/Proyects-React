import "./topbar.css"
import { Link } from 'react-router-dom'
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import {TYPES} from "../../actions/authActions";
const Topbar = () => {
	const { user, dispatch } = useContext(AuthContext);
	const handleLogout = () =>{
		dispatch({ type: TYPES.LOGOUT});
	}
	return (
		<div className="top">
			<div className="topLeft">
				<i className="topIcon fab fa-facebook-square"></i>
		    	<i className="topIcon fab fa-instagram-square"></i>
       			<i className="topIcon fab fa-pinterest-square"></i>
       			<i className="topIcon fab fa-twitter-square"></i>
			</div>
			<div className="topCenter">
				<ul className="topList">
					<li className="topListItem">
						<Link className="link" to="/">HOME</Link>
					</li>
					<li className="topListItem">
						<Link className="link" to="/">ABOUT</Link>
					</li>
					<li className="topListItem">
						<Link className="link" to="/">CONTAC</Link>
					</li>
					<li className="topListItem">
						<Link className="link" to="/write">WRITE</Link>
					</li>
					<li className="topListItem" onClick={handleLogout}>
						{ user && "LOGOUT"}
					</li>
				</ul> 
			</div>
			<div className="topRight">
				{
					user ? (
						<img
				 			className="topImg"
							src={user.profilePic}
         		  alt=""
						/>
					) : (
						<ul className="topList">
							<li className="topListItem">
								<Link className="link" to="/login">LOGIN</Link>
							</li>
							<li className="topListItem">
								<Link className="link" to="/register">REGISTER</Link>
							</li>
						</ul>
					)
				}			
				<i className="topSearchIcon fas fa-search"></i>
			</div>
		</div>
	)
}

export default Topbar
