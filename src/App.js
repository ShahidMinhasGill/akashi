import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { darkTheme, lightTheme } from './config/Themes'
import { GlobalStyles } from './config/GlobalStyles'

import Footer from './pages/footer/Footer'
import Header from './pages/header/Header'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [theme, setTheme] = React.useState(darkTheme)

  const toggleTheme = () => {
    setTheme(theme === darkTheme ? lightTheme : darkTheme)
  }
  // const toggleTheme = () => {
  //   if (theme === "dark") {
  //     setTheme("light");
  //     setLogos(logo);
  //   } else {
  //     setTheme("dark");
  //     setLogos(logo1);

  //   }
  // }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <>
          <Route index path="/" element={<Home />} />
        </>
      </Routes>
      <Footer />
    </ThemeProvider>
  )
}

export default App
