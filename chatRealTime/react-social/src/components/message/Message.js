import "./message.css"
import moment from 'moment'

const Message = ({message,own}) => {
	return (
		<div className={own ? "message own" : "message"}>
			<div className="messageTop">
				<img
					className="messageImg"
					src="/assets/person/10.jpeg"
					alt=""
				/>
				<p className="messageText">
					{message.text}
				</p>
			</div>
			<div className="messageBottom">
				{moment(message.createdAt).fromNow()}
			</div>
		</div>
	)
}

export default Message