import FeaturedInfo from "../../components/featureInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useState, useEffect, useMemo } from "react";
import axios from "axios"
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
	useEffect(() => {
		const getStats = async () => {
			try{
				const res = await axios.get("users/stats",
					{
						headers:{
							token: 
								"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2Y0YTAyZGUxZTI1YjI2MDIyMGU4ZiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDgzMTQ4ODgsImV4cCI6MTY0ODc0Njg4OH0.OghkecC5d2dtFa1c2gfzjQF5UGCTiX9gU4bYrK4O3Tk"
						},
					}
				);
				const statsList = res.data.sort((a,b)=>a._id - b._id);
				statsList.map((item)=>
					setUsersStats((prev)=>[
						...prev,
						{name:MONTHS[item._id - 1], "New User":item.total},
					])
				);
			} catch(err){
				console.log(err)
			}
		}
		getStats();
	}, [MONTHS])
	console.log(usersStats)
	return (
		<div className="home">
			<FeaturedInfo/>
			<Chart data={usersStats} title="User Analytics" grid dataKey="New User"/>
			<div className="homeWidgets">
				<WidgetSm/>
				<WidgetLg/>
			</div>
		</div>
	)
}

export default Home




























