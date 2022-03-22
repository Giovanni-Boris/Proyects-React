import "./login.css"
const initialForm = ({
	username:"",
	password:"",
})
const Login = () => {
	const [form, setForm] = useState(initialForm);
	const handleChange = (e) => {
		let {value,name} = e.target;
		setForm({
			...form,
			[name]: value,
		})
	}
	const handleClick = (e) => {
		e.preventDefault();
		//
	}
	return (
		<div>
			<input 
				name="username" 
				type="text" 
				placeholder="username"
				onChange={handleChange}
			/>
			<input 
				name="password" 
				type="password" 
				placeholder="password"
				onChange={handleChange}
			/>
			<button onClick={handleClick}>Login</button>
			
		</div>
	)
}

export default Login