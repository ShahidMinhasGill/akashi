import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { darkTheme, lightTheme } from './config/Themes'
import { GlobalStyles } from './config/GlobalStyles'

import Footer from './pages/footer/Footer'
import Header from './pages/header/Header'
import Home from './pages/home/Home'
import mditwitterlite from './assets/icons/mdi_twitter.svg';
import twitterblack from './assets/icons/twitterblack.svg';
import telegramlite from './assets/icons/telegram.svg';
import telegramblack from './assets/icons/telegramblack.svg';
import discord from './assets/icons/discord.svg';
import discordblack from './assets/icons/discordblack.svg';
import reddit from './assets/icons/reddit.svg';
import redditblack from './assets/icons/redditblack.svg';
import github from './assets/icons/github.svg';
import githubblack from './assets/icons/githubblack.svg';
import paper from './assets/icons/paper.svg';
import paperblack from './assets/icons/paperblack.svg';
import arrow from './assets/icons/arrow.svg';
import arrowblack from './assets/icons/arrowblack.svg';
import litemode from './assets/icons/material-symbols_settings-night-sight.svg';
import darkmod from './assets/icons/darkmod.svg';
import { Route, Routes } from 'react-router-dom'

function App() {
  const [theme, setTheme] = useState('dark')
  const [DarkLiteMode, setDarkLiteMode] = useState(darkmod);
  const [twitter, setMditwitter] = useState(mditwitterlite);
  const [telegramIcon, setTelegramIcon] = useState(telegramlite);
  const [discordIcon, setDiscordIcon] = useState(discord);
  const [redditIcon, setRedditIcon] = useState(reddit);
  const [githubIcon, setGithubIcon] = useState(github);
  const [paperIcon, setPaperIcon] = useState(paper);
  const [arrowIcon, setArrowIcon] = useState(arrowblack);

  
  const toggleTheme = () => {
    if (theme === "dark") {
      setMditwitter(twitterblack);
      setTelegramIcon(telegramblack);
      setDiscordIcon(discordblack);
      setRedditIcon(redditblack);
      setGithubIcon(githubblack);
      setPaperIcon(paperblack);
      setArrowIcon(arrow)
      setDarkLiteMode(litemode)
      setTheme("light");
    } else {
      setMditwitter(mditwitterlite)
      setTelegramIcon(telegramlite)
      setDiscordIcon(discord)
      setRedditIcon(reddit)
      setGithubIcon(github)
      setPaperIcon(paper)
      setArrowIcon(arrowblack)
      setDarkLiteMode(darkmod)
      setTheme("dark");

    }
    
 
  }
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header theme={theme} DarkLiteMode={DarkLiteMode} arrowIcon={arrowIcon} toggleTheme={toggleTheme} />
      <Routes>
        <>
          <Route index path="/" element={<Home />} />
        </>
      </Routes>
      <Footer twitter={twitter} telegramIcon={telegramIcon} 
      discordIcon={discordIcon} redditIcon={redditIcon} githubIcon={githubIcon} paperIcon={paperIcon}/>
    </ThemeProvider>
  )
}

export default App
