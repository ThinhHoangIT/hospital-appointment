import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Appointment from "./Pages/Appointment/Appointment";
import SignUp from "./Pages/Login/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointments from "./Pages/Dashboard/MyAppointments";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Notfound from "./Pages/Shared/Notfound";
import Footer from "./Pages/Shared/Footer";
import Profile from "./Pages/Dashboard/Profile";
import ForgotPassword from "./Pages/Login/ForgotPass";
import ResetPassword from "./Pages/Login/ResetPass";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="appointment" element={<Appointment />} />

        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<MyAppointments />}></Route>
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password/:token" element={<ResetPassword />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
