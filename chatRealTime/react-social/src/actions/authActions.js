export const TYPES = {
	LOGIN_START:"LOGIN_START",
	LOGIN_SUCCESS:"LOGIN_SUCCESS",
	LOGIN_FAILURE:"LOGIN_FAILURE",
};

export const LoginStart = (userCredentials)=>({
	type: TYPES.LOGIN_START,
});

export const LoginSuccess = (user)=>({
	type: TYPES.LOGIN_SUCCESS,
	payload: user,
});

export const LoginFailure = (error)=>({
	type: TYPES.LOGIN_FAILURE,
	payload: error,
});