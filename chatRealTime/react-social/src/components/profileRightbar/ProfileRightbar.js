import "./profileRightbar.css"
import axios from "axios";
import { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
const ProfileRightbar = ({user}) => {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	const [friends, setFriends] = useState([]);
	useEffect(() => {
		const getFriends = async () => {
			try{
				const friendList = await axios.get("/users/friends/" + user._id);
				setFriends(friendList.data);
			} catch(err){
				console.log(err)
			}
		}
	  getFriends();
	}, [user._id])
	return (
		<>
			<h4 className="rightbarTitle">User Information</h4>
			<div className="rightbarInfo">
				<div className="rightbarInfoItem">
					<span className="rightbarInfoKey">City</span>
					<span className="rightbarInfoValue">{user.city}</span>
				</div>
				<div className="rightbarInfoItem">
					<span className="rightbarInfoKey">From</span>
					<span className="rightbarInfoValue">{user.from}</span>
				</div>
				<div className="rightbarInfoItem">
					<span className="rightbarInfoKey">Relationship</span>
					<span className="rightbarInfoValue">
						{user.relationship ===1
						?"Single"
						: user.relationship===2
						? "Married"
						: "-"}
					</span>
				</div>
			</div>
			<h4 className="rightbarTitle">User Friends</h4>
			<div className="rightbarFollowings">
				{friends.map((friend) => (
					<Link to={"/profile/"+friend.username}>
						<div className="rightbarFollowing">
							<img 
								className="rightbarFollowingImg" 
								src={
									friend.profilePicture 
										? PF+friend.profilePicture 
										: PF+"person/noAvatar.png"
								} 
								alt=""
							/>
							<span className="rightbarFollowingName">{friend.username}</span>
						</div>
					</Link>
				))}
			</div>
		</>
	)
}

export default ProfileRightbar