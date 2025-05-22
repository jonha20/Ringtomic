import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer/Footer.jsx'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import "normalize.css";

import { BrowserRouter } from 'react-router-dom';
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
