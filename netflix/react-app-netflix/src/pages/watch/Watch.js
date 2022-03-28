import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Link } from "react-router-dom";
import "./watch.scss"
import { useContext } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext"; 
const Watch = () => {
	const {movie} = useContext(MovieContext);
	console.log(movie);
	return (
		<div className="watch">
			<Link to="/">
				<div className="back">
					<ArrowBackOutlinedIcon/>
					Home
				</div>
			</Link>
			<video
		        className="video"
		        autoPlay
		        progress
		        controls
				src={movie?.video}		     
			/>
			
		</div>
	)
}

export default Watch