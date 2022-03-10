import './chatOnline.css'

const ChatOnline = () => {
	return (
		<div className="chatOnline">
			<div className="chatOnlineFriend">
				<div className="chatOnlineImgContainer">
					<img 
						className="chatOnlineImg"
						src="/assets/person/1.jpeg" 
						alt=""
					/>
					<div className="chatOnlineBadge"></div>
				</div>
				<span className="chatOnlineName">Jhon DOe</span>
			</div>
			<div className="chatOnlineFriend">
				<div className="chatOnlineImgContainer">
					<img 
						className="chatOnlineImg"
						src="/assets/person/1.jpeg" 
						alt=""
					/>
					<div className="chatOnlineBadge"></div>
				</div>
				<span className="chatOnlineName">Jhon DOe</span>
			</div>
			<div className="chatOnlineFriend">
				<div className="chatOnlineImgContainer">
					<img 
						className="chatOnlineImg"
						src="/assets/person/1.jpeg" 
						alt=""
					/>
					<div className="chatOnlineBadge"></div>
				</div>
				<span className="chatOnlineName">Jhon DOe</span>
			</div>
		</div>
	)
}

export default ChatOnline