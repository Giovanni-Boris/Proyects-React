import "./rightbar.css"; 
import HomeRightbar from "../homeRightbar/HomeRightbar";
import ProfileRightbar from "../profileRightbar/ProfileRightbar";
const Rightbar = ({user}) => {
	return (
		<div className="rightbar">
			<div className="rightbarWrapper">
				{user ? <ProfileRightbar user={user}/> : <HomeRightbar/>}
			</div>		
		</div>
	)
}

export default Rightbar