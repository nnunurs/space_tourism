import React, { useState } from 'react';
import './App.css';
import Home from "./pages/Home"
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Tech from './pages/Tech';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import defaultBg from "./assets/home/background-home-desktop.jpg"

function App() {
  const [bg, setBg] = useState(defaultBg)

  function changeBg(bg: any) {
    setBg(bg)
    console.log(bg)
  }

  return (
    <div style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "100vh", width: "100vw"}}>
      <BrowserRouter>
        <Navbar changeBg={changeBg} />
        <Content />
      </BrowserRouter>
    </div>
  )
}

function Content() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransitionStage] = useState("fadeIn")

  useEffect(() => {
    if (location !== displayLocation) setTransitionStage("fadeOut")
  }, [location, displayLocation])


  return (
    <div className={`${transitionStage}`} onAnimationEnd={() => {
      if (transitionStage === "fadeOut") {
        setTransitionStage("fadeIn")
        setDisplayLocation(location)
      }
    }}>
      <Routes location={displayLocation}>
        <Route path="" element={<Home />} />
        <Route path="dest" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="tech" element={<Tech />} />
      </Routes>
    </div>
  )
}

export default App;
