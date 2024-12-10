import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SignUpPage from "./components/Common/Signuppage";
import Weather from "./components/Common/Weather";
import DashboardHome from "./components/Dashboard/DashboardHome";
import MqttDashboard from "./components/Dashboard/Mqttt/Mqttdashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/dashboard" element={<DashboardHome />} />
      <Route path="/mqttdashboard" element={<MqttDashboard />} />
    </Routes>
  );
}

export default App;
