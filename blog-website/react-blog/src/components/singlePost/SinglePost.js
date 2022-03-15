import "./singlePost.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
const SinglePost = () => {
  const [post, setPost] = useState({})
  let {postId} = useParams();
  //console.log(postId);
  const PF = "http://localhost:5000/images/"

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
            src={PF + post.photo}
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
        <div className="singlePostInfo">
        	<span className="singlePostAuthor">
        		Author: 
            <Link to={`/?username=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
        	</span>
        	<span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
			</div>
		</div>
	)
}

export default SinglePost