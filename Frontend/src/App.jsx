import React, { useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import AllBooks from "../src/pages/AllBooks";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import ViewBookDetails from "./components/viewBookDetails/ViewBookDetails";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth.js";
import Favourites from "./components/profile/Favourites.jsx";
import UserOrderHistory from "./components/profile/UserOrderHistory.jsx";
import Settings from "./components/profile/Settings.jsx";
const App = () => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);
  useEffect(() => {
    if (
      localStorage.getItem("id") &&
      localStorage.getItem("token") &&
      localStorage.getItem("role")
    ) {
      dispatch(authActions.login());
      dispatch(authActions.changeRole(localStorage.getItem("role")));
    }
  }, []);

  useEffect(() => {
    if (
      localStorage.getItem("id") &&
      localStorage.getItem("token") &&
      localStorage.getItem("role") === ""
    ) {
      dispatch(authActions.logout());
    }
  }, []);
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/all-books" element={<AllBooks />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />}>
            <Route index element={<Favourites />} />
            <Route
              path="/profile/orderhistory"
              element={<UserOrderHistory />}
            />
            <Route path="/profile/settings" element={<Settings />} />
          </Route>
          <Route path="/viewBookDetails/:id" element={<ViewBookDetails />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
