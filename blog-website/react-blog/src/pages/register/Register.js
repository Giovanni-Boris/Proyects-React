import "./register.css"
import { Link } from 'react-router-dom'
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
const initialForm = {
	username:"",
	email:"",
	password:"",
};
const Register = () => {
	const [form, setForm] = useState(initialForm);
	const [error, setError] = useState(false);
	let navigate = useNavigate();
	const handleChange = (e) => {
		const {name,value} = e.target;
		setForm({
			...form,
			[name] : value
		})
	}
	const handleSubmit = async(e)=> {
		e.preventDefault();
		try{
			const res = await axios.post("/auth/register",{
				username: form.username,
				email : form.email,
				password : form.password
			})

			res.data && navigate("/login");
		} catch(err){
			console.log(err)
			setError(true);
		}
		
	}

	return (
		<div className="register">
			<span className="registerTitle">Register</span>
			<form className="registerForm" onSubmit={handleSubmit}>
				<label>Username</label>
				<input 
					type="text" 
					className="registerInput" 
					placeholder="Enter your username..."
					onChange={handleChange}
					name="username"
					value={form.username}
				/>
				<label>Email</label>
				<input 
					type="email" 
					className="registerInput" 
					placeholder="Enter your email..."
					onChange={handleChange}
					name="email"
					value={form.email}
				/>
				<label>Password</label>
				<input 
					type="password" 
					className="registerInput" 
					placeholder="Enter your password..."
					onChange={handleChange}
					name="password"
					value={form.password}
				/>
				<button className="registerButton" type="submit">Register</button>
			</form>
			<button className="registerLoginButton">
				<Link className="link" to="/login">Login</Link>	
			</button>
			{error && <span style={{color:"#f00",marginTop:"10px"}}>Something went wrong</span>}
		</div>
	)
}

export default Register