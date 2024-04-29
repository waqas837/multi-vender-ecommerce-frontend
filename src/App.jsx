import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Home from "./components/Home";
import SellerProfile from "./components/Roles/SellerProfile";
import BuyerProfile from "./components/Roles/BuyerProfile";
import AdminLogin from "./components/Roles/Admin/AdminLogin";
import SellerInbox from "./components/Roles/SellerInbox";
import BuyerInbox from "./components/Roles/BuyerInbox";
import { SocketProvider } from "./components/Socketio/SocketContext";
import BookingOrder from "./components/Orders/BuyerBookingOrder";
import SellerOrders from "./components/Orders/SellerOrders";
import Payment from "./components/Orders/Payment";

function App() {
  return (
    <>
      <SocketProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/seller/:userid" element={<SellerProfile />} />
            <Route
              exact
              path="/seller/inbox/:userid"
              element={<SellerInbox />}
            />
            <Route exact path="/buyer/inbox/:userid" element={<BuyerInbox />} />
            <Route exact path="/buyer/:buyerid" element={<BuyerProfile />} />
            <Route exact path="/Admin" element={<AdminLogin />} />
            <Route exact path="/orderBook" element={<BookingOrder />} />
            <Route exact path="/sellerOrders" element={<SellerOrders />} />
            <Route exact path="/payment" element={<Payment />} />
          </Routes>
        </Router>
      </SocketProvider>
    </>
  );
}

export default App;
