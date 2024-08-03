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
// import CGPAForm from "./components/StudentSide/Student Details/Student Details/CGPAForm";
import Cgpa from "./components/StudentSide/Student Details/Student Details/CGPA";
import StudentAchievement from "./components/StudentSide/Student Details/Student Details/StudentAchievement";
import Internship from "./components/StudentSide/Student Details/Student Details/Internships";
import PersonalD from "./components/StudentSide/Student Details/Student Details/PersonalD";

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
        <Route path="/PersonalD" element={<PersonalD />} />
        <Route path="/Internships" element={<Internship />} />
        <Route path="/StudentAchievement" element={<StudentAchievement />} />
        <Route path="/CGPA" element={<Cgpa />} />
      </Routes>
    </Router>
  );
}

export default App;
