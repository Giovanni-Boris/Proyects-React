import "./login.css";
import { loginCall } from "../../apiCalls.js";
import { useContext,useRef } from "react";
import AuthContext from "../../context/AuthContext";
const Login = () => {
	const email = useRef();
	const password = useRef();
	const { user, isFetching, error, dispatch } = useContext(AuthContext);
	const handleSubmit = (e)=> {
		e.preventDefault();
		loginCall(
			{ email: email.current.value, password: password.current.value },
			dispatch
		);
	}
	console.log(user);
	return (
		<div className="login"> 
			<div className="loginWrapper">
				<div className="loginLeft">
					<h3 className="loginLogo">LamaSocial</h3>
					<span className="loginDesc">
						Connect with friends and the world around you on Lamasocial.
					</span>
				</div>
				<div className="loginRight">
					<form className="loginBox" onSubmit={handleSubmit}>
						<input ref={email} placeholder="Email" type="email" className="loginInput"/>
						<input ref={password} placeholder="Password" type="password" className="loginInput"/>
						<button className="loginButton">Log In</button>
						<span className="loginForgot">Forgot Password</span>
						<button className="loginRegisterButton">
							Create  a New Account
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login