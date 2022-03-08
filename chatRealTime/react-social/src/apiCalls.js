import axios from "axios"

import {TYPES} from "./actions/authActions";

export const loginCall = async (userCredentials, dispatch)=>{
	dispatch({ type: TYPES.LOGIN_START });
	try{
		const res = await axios.post("auth/login",userCredentials);
		dispatch({ type: TYPES.LOGIN_SUCCESS, payload: res.data });
	} catch(err){
		dispatch({ type: TYPES.LOGIN_FAILURE ,payload: err });
	}
}