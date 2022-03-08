import{ createContext, useReducer} from "react";

const AuthContext = createContext();

const initialAuth = {
	user: null,
	isFetching: false,
	error:false,
};


const AuthProvider = ({children}) => {
	const [state, dispatch] = useReducer(reducer, initialAuth)
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