import { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";
const INITIAL_STATE = {
	darkMode: false
}

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({children}) => {
	const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

	const data = {
		darkMode: state.darkMode,
		dispatch
	}

	return (
		<DarkModeContext.Provider value={data}>{children}</DarkModeContext.Provider>
	)
}