import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useState, useEffect } from "react";
import axios from "axios";
import "./featured.scss"
const Featured = ({ type, setGenre }) => {
	const [content, setContent] = useState({});

	useEffect(() => {
		const getRandomContent = async () => {
			try{
				const res = await axios.get(`/movies/random?type=${type}`, {
		          	headers:{
						token: 
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2Y0YTAyZGUxZTI1YjI2MDIyMGU4ZiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDgzMTQ4ODgsImV4cCI6MTY0ODc0Njg4OH0.OghkecC5d2dtFa1c2gfzjQF5UGCTiX9gU4bYrK4O3Tk"
					},
		        });
		        setContent(res.data[0]);
			} catch(err){
				console.log(err);
			}
		}
		getRandomContent();
	}, [type])
	console.log(content);
	return (
		<div className="featured">
			{type && (
				<div className="category">
					<span>{type === "movie" ? "Movies" : "Series"}</span>
					<select 
						name="genre"
						id="genre"
						onChange={(e)=>setGenre(e.target.value)}
					>
						<option>Genre</option>
						<option value="adventure">Adventure</option>
			            <option value="comedy">Comedy</option>
			            <option value="crime">Crime</option>
			            <option value="fantasy">Fantasy</option>
			            <option value="historical">Historical</option>
			            <option value="horror">Horror</option>
			            <option value="romance">Romance</option>
			            <option value="sci-fi">Sci-fi</option>
			            <option value="thriller">Thriller</option>
			            <option value="western">Western</option>
			            <option value="animation">Animation</option>
			            <option value="drama">Drama</option>
			            <option value="documentary">Documentary</option>
					</select>
				</div>	
			)}
			<img
				src={content.img}
			    alt=""
	        />
	        <div className="info">
		        <img
		          src={content.imgTitle}
		          alt=""
		        />
		        <span className="desc">
		          	{content.desc}
		        </span>
		        <div className="buttons">
		        	<button className="play">
		        		<PlayArrowIcon/>
		        		<span>Play</span>
		        	</button>
		        	<button className="more">
		        		<InfoOutlinedIcon/>
		        		<span>Play</span>
		        	</button>
		        </div>
		    </div>

		</div>
	)
}

export default Featured