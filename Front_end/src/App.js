import './App.css';
import {Routes,Route, Navigate} from "react-router-dom"
import HomePage from "./pages/homepage/HomePage"
import Signup from './pages/signup/Signup';
import Login from "./pages/login/Login"
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';
import Otp_verify from './pages/signup/Otp_verify';

function App() {

  const {authuser} = useAuthContext()
  return (
    <div className="bg-login-bg w-full bg-cover bg-bottom bg-no-repeat p-4 h-screen flex  justify-center items-center">
      <Routes>
        <Route path="/" element={ authuser ? <HomePage /> : < Navigate to={"/login"} />} />
        <Route path="/login" element={authuser ? <Navigate to='/' /> : <Login />} />
        <Route path="/signup" element={authuser ? <Navigate to='/' /> : <Signup />} />
        <Route path='/otp_verify' element={<Otp_verify />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;