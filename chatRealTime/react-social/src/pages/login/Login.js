import "./login.css";

const Login = () => {
	const handleClick = (e)=> {
		e.preventDefault();
		console.log("connect");
	}
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
					<form className="loginBox" onSubmit={handleClick}>
						<input placeholder="Email" type="email" className="loginInput"/>
						<input placeholder="Password" type="password" className="loginInput"/>
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