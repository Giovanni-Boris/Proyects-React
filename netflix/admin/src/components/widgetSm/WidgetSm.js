import "./widgetSm.css"
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState, useEffect } from "react";
import axios from "axios";
const WidgetSm = () => {
  const [newUsers, setNewUsers] = useState([]);
  useEffect(() => {
    const getNewUsers = async () => {
      try{
        const res = await axios.get("users?new=true",
          {
            headers:{
              token: 
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2Y0YTAyZGUxZTI1YjI2MDIyMGU4ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODM4NDE0MywiZXhwIjoxNjQ4ODE2MTQzfQ.SrsIQHCvcNqHepfr-imWykqYQp-y_y161DS0WU4TcjM"
            },
          }
        );
        setNewUsers(res.data);
      } catch(err){
        console.log(err)
      }
    }
    getNewUsers();
  }, [])
  console.log(newUsers)
	return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user)=>(
          <li key={user._id} className="widgetSmListItem">
            <img
              src={
                user.profilePic ||
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WidgetSm