import movieReducer from "./movieReducer";
import { createContext, useReducer } from "react";
 const INITIAL_STATE = {
	movies: [],
	isFetching: false,
	error: false,
}

export const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(movieReducer, INITIAL_STATE);

	const data = {
		movies: state.movies,
		isFetching: state.isFetching,
		error : state.error,
		dispatch
	}
	return(
		<MovieContext.Provider value={data}>{children}</MovieContext.Provider>
	)
}