//import Login from "./pages/login/Login";
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom'
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/dashboard/Dashboard"
function App() {
  //const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin ;
  return (
    <Router>
      <Routes>
        {/*<Route path="/login" element={<Login/>}/>*/}
        <Route 
            path="/dashboard/*" 
            element={<PrivateRoute><Dashboard/></PrivateRoute>}
        />
      </Routes>
    </Router>

  );
}

export default App;
 
