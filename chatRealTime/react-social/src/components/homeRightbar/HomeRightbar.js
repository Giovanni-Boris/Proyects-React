import{ Users } from "../../dummyData";
import Online from "../online/Online"
import "./homeRightbar.css"

const HomeRightbar = () => {
	return (
		<>
			<div className="birthdayContainer">
				<img className="birthdayImg" src="/assets/gift.png" alt=""/>
				<span className="birthdayText"> 
					<b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
				</span>
			</div>
			<img className="rightbarAd" src="/assets/ad.png" alt=""/>
			<h4 className="rightbarTitle">Online Friends</h4>
			<ul className="rightbarFriendList">
				{Users.map(el=>(
					<Online key={el.id} user={el}/>
				))}
			</ul>
		</>
	)
}

export default HomeRightbar