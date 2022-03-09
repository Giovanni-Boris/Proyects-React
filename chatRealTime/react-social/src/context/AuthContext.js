import{ createContext, useReducer} from "react";
import {authReducer} from "../reducers/authReducer";
const AuthContext = createContext();

const initialAuth = {
	user:{
		_id:"62247bb17bd40d303d6da510",	
		username:"boris",
		email:"boris@gmail.com",
		password:"123456",
		profilePicture:"person/1.jpeg",
		coverPicture:"",
		followers:[],
		isAdmin:false,
		followings:[],
		isFetching: false, 
		error:false,
	}
};


const AuthProvider = ({children}) => {
	const [state, dispatch] = useReducer(authReducer, initialAuth)
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