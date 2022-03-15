import "./login.css"
import { Link } from 'react-router-dom'
import {useRef, useContext} from "react";
import AuthContext from "../../context/AuthContext"
import {TYPES} from "../../actions/authActions";
import axios from "axios";
const Login = () => {
	const userRef = useRef();
	const passwordRef = useRef();
	const { dispatch, isFetching} = useContext(AuthContext)
	const handleSubmit = async(e) => {
		e.preventDefault();
		dispatch({type:TYPES.LOGIN_START})
		try{
			const res = await axios.post("/auth/login",{
				username: userRef.current.value,
				password: passwordRef.current.value,
			})
			dispatch({ type:TYPES.LOGIN_SUCCESS, payload:res.data })
		} catch(err){
			console.log(err);
			dispatch({ type: TYPES.LOGIN_FAILURE});
		}
	}
	return (
		<div className="login">
			<span className="loginTitle">Login</span>
			<form className="loginForm" onSubmit={handleSubmit}>
				<label>Username:</label>
				<input 
					type="text" 
					className="loginInput" 
					placeholder="Enter your username..."
					ref={userRef}
				/>
				<label>Password:</label>
				<input
					type="password" 
					className="loginInput" 
					placeholder="Enter your password..."
					ref={passwordRef}
				/>
				<button className="loginButton" type="submit" disabled={isFetching}>Login</button>
			</form>
			<button className="loginRegisterButton">
				<Link className="link" to="/register">Register</Link>	
			</button>
		</div>
	)
}

export default Login