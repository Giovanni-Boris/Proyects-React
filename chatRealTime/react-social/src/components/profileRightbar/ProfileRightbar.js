import "./profileRightbar.css"

const ProfileRightbar = ({user}) => {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	return (
		<>
			<h4 className="rightbarTitle">User Information</h4>
			<div className="rightbarInfo">
				<div className="rightbarInfoItem">
					<span className="rightbarInfoKey">City</span>
					<span className="rightbarInfoValue">{user.city}</span>
				</div>
				<div className="rightbarInfoItem">
					<span className="rightbarInfoKey">From</span>
					<span className="rightbarInfoValue">{user.from}</span>
				</div>
				<div className="rightbarInfoItem">
					<span className="rightbarInfoKey">Relationship</span>
					<span className="rightbarInfoValue">
						{user.relationship ===1
						?"Single"
						: user.relationship===2
						? "Married"
						: "-"}
					</span>
				</div>
			</div>
			<h4 className="rightbarTitle">User Friends</h4>
			<div className="rightbarFollowings">
				<div className="rightbarFollowing">
					<img className="rightbarFollowingImg" src={PF+"person/1.jpeg"} alt=""/>
					<span className="rightbarFollowingName">John Carter</span>
				</div>	
				<div className="rightbarFollowing">
					<img className="rightbarFollowingImg" src={PF+"person/2.jpeg"} alt=""/>
					<span className="rightbarFollowingName">John Carter</span>
				</div>
				<div className="rightbarFollowing">
					<img className="rightbarFollowingImg" src={PF+"person/3.jpeg"} alt=""/>
					<span className="rightbarFollowingName">John Carter</span>
				</div>
				<div className="rightbarFollowing">
					<img className="rightbarFollowingImg" src={PF+"person/4.jpeg"} alt=""/>
					<span className="rightbarFollowingName">John Carter</span>
				</div>
				<div className="rightbarFollowing">
					<img className="rightbarFollowingImg" src={PF+"person/5.jpeg"} alt=""/>
					<span className="rightbarFollowingName">John Carter</span>
				</div>
				<div className="rightbarFollowing">
					<img className="rightbarFollowingImg" src={PF+"person/6.jpeg"} alt=""/>
					<span className="rightbarFollowingName">John Carter</span>
				</div>
			</div>
		</>
	)
}

export default ProfileRightbar