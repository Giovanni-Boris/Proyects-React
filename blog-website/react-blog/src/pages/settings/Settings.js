import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
import AuthContext from "../../context/AuthContext"
import axios from "axios";
import {useState,useContext} from "react";

const initialForm = {
	username:"" ,
	email:"",
	password:"",
	file:null,
};
const Settings = () => {
	const [form, setForm] = useState(initialForm);
	const {user} = useContext(AuthContext)
	const [success, setSuccess] = useState(false);
	const handleChange = (e,file) => {
		const {name,value} = e.target;
		setForm({
			...form,
			[name]:file || value,
		})
	}
	const handleSubmit = async(e)=>{
		e.preventDefault();
		const updatedUser = {
			userId: user._id,
			...form,
		}
		if (form.file){
			const data = new FormData();
			const filename = Date.now() + form.file.name;
			console.log(filename);
			data.append("name",filename);
			data.append("file",form.file)
			updatedUser.profileP = filename
			try{
				await axios.post("/upload",data)
			}catch(err){}
		}
		//console.log(newPost);
		delete updatedUser.file;
		//console.log(newPost);

		try{
			await axios.put("/users/"+user._id,updatedUser)
			setSuccess(true);
		}catch(err){}
	}
	return (
		<div className="settings">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsUpdateTitle">Update your Account</span>
					<span className="settingsDeleteTitle">Delete Account</span>
				</div>
				<form className="settingsForm" onSubmit={handleSubmit}>
					<label>Profile Picture</label>
					<div className="settingsPP">
						<img
            	src={form.file ? URL.createObjectURL(form.file): user.profileP}
              alt=""
            />
            <label htmlFor="fileInput">
            	<i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input 
            	className="fileInput" 
            	type="file" 
            	name="file"
            	style={{display:"none"}}
            	onChange={(e)=>handleChange(e,e.target.files[0])}
            />
					</div>
					<label>Username</label>
					<input 
						type="text" 
						placeholder={user.username}
						onChange={handleChange}
						name="username"
					/>
					<label>Email</label>
					<input 
						type="email" 
						placeholder={user.email}
						onChange={handleChange}
						name="email"
					/>
					<label>Password</label>
					<input 
						type="password"
						onChange={handleChange}
						name="password"
					/>
					<button className="settingsSubmit" type="submit">
						Update
					</button>
					{success &&(
						<span style={{color:"green", textAlign:"center", marginTop:"20px"}}>Profile has been updated....</span>
					)}
				</form>
			</div>
			<Sidebar/>
		</div>
	)
}

export default Settings