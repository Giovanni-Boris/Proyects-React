import {TYPES} from "../actions/authActions";

export function authReducer(state,action){
	switch(action.type){
		case TYPES.LOGIN_START:
			return{
				user:null,
				isFetching:true,
				error:false,
			};
		case TYPES.LOGIN_SUCCESS:
			return{
				user:action.payload,
				isFetching:false,
				error:false,
			};
		case TYPES.LOGIN_FAILURE:
			return{
				user:null,
				isFetching:true,
				error:true,
			};
		case TYPES.UPDATE_START:
			return{
				...state,
				isFetching:true
			};
		case TYPES.UPDATE_SUCCESS:
			return{
				user:action.payload,
				isFetching:false,
				error:false,
			};
		case TYPES.UPDATE_FAILURE:
			return{
				user:state.user,
				isFetching:false,
				error:true,
			};
		case TYPES.LOGOUT:
			return{
				user:null,
				isFetching:false,
				error:false,
			};
		default:
			return state;
	}
}