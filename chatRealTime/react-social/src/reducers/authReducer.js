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
		case TYPES.FOLLOW:
			return{
				...state,
				user: {
					...state.user,
					followings: [...state.user.followings,action.payload],
				},
			}
		case TYPES.UNFOLLOW:
			return{
				...state,
				user: {
					...state.user,
					followings: state.user.followings.filter(
						(following)=>following!==action.payload
					),
				},
			}
		default:
			return state;
	}
}

