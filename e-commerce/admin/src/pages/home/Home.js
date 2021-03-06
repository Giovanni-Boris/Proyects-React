import FeaturedInfo from "../../components/featureInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import "./home.css";
import {userData} from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import{useState, useEffect, useMemo} from "react";
import {userRequest} from "../../requestMethods";
const Home = () => {
	const [usersStats, setUsersStats] = useState([]);
	const MONTHS = useMemo(
	    () => [
	      "Jan",
	      "Feb",
	      "Mar",
	      "Apr",
	      "May",
	      "Jun",
	      "Jul",
	      "Agu",
	      "Sep",
	      "Oct",
	      "Nov",
	      "Dec",
	    ],
	    []
	);

	useEffect(()=>{
		const getStats = async () => {
			try{
				const res = await userRequest.get("/users/stats")
				res.data.map((item)=>
					setUsersStats((prev)=>[
						...prev,
						{name:MONTHS[item._id - 1], "Active User":item.total},
					])
				)
			}catch{}
		}
		getStats()
	},[MONTHS]);

	console.log(usersStats)

	return (
		<div className="home">
			<FeaturedInfo/>
			<Chart data={usersStats} title="User Analytics" grid dataKey="Active User"/>
			<div className="homeWidgets">
				<WidgetSm/>
				<WidgetLg/>
			</div>
		</div>
	)
}

export default Home