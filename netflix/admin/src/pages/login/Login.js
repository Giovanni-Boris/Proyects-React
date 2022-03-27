import { useState, useContext } from 'react';
import { AuthContext } from "../../context/authContext/AuthContext";
import { login } from "../../context/authContext/apiCalls";
import "./login.css"

const initialForm ={
	email:"",
	password:"",
}
const Login = () => {
	const [form, setForm] = useState(initialForm);
	const { isFetching, dispatch } = useContext(AuthContext);
	const handleChange = (e) => {
		let {name,value } = e.target;
		setForm({
			...form,
			[name]: value
		})
	}
	const handleSubmit = (e)=>{
		e.preventDefault();
		login(form, dispatch);
	}
	return (
		<div className="login">
			<form className="loginForm" onSubmit={handleSubmit}>
				<input 
					text="text"
					placeholder="email" 
					className="loginInput"
					name="email"
					onChange={handleChange}
				/>
				<input 
					type="text" 
					placeholder="password"
					className="loginInput"
					name="password"
					onChange={handleChange}
				/>
				<button type="submit" className="loginButton">Login</button>
			</form>
		</div>
	)
}

export default Login