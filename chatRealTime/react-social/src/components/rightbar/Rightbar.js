import "./rightbar.css"; 
import HomeRightbar from "../homeRightbar/HomeRightbar";
import ProfileRightbar from "../profileRightbar/ProfileRightbar";
const Rightbar = ({profile}) => {
	return (
		<div className="rightbar">
			<div className="rightbarWrapper">
				{profile ? <ProfileRightbar/> : <HomeRightbar/>}
			</div>		
		</div>
	)
}

export default Rightbar