import React from 'react';
import GlobalStyle from './globalStyles';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
//Pages
import Home from './pages/Home';
import SignUp from './pages/SignUpPage';
import Pricing from './pages/PricingPage';
 function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
      </Routes>
    </Router>
  );
}

export default App;
