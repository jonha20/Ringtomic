import React, { useContext } from "react";
import { useState, useEffect } from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Favs from "./Favs";
import axios from "axios";
import { UserContext } from "@/src/context/userContext";
import { useDebounce } from "use-debounce";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const [favorites, setFavorites] = useState([]);
  const [searchFavs, setSearchFavs] = useState("");
  const { user } = useContext(UserContext);
  const [debouncedText] = useDebounce(searchFavs, 2000);
  const notify = (message, type) => toast[type](message); // Función para mostrar notificaciones

  const fetchFavs = async () => {
    try {
      const response = await axios.get(
        `https://ringtomic.onrender.com/favorites/search?email=${user.email}&location=${searchFavs}`,
        { withCredentials: true }
      );
      setFavorites(response.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        window.location.href = "/login"; // Redirige al login si no está autenticado
      }
      if (error.response && error.response.status === 404) {
        notify("No se encontraron favoritos", "warning");
      }
      console.error("Error fetching favorites:", error);
    }
  };

  useEffect(() => {
    fetchFavs();
  }, [debouncedText, user]); // Ejecuta cuando user cambie

  const handleChange = (e) => {
    setSearchFavs(e.target.value);
  };

  // Función para manejar la eliminación
  const handleDelete = async () => {
    setSearchFavs(""); // Vacía el input de búsqueda
  };

  //ToastContainer para se pone en el componente principal y se llama desde onbutton que se pasa como prop 

  return (
    <>
      <ToastContainer />
      <ProfileInfo />
      <h2>Favoritos</h2>
      <section className="profile-search-input">
        <input
          type="text"
          name="name"
          value={searchFavs}
          onChange={handleChange}
          placeholder="Search City"
        />
      </section>
      {favorites && favorites.length > 0 ? (
        <section className="favs-list">
          {favorites.map((fav) => (
            <Favs
              key={uuidv4()}
              favs={fav}
              onButton={fetchFavs}
              onDelete={handleDelete} 
            />
          ))}
        </section>
      ) : (
        <section className="no-favorites">
          <h2>No tienes favoritos</h2>
        </section>
      )}
    </>
  );
};

export default Profile;
