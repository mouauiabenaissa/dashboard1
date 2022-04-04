import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import LoginForm from "./Pages/Login/LoginForm";
import SignUpForm from "./Pages/SignUp/SignUpForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route exact path="/signup" element={<SignUpForm />} />
        <Route exact path="/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
