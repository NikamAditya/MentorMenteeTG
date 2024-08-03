import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import RegistrationPage from "./components/Registrationpage";
import Dashboard from "./components/StudentSide/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import MentorDashboard from "./components/MentorSide/MentorDashboard";
import HodDashboard from "./components/HodSide/HodDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard />} />}
        />
        <Route
          path="/mentor-dashboard"
          element={<ProtectedRoute element={<MentorDashboard />} />}
        />
        <Route
          path="/hod-dashboard"
          element={<ProtectedRoute element={<HodDashboard />} />}
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
