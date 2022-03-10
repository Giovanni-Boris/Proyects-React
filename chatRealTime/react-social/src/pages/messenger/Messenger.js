import "./messenger.css"
import Navbar from "../../components/navbar/Navbar";
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import {useState,useEffect,useContext} from "react";
const Messenger = () => {
	const [conversations, setConversations] = useState([])
	const {user} = useContext(AuthContext);
	useEffect(() => {
		const getConversation = async() => {
			try{
				const res = await axios.get("/conversations/"+user._id);
				setConversations(res.data);
			} catch(err){
				console.log(err);
			}	
		}
		getConversation();
	}, [user._id])
	//console.log("mis conversations",conversations);
	return (
		<>
		<Navbar/>
			<div className="messenger">
				<div className="chatMenu">
					<div className="chatMenuWrapper">
						<input placeholder="Search for friends" className="chatMenuInput"/>
						{conversations.map((el,index) => (
							<Conversation key={index} conversation={el} currentUser={user}/>
						))}
					</div>
				</div>
				<div className="chatBox">
					<div className="chatBoxWrapper">
						<div className="chatBoxTop">
							<Message/>
							<Message own={true}/>
							<Message/>
							<Message/>
							<Message/>
							<Message/>
							<Message/>
							<Message/>
							<Message/>
						</div>
						<div className="chatBoxBottom">
							<textarea className="chatMessageInput" placeholder="write something..."></textarea>
							<button className="chatSubmitButton">Send</button>
						</div>
					</div>
				</div>
				<div className="chatOnline">
					<div className="chatOnlineWrapper">
						<ChatOnline/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Messenger