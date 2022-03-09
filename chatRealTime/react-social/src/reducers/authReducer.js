import {TYPES} from "../actions/authActions";

export function authReducer(state, action){
	switch(action.type){
		case TYPES.LOGIN_START:
			return{
				user: null,
				isFetching: true,
				error: false,
			};
		case TYPES.LOGIN_SUCCESS:
			return{
				user: action.payload,
				isFetching: false,
				error: false,
			}
		case TYPES.LOGIN_FAILURE:
			return{
				user: null,
				isFetching: false,
				error: action.payload,
			}
		default:
			return state;
	}
}
