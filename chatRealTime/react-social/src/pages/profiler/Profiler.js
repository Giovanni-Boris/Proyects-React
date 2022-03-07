import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar  from "../../components/rightbar/Rightbar";
import "./profiler.css";

const Profiler = () => {
	return (
		<>
			<Navbar/>
			<div className="profile">
				<Sidebar/>
				<div className="profileRight">
					<div className="profileRightTop">
						<div className="profileCover">
							<img 
								className="profileCoverImg" 
								src="/assets/post/3.jpeg" 
								alt=""
							/>
							<img 
								className="profileUserImg" 
								src="/assets/person/7.jpeg" 
								alt=""
							/>
						</div>
						<div className="profileInfo">
							<h4 className="profileInfoName">Boris Giovanni</h4>
							<span className="profileInfoDesc">Hello my friends!</span>
						</div>
		
					</div>
					<div className="profileRightBottom">
						<Feed/>
						<Rightbar profiler/>
					</div>
				</div>
			</div>

		</>
	)
}

export default Profiler