import "./singlePost.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
const SinglePost = () => {
  const [post, setPost] = useState({})
  let {postId} = useParams();
  console.log(postId);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + postId);
      setPost(res.data);
    }
    getPost()
  }, [postId])
	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
        {post.photo &&
  				<img
            className="singlePostImg"
            src={post.photo}
            alt=""
          />
        }
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlepostInfo">
        	<span className="singlePostAuthor">
        		Author: <b>{post.username}</b>
        	</span>
        	<span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
			</div>
		</div>
	)
}

export default SinglePost