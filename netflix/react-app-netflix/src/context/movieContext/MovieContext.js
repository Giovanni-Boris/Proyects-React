import { createContext, useState } from "react";
 const INITIAL_STATE = null;
export const MovieContext = createContext();

export const MovieContextProvider = ({children}) => {
	const [movie, setMovie] = useState(INITIAL_STATE);
	const data = {
		movie,
		setMovie,
	}
	return(
		<MovieContext.Provider value={data}>{children}</MovieContext.Provider>
	)
}