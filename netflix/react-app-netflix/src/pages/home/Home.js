import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { useState, useEffect } from "react";
import  axios from "axios";


const Home = ({type}) => {
	const [lists, setLists] = useState([]);
	const [genre, setGenre] = useState(null);
	useEffect(() => {
		const getRandomLists = async () => {
			try{
				const res = await axios.get(
					`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`
					,
					{
						headers:{
							token: 
								"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2Y0YTAyZGUxZTI1YjI2MDIyMGU4ZiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDgzMTQ4ODgsImV4cCI6MTY0ODc0Njg4OH0.OghkecC5d2dtFa1c2gfzjQF5UGCTiX9gU4bYrK4O3Tk"
						},
					}
				);
				setLists(res.data);
			}catch(err){
				console.log(err);
			}
		}
		getRandomLists();
	}, [type, genre])
	return (
		<div className="home">
			<Navbar/>
	        <Featured type={type} setGenre={setGenre}/>
	        {lists.map((list) => (
	        	<List key={list._id} list={list}/>
	        ))}
		</div>
	)
}

export default Home