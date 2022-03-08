import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../dummyData";
import{ useState,useMemo} from "react";
const Post = ({post}) => {
	const [like, setLike] = useState(post.like);
	const [isLiked, setIsLiked] = useState(false);
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	//console.log(PF)
	//usar use memo
	const currentUser = useMemo(() => {
		console.log("rendering");
		let current = Users.filter(u=>u.id===post.userId)[0];
		return current;
	},[post.userId])


	//console.log("new rendering")
	const likeHandler=()=>{
		setLike(isLiked ? like-1: like+1);
		setIsLiked(!isLiked);
	}

	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						<img 
							className="postProfilerImg" 
							src={PF+currentUser.profilePicture}
							alt=""
						/>
						<span className="postUserName">
							{currentUser.username}
						</span>
						<span className="postDate">{post.date}</span>
					</div>
					<div className="postTopRight">
						<MoreVertIcon/>
					</div>
				</div>
				<div className="postCenter">
					<span className="postText">{post.desc||''}</span>
					<img className="postImg" src={PF+post.photo} alt=""/>
				</div>
				<div className="postBottom">
					<div className="postBottomLeft">
						<img className="likeIcon" src={PF+"like.png"} onClick={likeHandler} alt=""/>
						<img className="likeIcon" src={PF+"heart.png"} onClick={likeHandler} alt=""/>
						<span className="postLikeCounter">{like} people like it</span>
					</div>
					<div className="postBottomRight">
						<span className="postCommentText">{post.comment} comments</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Post
