import "./register.css";
import {useForm} from '../../hooks/useForm';

const initialForm = {
	username:"",
	email:"",
	password:"",
	passwordAgain:"",
};
const validationsForm = (form)=>{
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexPassword = /^.{1,8}$/;
	if(!form.username.trim()){
		errors.username = "The name field is required"
	}else if(!regexName.test(form.username.trim())){
		errors.username = "The username field only accepts letters and blanks"
	}
	if(!form.email.trim()){
		errors.email = "The Email field is required"
	}else if(!regexEmail.test(form.email.trim())){
		errors.email = "Email field is incorrect"
	}
	if(!form.password.trim()){
		errors.password = "The password field is required"
	}else if(!regexPassword.test(form.password.trim())){
		errors.password = "The field password must not access the 8 character"
	}else if(form.password !== form.passwordAgain){
		errors.password = "The password dont' match";
	}	
	return errors;
};
let styles ={
	fontWeight:"bold",
	color:"#dc3545"
}
const Register = () => {
	const {
		form,
		errors,
		loading,
		handleChange,
		handleBlur,
		handleSubmit
	} = useForm(initialForm,validationsForm);
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
						<input 
							type="text"
							name="username"
							placeholder="Username" 
							className="loginInput"
							onChange={handleChange} 
							onBlur={handleBlur}
							value={form.username}
							required
						/>
						{errors.username && <p style={styles}>{errors.username}</p>}
						<input 
							type="email"
							name="email"
							placeholder="Email" 
							className="loginInput"
							onChange={handleChange} 
							onBlur={handleBlur}
							value={form.email}
							required
						/>
						{errors.email && <p style={styles}>{errors.email}</p>}

						<input 
							type="password"
							name="password"
							placeholder="Password" 
							className="loginInput"
							onChange={handleChange} 
							onBlur={handleBlur}
							value={form.password}
							required
						/>
						<input 
							type="password"
							name="passwordAgain"
							placeholder="Password Again" 
							className="loginInput"
							onChange={handleChange} 
							onBlur={handleBlur}
							value={form.passwordAgain}
							required
						/>
						{errors.password && <p style={styles}>{errors.password}</p>}

						<button type="submit"className="loginButton">
							Sign In
						</button>
						<button className="loginRegisterButton">
							Log into Account
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Register