import { Navigate} from 'react-router-dom'
import { AuthContext } from "../context/authContext/AuthContext";
import { useContext } from 'react';

const PrivateRoute = ({children}) => {
  	const { user } = useContext(AuthContext);

	return(user ? children : <Navigate to="/login"/>);
}
//simular autenticacion


export default PrivateRoute