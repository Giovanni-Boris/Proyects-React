import { Navigate} from 'react-router-dom'

const auth = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin ;

const PrivateRoute = ({children}) => {

	return(auth ? children : <Navigate to="/login"/>);
}
//simular autenticacion


export default PrivateRoute