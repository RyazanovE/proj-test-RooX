import React from "react";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import UserPage from "../pages/UserPage";



const MyRouter = () => {
  return (
    <div className="userlist-container">
      <div className="userlist">
        <HashRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
};

export default MyRouter;
