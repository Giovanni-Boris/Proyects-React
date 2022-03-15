import { createContext, useReducer} from "react";
import {authReducer} from "../reducers/authReducer";

const AuthContext = createContext();

const INITIAL_STATE = {
	user:null,
	isFetching:false,
	error:false,
}

const AuthProvider = ({children}) => {
	const [state, dispatch] = useReducer(authReducer, INITIAL_STATE)
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

export {AuthProvider};

export default AuthContext;

