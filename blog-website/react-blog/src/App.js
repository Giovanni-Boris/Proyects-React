import Topbar from "./components/topbar/Topbar"
import Home from "./pages/home/Home"
import Settings from "./pages/settings/Settings"
import Single from "./pages/single/Single"
import Write from "./pages/write/Write"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import { useContext } from "react";
import AuthContext from "./context/AuthContext"
function App() {
  const {user} = useContext(AuthContext);
  return (
    <Router>
      <Topbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={user ? <Home/> : <Register/>}/>
        <Route path='/login' element={user ? <Home/> : <Login/>}/>
        <Route path='/write' element={user ? <Write/> : <Home/>}/>
        <Route path='/settings' element={user ? <Settings/> : <Home/>}/>
        <Route path='/post/:postId' element={<Single/>}/>
      </Routes>
    </Router>
  );
}

export default App;
