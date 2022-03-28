import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useState, useContext } from "react";
import "./login.scss"

const Login = () => {
	const [form, setForm] = useState();
	const { dispatch } = useContext(AuthContext);

	const handleChange = (e) => {
		let { value, name } = e.target;
		setForm({
			...form,
			[name]:value,
		})
	}
	const handleLogin = (e) => {
		e.preventDefault();
		login(form, dispatch)
	}
	return (
		<div className="login">
			<div className="top">
				<div className="wrapper">
					<img
		            	className="logo"
		            	src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
		            	alt=""
		          	/>
				</div>
			</div>
			<div className="container">
	       		<form>
	       			<h1>Sign In</h1>
	       			<input type="email" name="email" placeholder="Email or phone number" onChange={handleChange}/>
	       			<input type="password" name="password" placeholder="Password" onChange={handleChange}/>
	       			<button className="loginButton" onClick={handleLogin}>Sign In</button>
	       			<span>
			            New to Netflix? <b>Sign up now.</b>
			        </span>
			        <small>
			            This page is protected by Google reCAPTCHA to ensure you're not a
			            bot. <b>Learn more</b>.
			        </small>
	       		</form>
			</div>	
		</div>

	)
}

export default Login