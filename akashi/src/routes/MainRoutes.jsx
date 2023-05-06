import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../pages/footer/Footer";
import Header from "../pages/header/Header";
import Home from "../pages/home/Home";
import { ThemeProvider } from "react-bootstrap";
import { darkTheme, lightTheme } from "../config/Themes";

const MainRoutes = () => {
  const [theme, setTheme] = useState("dark");
  // let [logos, setLogos] = useState(logo1);
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      // setLogos(logo);
    } else {
      setTheme("dark");
      // setLogos(logo1);

    }
  };
  
  return (
    <>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <Header
          theme={theme}
          // logos={logos}
          toggleTheme={toggleTheme}
        />
        <Routes>
          {/* main App routing */}
          <Route index path="/" element={<Home />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default MainRoutes;
