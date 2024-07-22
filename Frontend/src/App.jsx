import { useState , useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import RegistrationPage from './components/Registrationpage';
import Dashboard from './components/Dashboard';

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route
          path="/"
          element = {<Login />}
        />
        <Route
          path="/registration"
          element = {<RegistrationPage/>}
        />
         <Route
          path="/registration"
          element = {<RegistrationPage/>}
        />
         <Route
          path="/dashboard"
          element = {<Dashboard/>}
        />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
