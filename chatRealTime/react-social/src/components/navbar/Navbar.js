import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Link} from 'react-router-dom';
import {useContext} from "react";
import AuthContext from "../../context/AuthContext";
const Navbar = () => {
	const {user} = useContext(AuthContext);
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	return (
		<div className="navbarContainer">
			<div className="navbarLeft">
				<Link to="/" style={{textDecoration: "none"}}>
					<span className="logo">LamaSocial</span>	
				</Link>
			</div>
			<div className="navbarCenter">
				<div className="searchbar">
					<SearchIcon className="searchIcon"/>
					<input placeholder="Search for friend, post or video" className="searchInput"/>
				</div>
			</div>
			<div className="navbarRight">
				<div className="navbarLinks">
					<span className="navbarLink">HomePage</span>
					<span className="navbarLink">TimeLine</span>
				</div>
				<div className="navbarIcons">
					<div className="navbarIconItem">
						<PersonIcon/>
						<span className="navbarIconBadge">1</span>
					</div>
					<div className="navbarIconItem">
						<ChatIcon/>
						<span className="navbarIconBadge">2</span>
					</div>
					<div className="navbarIconItem">
						<NotificationsIcon/>
						<span className="navbarIconBadge">3</span>
					</div>
				</div>
				<Link to={`/profile/${user.username}`}>
					<img 
						src={
							user.profilePicture
								? PF + user.profilePicture
								: PF + "person/noAvatar.png"
						} 
						alt="" 
						className="navbarImg"
					/>	
				</Link>	
			</div>
		</div>
	)
}

export default Navbar