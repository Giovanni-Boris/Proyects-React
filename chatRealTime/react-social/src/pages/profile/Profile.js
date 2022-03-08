import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar  from "../../components/rightbar/Rightbar";
import {useState,useEffect} from "react";
import axios from "axios";
import "./profile.css";

const Profile = () => {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	const [user, setUser] = useState({})
	useEffect(() => {
		const fetchUser = async ()=>{
			console.log("/users?username=lucas");
			const res = await axios.get(`/users?username=lucas`)
			setUser(res.data)
		}
		fetchUser();
	}, [])
	return (
		<>
			<Navbar/>
			<div className="profile">
				<Sidebar/>
				<div className="profileRight">
					<div className="profileRightTop">
						<div className="profileCover">
							<img 
								className="profileCoverImg" 
								src={PF+"post/3.jpeg"} 
								alt=""
							/>
							<img 
								className="profileUserImg" 
								src={PF+"person/7.jpeg"}
								alt=""
							/>
						</div>
						<div className="profileInfo">
							<h4 className="profileInfoName">{user.username}</h4>
							<span className="profileInfoDesc">{user.desc}</span>
						</div>
		
					</div>
					<div className="profileRightBottom">
						<Feed username="lucas"/>
						<Rightbar profile/>
					</div>
				</div>
			</div>

		</>
	)
}

export default Profile