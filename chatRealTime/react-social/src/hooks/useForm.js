import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
export const useForm = (initialForm,validateForm)=>{
	const [form, setForm] = useState(initialForm);
	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);
 	const navigate = useNavigate();
	const handleChange = (e)=>{
		const {name,value} = e.target;
		setForm({
			...form,
			[name]:value
		})
	};
	const handleBlur = (e)=>{
		handleChange(e);
		setErrors(validateForm(form));
	};

	const handleSubmit = async(e)=>{
		e.preventDefault();
		setErrors(validateForm(form));
		if(Object.keys(errors).length === 0){
			const user = {
				username : form.username,
				email : form.email,
				password: form.password
			};
			try{
				console.log("making post")
				await axios.post("http://localhost:8800/api/auth/register",user);
				navigate("/login")

			}catch(err){
				console.log(err);
			}
		} else {
			return;
		}
	};

	return {
		form,
		errors,
		loading,
		handleChange,
		handleSubmit,
		handleBlur
	};
}