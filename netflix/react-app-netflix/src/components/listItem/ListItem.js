import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import { useState, useEffect} from "react";
import "./listItem.scss"
import axios from "axios";
import { Link } from 'react-router-dom'
const ListItem = ({index,item}) => {
	const [isHovered, setIsHovered] = useState(false);	
	const [movie, setMovie] = useState({});
	useEffect(() => {
		const getMovie = async () => {
			try{
				const res = await axios.get("/movies/find/"+item,{
					headers:{
						token: 
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2Y0YTAyZGUxZTI1YjI2MDIyMGU4ZiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDgzMTQ4ODgsImV4cCI6MTY0ODc0Njg4OH0.OghkecC5d2dtFa1c2gfzjQF5UGCTiX9gU4bYrK4O3Tk"
					},
				});
				//console.log(res.data);
				setMovie(res.data);
			} catch(err){
				console.log(err)
			}
		};
		getMovie();
	}, [item]);
	return (
		<Link to={{pathname:"/watch" , movie: movie}}>
			<div 
				className="listItem"
				style={{left: isHovered && index * 225 - 50 + index * 2.5}}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<img
			        src={movie.img}
			        alt=""
			    />	
			    {isHovered && (
		        	<>
		        		<video src={movie.trailer} autoPlay={true} loop />
					    <div className="itemInfo">
					    	<div className="icons">
					    		<PlayArrowIcon className="icon"/>
					    		<AddIcon className="icon"/>
					    		<ThumbUpAltOutlinedIcon className="icon"/>
					    		<ThumbDownOutlinedIcon className="icon"/>
					    	</div>
					    	<div className="itemInfoTop">
					    		<span>{movie.duration}</span>
					    		<span className="limit">+{movie.limit}</span>
					    		<span>{movie.year}</span>
					    	</div>
					    	<div className="desc">
					    		{movie.desc}
				            </div>
				            <div className="genre">{movie.genre}</div>
					    </div>	
					</>	
				)}

			</div>
		</Link>
	)
}

export default ListItem