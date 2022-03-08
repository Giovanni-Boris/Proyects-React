import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import{ useState,useEffect } from "react";
import axios from 'axios';
import moment from 'moment'
import{ Link} from 'react-router-dom';
const Post = ({post}) => {
	const [like, setLike] = useState(post.likes.length);
	const [isLiked, setIsLiked] = useState(false);
	const [user, setUser] = useState({})
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	useEffect(() => {
		const fetchUser = async ()=>{
			const res = await axios.get(`/users/${post.userId}`)
			setUser(res.data)
		}
		fetchUser();
	}, [post.userId])
	//usar use memo
	/*const currentUser = useMemo(() => {
		console.log("rendering");
		let current = Users.filter(u=>u.id===post.userId)[0];
		return current;
	},[post.userId])*/


	//console.log("new rendering")
	const likeHandler=()=>{
		setLike(isLiked ? like-1: like+1);
		setIsLiked(!isLiked);
	}
	console.log(post.createdAt);
	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						<Link to={`profile/${user.username}`}>
							<img 
								className="postProfilerImg" 
								src={user.profilePicture || PF+"person/noAvatar.png"}
								alt=""
							/>
						</Link>
						<span className="postUserName">
							{user.username}
						</span>
						<span className="postDate">{moment(post.createdAt).fromNow()}</span>
					</div>
					<div className="postTopRight">
						<MoreVertIcon/>
					</div>
				</div>
				<div className="postCenter">
					<span className="postText">{post.desc||''}</span>
					<img className="postImg" src={PF+post.img} alt=""/>
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
