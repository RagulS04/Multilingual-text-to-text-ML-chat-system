import './App.css';

import HomePage from "./pages/homepage/homepage"
//import Signup from './pages/signup/signup';
//import login from "./assets/animation/login.json"

function App() {
  return (
    <div className="bg-login-bg w-full bg-cover bg-bottom bg-no-repeat p-4 h-screen flex  justify-center items-center">
      <HomePage />
    </div>
  );
}

export default App;