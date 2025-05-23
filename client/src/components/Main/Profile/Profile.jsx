import React, { useContext } from "react";
import { useState, useEffect } from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Favs from "./Favs";
import { UserContext } from '@/src/context/userContext';

import { v4 as uuidv4 } from "uuid";


const Profile = () => {
  const [favorites, setFavorites] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user || !user.email) return; // Espera a que user esté listo

    const fetchFavs = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/favorites/${user.email}`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        const data = await response.json();
        setFavorites(data);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchFavs();
  }, [user]); // Ejecuta cuando user cambie
   console.log(favorites);

  return (
    <>
      <ProfileInfo />
      <h2>Favoritos</h2>
       {favorites && favorites.length > 0 ? (
          favorites.map((fav) => (
            <Favs key={uuidv4()} favs={[fav]} />
          ))
        ) : (
          <div className="no-favorites">
            <h2>No tienes favoritos</h2>
          </div>
        )}
    </>
  );
};

export default Profile;
