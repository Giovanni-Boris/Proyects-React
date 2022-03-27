import axios from "axios"
import { getMoviesStart, getMoviesSuccess, getMoviesFailure } from "./authActions";

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