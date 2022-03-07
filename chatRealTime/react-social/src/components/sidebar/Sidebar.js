import "./sidebar.css";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import SidebarListItem from './SidebarListItem'

const listOptions = [
	{icon:RssFeedIcon, name:"Feed"},
	{icon:ChatIcon, name:"Chats"},
	{icon:PlayCircleFilledOutlinedIcon, name:"Videos"},
	{icon:GroupIcon, name:"Groups"},
	{icon:BookmarkIcon, name:"Bookmarks"},
	{icon:HelpOutlineIcon, name:"Questions"},
	{icon:WorkOutlineIcon, name:"Jobs"},
	{icon:EventIcon, name:"Events"},
	{icon:SchoolIcon, name:"Courses"}
];

const Sidebar = () => {
	//si pones padding  a side bar se desfigurara la caja flexible usa un wrapper para hacerlo mejor
	return (
		<div className="sidebar">

			<div className="sidebarWrapper">
				<ul className="sidebarList">
					{listOptions.map((el,index)=>(
						<SidebarListItem key={el.name} Icon={el.icon} options={el.name}/>
					))}
				</ul>
				<button className="sidebarButton">Show More</button>
				<hr className="sidebarHr"/>
				<ul className="sidebarFriendList">
					<li className="sidebarFriend">
						<img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
						<span className="sidebarFriendName">Jane Doe</span>
					</li>
					<li className="sidebarFriend">
						<img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
						<span className="sidebarFriendName">Jane Doe</span>
					</li>
					<li className="sidebarFriend">
						<img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
						<span className="sidebarFriendName">Jane Doe</span>
					</li>
					<li className="sidebarFriend">
						<img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
						<span className="sidebarFriendName">Jane Doe</span>
					</li>
					<li className="sidebarFriend">
						<img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
						<span className="sidebarFriendName">Jane Doe</span>
					</li>
					<li className="sidebarFriend">
						<img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt=""/>
						<span className="sidebarFriendName">Jane Doe</span>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Sidebar