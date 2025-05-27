import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./contextApi/Layout";
import Home from "./contextApi/Home";
import Login from "./contextApi/Login";
import SignUp from "./contextApi/SingUp";
import UserStore from "./store/UserStore";

const ContextApp = () => {
  return (
    <UserStore>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </UserStore>
  );
};

export default ContextApp;
