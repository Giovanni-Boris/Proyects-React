import "./singlePost.css"
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import AuthContext from "../../context/AuthContext";

const SinglePost = () => {
  const [post, setPost] = useState({})
  let {postId} = useParams();
  //console.log(postId);
  const PF = "http://localhost:5000/images/"
  const {user} = useContext(AuthContext);
  let navigate = useNavigate();
  const [form, setForm] = useState({});
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + postId);
      setPost(res.data);
      setForm({
        title: res.data.title,
        desc: res.data.desc
      })
    }
    getPost()
  }, [postId]);
  const handleDelete = async() => {
    try{
      await axios.delete(`/posts/${post._id}`,{
        data: { username:user.username }
      });
      navigate("/");
    }catch(err){}
  }
  const handleChange =(e)=>{
    const {name,value} = e.target;
    setForm({
      ...form,
      [name]:value
    })
  }
  const handleUpdate = async()=>{
    try{
      await axios.put (`/posts/${post._id}`,{ 
        username:user.username, 
        title: form.title, 
        desc: form.desc 
      });
      setUpdateMode(false);
    }catch(err){}
  }
	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
        {post.photo &&(
  				<img
            className="singlePostImg"
            src={PF + post.photo}
            alt=""
          />
        )}
        { updateMode ? (
            <input 
              type="text" 
              value={form.title} 
              name="title"
              className="singlePostTitleInput"
              autoFocus
              onChange={handleChange}
            />
        ) : (
            <h1 className="singlePostTitle">
              {form.title}
              {post.username === user?.username && (
               <div className="singlePostEdit">
                  <i className="singlePostIcon far fa-edit" onClick={()=>setUpdateMode(true)}></i>
                  <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                </div>
              )}
            </h1>
            )
        }
        <div className="singlePostInfo">
        	<span className="singlePostAuthor">
        		Author: 
            <Link to={`/?username=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
        	</span>
        	<span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode ? (
          <textarea name="desc" className="singlePostDescInput" value={form.desc} onChange={handleChange}/>
        ) : (
          <p className="singlePostDesc">{form.desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
        
			</div>
		</div>
	)
}

export default SinglePost