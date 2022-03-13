import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
const Settings = () => {
	return (
		<div className="settings">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsUpdateTitle">Update your Account</span>
					<span className="settingsDeleteTitle">Delete Account</span>
				</div>
				<form className="settingsForm">
					<label>Profile Picture</label>
					<div className="settingsPP">
						<img
            	src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
            	<i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input className="fileInput" type="file" style={{display:"none"}}/>
					</div>
					<label>Username</label>
					<input type="text" placeholder="Safak"/>
					<label>Email</label>
					<input type="email" placeholder="Safak@gmail.com"/>
					<label>Password</label>
					<input type="password"/>
					<button className="settingsSubmit">Update</button>
				</form>
			</div>
			<Sidebar/>
		</div>
	)
}

export default Settings