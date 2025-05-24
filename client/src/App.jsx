import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LogIn from "./Pages/LogIn/LogIn";
import SignUp from "./Pages/SignUp/SignUp";
import "normalize.css";
import { BrowserRouter } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { UserContext } from "./context/userContext";
import Profile from "./components/Main/Profile";



function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});
  const location = useLocation();

  useEffect(() => {
    const token = Cookies.get("access_token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch {
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
          <Route path="/login" element={<LogIn setIsLogged={setIsLogged} />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </UserContext.Provider>
      <Footer />
    </>
  );
}

export default App;
