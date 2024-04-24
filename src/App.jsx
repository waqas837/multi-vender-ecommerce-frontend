import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Home from "./components/Home";
import SellerProfile from "./components/Roles/SellerProfile";
import BuyerProfile from "./components/Roles/BuyerProfile";
import AdminLogin from "./components/Roles/Admin/AdminLogin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/seller/:userid" element={<SellerProfile />} />
          <Route exact path="/buyer/:buyerid" element={<BuyerProfile />} />
          <Route exact path="/Admin" element={<AdminLogin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
