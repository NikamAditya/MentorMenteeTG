import { useState , useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import RegistrationPage from './components/Registrationpage';
import Dashboard from './components/StudentSide/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import MentorDashboard from './components/MentorSide/MentorDashboard';
import HodDashboard from './components/HodSide/HodDashboard';

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route
          path="/"
          element = {<ProtectedRoute element={<Dashboard/>} />}
        />
        <Route
          path="/login"
          element = {<Login />}
        />
        <Route
          path="/registration"
          element = {<RegistrationPage/>}
        />
         <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard/>} />}
        />

        {/* ---------Mentor-side-routing---------- */}

        <Route 
          path = "/MentorDashboard"
          element = {<ProtectedRoute element={<MentorDashboard/>} />}
        />

        <Route 
          path = "/HodDashboard"
          element = {<ProtectedRoute element={<HodDashboard/>} />}
        />   



      </Routes>
    </Router>
      
    </>
  )
}

export default App
