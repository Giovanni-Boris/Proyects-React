import "./messenger.css"
import Navbar from "../../components/navbar/Navbar";
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import {useState,useEffect,useContext} from "react";
const Messenger = () => {
	const [conversations, setConversations] = useState([]);
	const [currentChat, setCurrentChat] = useState(null);
	const [messages, setMessages] = useState([]);
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
	useEffect(() => {
		if(!currentChat)return;
		const getMessages = async ()=>{
			try{	
				const res = await axios.get("/messages/"+currentChat._id)
				setMessages(res.data)
			} catch(err){
				console.log(err)
			}
		}
		getMessages();
	}, [currentChat]);
	console.log(messages)
	return (
		<>
		<Navbar/>
			<div className="messenger">
				<div className="chatMenu">
					<div className="chatMenuWrapper">
						<input placeholder="Search for friends" className="chatMenuInput"/>
						{conversations.map((el,index) => (
							<div key={index} onClick={() => setCurrentChat(el)}>
								<Conversation conversation={el} currentUser={user}/>
							</div>
						))}
					</div>
				</div>
				<div className="chatBox">
					<div className="chatBoxWrapper">
						{currentChat ?(
							<> 
								<div className="chatBoxTop">
									{messages.map((m,index)=>(
										<Message key={index} message={m} own={m.sender === user._id}/>
									))}
								</div>
								<div className="chatBoxBottom">
									<textarea className="chatMessageInput" placeholder="write something..."></textarea>
									<button className="chatSubmitButton">Send</button>
								</div>
							</>
						):( 
							<span className="noConversationText">Open a conversation to start</span> 
						)}
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