import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './index.css'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
