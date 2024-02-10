// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import NotFound from "./NotFound";
import Dashboard from "./Dashboard";
import CreateUser from "./NewUser"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/CreateUser" element={<CreateUser />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
