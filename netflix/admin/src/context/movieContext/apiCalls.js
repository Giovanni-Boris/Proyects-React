import axios from "axios"
import { 
	getMoviesStart, 
	getMoviesSuccess, 
	getMoviesFailure,
	deleteMovieStart,
	deleteMovieFailure,
	deleteMovieSuccess, 
} from "./movieActions";

export const getMovies = async (dispatch) =>{
	dispatch(getMoviesStart());

	try{
		const res = await axios.get("/movies", {
	      headers: {
	        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
	      },
	    });
	    dispatch(getMoviesSuccess(res.data));
	}catch(err){
		dispatch(getMoviesFailure());
	}
}

//delete
export const deleteMovie = async (id,dispatch) =>{
	dispatch(deleteMovieStart());

	try{
		const res = await axios.delete("/movies/"+id, {
	      headers: {
	        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
	      },
	    });
	    dispatch(deleteMovieSuccess(id));
	}catch(err){
		dispatch(deleteMovieFailure());
	}
}