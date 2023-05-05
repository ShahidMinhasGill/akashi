import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../pages/footer/Footer";
import Header from "../pages/header/Header";
import Home from "../pages/home/Home";



const MainRoutes = () => {

  return (
  <>
    <Header />
    <Routes>
      {/* main App routing */}
        <Route index path="/" element={<Home />} />
    </Routes>
    <Footer />
  </>
  );
};

export default MainRoutes;
