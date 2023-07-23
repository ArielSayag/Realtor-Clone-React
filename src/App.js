import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SingIn from "./pages/SingIn";
import SingUp from "./pages/SingUp";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";

function App(){
  return(
    <>
      <Router>
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/profile" element={<Profile/>} />
          <Route  path="/offers" element={<Offers/>} />
          <Route  path="/sing-in" element={<SingIn/>} />
          <Route  path="/sing-up" element={<SingUp/>} />
          <Route  path="/forgot-password" element={<ForgotPassword/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;