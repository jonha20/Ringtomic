import { useState,useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer/Footer.jsx'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import "normalize.css";
import { BrowserRouter } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { UserContext } from "./context/userContext";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});

  // Leer token de la cookie
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
  }, []);
  // Comprobar si el usuario está logueado
  console.log(user);

  // Hook para saber la ruta actual
  const location = window.location.pathname;

  // Oculta el header en login y signup
  const hideHeader = location === "/login" || location === "/signup";

  return (
    <>
      <UserContext.Provider value={{user}}>
      <BrowserRouter>
        {!hideHeader && <Header />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LogIn setIsLogged={setIsLogged} />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}

export default App
