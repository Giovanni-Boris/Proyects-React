import "./conversation.css"
import {useState, useEffect} from 'react';
import axios from 'axios';
const Conversation = ({conversation, currentUser}) => {
	const [user, setUser] = useState(null);
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	useEffect(() => {
		console.log("hola",conversation);
		const friendId = conversation.members.find((el)=>el !== currentUser._id);
		const getUser = async() =>{
			try{
				const res = await axios("/users?userId="+ friendId);
				setUser(res.data);
			} catch(err){
				console.log(err)
			}
		}
		getUser();
	}, [currentUser,conversation])

	return (
		<div className="conversation">
			<img 
				className="conversationImg" 
				src={user.profilePicture?user.profilePicture:PF+"person/noAvatar.png"}
				alt=""
			/>
			<span className="conversationName">{user && user.username}</span>
		</div>
	)
}

export default Conversation 