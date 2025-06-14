import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LogIn from "./Pages/LogIn/LogIn";
import SignUp from "./Pages/SignUp/SignUp";
import "normalize.css";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { UserContext } from "./context/userContext";
import Profile from "./components/Main/Profile";


function App() {
  const [user, setUser] = useState({});
  const location = useLocation();

useEffect(() => {
  //const token = Cookies.get("access_token");
  const token = sessionStorage.getItem("access_token");
  console.log("Token en cookie:", token);
  if (token) {
    try {
      const decoded = jwtDecode(token);
      setUser(decoded);
    } catch (error) {
      console.error("Error decodificando token:", error);
      setUser(null);
    }
  } else {
    setUser(null);
  }
}, [location]); // se ejecuta cada vez que cambie la ruta

  const hideHeader = location.pathname === "/login" || location.pathname === "/signup"; //esto oculta el header en las rutas de login y signup

  return (
    <>
      {!hideHeader && <Header />}
      <UserContext.Provider value={{ user }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<LogIn  />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </UserContext.Provider>
      <Footer />
    </>
  );
}

export default App;
