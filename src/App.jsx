import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from "./pages/Login"
import Signup from './pages/SignUp'
import ForgetPassword from './pages/ForgetPassword'
import ResetPassword from './pages/ResetPassword'
import LoginSuccessful from './pages/LoginSuccessful'
import VerificationSuccess from './pages/VerificationSuccess'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' Component={Login}></Route>
        <Route path='/signup' Component={Signup}></Route>
        <Route path='/verification-success/:token' Component={VerificationSuccess}></Route>
        <Route path='/forgot' Component={ForgetPassword}></Route>
        <Route path='/reset/:token' Component={ResetPassword}></Route>
        <Route path='/LoginSuccess' Component={LoginSuccessful}></Route>
      </Routes>
    </div>
  )
}

export default App
