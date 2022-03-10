import "./messenger.css"
import Navbar from "../../components/navbar/Navbar";
const Messenger = () => {
	return (
		<>
		<Navbar/>
			<div className="messenger">
				<div className="chatMenu">
					<div className="chatMenuWrapper">
						menu
					</div>
				</div>
				<div className="chatBox">
					<div className="chatBoxWrapper">
						chat
					</div>
				</div>
				<div className="chatOnline">
					<div className="chatOnlineWrapper">
						Online
					</div>
				</div>
			</div>
		</>
	)
}

export default Messenger