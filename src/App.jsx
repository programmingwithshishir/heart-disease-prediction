import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login";
import HomePage from "./components/Home";
import SignupPage from "./components/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </Router>
  )
}

export default App
