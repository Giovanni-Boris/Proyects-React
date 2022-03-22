import {useState} from "react";
import {useDispatch} from "react-redux";
import {login} from "../../redux/apiCalls";
import {useNavigate} from "react-router-dom";
const initialForm = ({
	username:"",
	password:"",
})
const Login = () => {
	let navigate = useNavigate()
	const [form, setForm] = useState(initialForm);
	const dispatch = useDispatch()

	const handleChange = (e) => {
		let {value,name} = e.target;
		setForm({
			...form,
			[name]: value,
		})
	}
	const handleClick = (e) => {
		e.preventDefault();
		login(dispatch,{...form})
		navigate("/dashboard/")
	}
	return (
		<div style={{
		        height: "100vh",
		        display: "flex",
		        flexDirection: "column",
		        alignItems: "center",
		        justifyContent: "center",
		      }}
		>
			<input
				style={{ padding: 10, marginBottom: 20 }}
				name="username" 
				type="text" 
				placeholder="username"
				onChange={handleChange}
			/>
			<input 
				style={{ padding: 10, marginBottom: 20 }}
				name="password" 
				type="password" 
				placeholder="password"
				onChange={handleChange}
			/>
			<button onClick={handleClick} style={{ padding: 10, width:100 }}>
				Login
			</button>
			
		</div>
	)
}

export default Login