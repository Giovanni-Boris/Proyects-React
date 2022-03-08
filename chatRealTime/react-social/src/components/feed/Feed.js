import {useState, useEffect} from 'react';
import Share from '../share/Share';
import Post from '../post/Post';
import "./feed.css";
import axios from 'axios';

const Feed = () => {
	const [posts, setPosts] = useState([])
	useEffect(() => {
		const fetchPosts = async ()=>{
			const res = await axios.get("posts/timeline/62247b717bd40d303d6da50e")
			setPosts(res.data);
		}
		fetchPosts();
	}, [])
	return (
		<d
		<div className="feed">
			<div className="feedWrapper">
				<Share/>
				{posts.map((el)=>(
					<Post
						key={el._id}
						post={el}
					/>
				))}
			</div>	
		</div>
	)
}

export default Feed