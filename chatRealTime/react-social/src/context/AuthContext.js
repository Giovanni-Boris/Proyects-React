import{ createContext, useReducer, useEffect} from "react";
import {authReducer} from "../reducers/authReducer";
const AuthContext = createContext();

const initialAuth = {
	user: JSON.parse(localStorage.getItem("user")) || null,
	isFetching: false, 
	error:false,

};


const AuthProvider = ({children}) => {
	const [state, dispatch] = useReducer(authReducer, initialAuth)
	useEffect(()=>{
    	localStorage.setItem("user", JSON.stringify(state.user))
  	},[state.user])
  	
	const data = {
		user: state.user,
		isFetching: state.isFetching,
		error: state.error,
		dispatch,
	};
	return (
		<AuthContext.Provider value={data}>{children}</AuthContext.Provider>
	)
}
export {AuthProvider};
export default AuthContext;