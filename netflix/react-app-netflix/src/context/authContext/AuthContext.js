import authReducer from "./authReducer";
import { useEffect, createContext, useReducer } from "react";
 const INITIAL_STATE = {
	user: JSON.parse(localStorage.getItem("user")) || null,
	isFetching: false,
	error: false,
}

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
	const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);
	useEffect(() => {
		console.log("saving data");
		localStorage.setItem("user", JSON.stringify(state.user))
	}, [state.user])
	const data = {
		user: state.user,
		isFetching: state.isFetching,
		error : state.error,
		dispatch
	}
	return(
		<AuthContext.Provider value={data}>{children}</AuthContext.Provider>
	)
}