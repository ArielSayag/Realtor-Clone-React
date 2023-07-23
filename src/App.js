import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import './index.css';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Header from "./components/Header";
function App(){
  return(
    <>
      <Router>
        <Header />
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/profile" element={<Profile/>} />
          <Route  path="/offers" element={<Offers/>} />
          <Route  path="/sign-in" element={<SignIn/>} />
          <Route  path="/sign-up" element={<SignUp/>} />
          <Route  path="/forgot-password" element={<ForgotPassword/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;