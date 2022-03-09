import "./share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import RoomIcon from "@mui/icons-material/Room";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import {useContext,useState,useRef} from "react";
import AuthContext from "../../context/AuthContext";
import axios from "axios"

const Share = () => {

	const {user} = useContext(AuthContext);
	const desc = useRef();
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	const [file, setFile] = useState(null);
	//console.log(file)
	const handleSubmit = async(e)=> {
		e.preventDefault();
		const newPost = {
			userId: user._id,
			desc: desc.current.value
		}

		if(file){
			const data = new FormData();
			const fileName =  Date.now() + file.name;
			console.log(fileName)
			data.append("file", file, fileName);
			try{
				await axios.post("/upload",data)
				//window.location.reload();
			} catch(err){
				console.log(err);
			}
		}
		try{
			await axios.post("/posts",newPost);
		} catch(err){
			console.log(err)
		}
	}
	return (
		<div className="share">
			<div className="shareWrapper">
				<div className="shareTop">
					<img className="shareProfileImg" 
						src={
							user.profilePicture
							? PF + user.profilePicture
							: PF + "person/noAvatar.png"
						} 
						alt=""
						ref={desc}
					/>
					<input 
						placeholder={"What's in your mind "+user.username+"?"}
						className="shareInput"
					/>
				</div>
				<hr className="shareHr"/>
				<form className="shareBottom" onSubmit={handleSubmit}>
					 <div className="shareOptions">
					 	<label htmlFor="file" className="shareOption">
					 		<PermMediaIcon htmlColor="tomato" className="shareIcon"/>
					 		<span className="shareOptionText">Photo or Video</span>
					 		<input
					 			style={{display: "none"}}
					 			type="file"
					 			id="file"
					 			accept=".png,.jpeg,.jpg"
					 			onChange={(e)=>setFile(e.target.files[0])}
					 		/>
					 	</label>
					 	<div className="shareOption">
					 		<LabelIcon htmlColor="blue" className="shareIcon"/>
					 		<span className="shareOptionText">Tag</span>
					 	</div>
					 	<div className="shareOption">
					 		<RoomIcon htmlColor="green" className="shareIcon"/>
					 		<span className="shareOptionText">Location</span>
					 	</div>
					 	<div className="shareOption">
					 		<EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon"/>
					 		<span className="shareOptionText">Feeling</span>
					 	</div>
					 </div>
					 <button className="shareButton" type="submit">Share</button>
				</form>
			</div>	
		</div>
	)
}

export default Share