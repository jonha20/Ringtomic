import React, { useContext } from "react";
import { useState, useEffect } from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Favs from "./Favs";
import axios from "axios";
import { UserContext } from '@/src/context/userContext';

import { v4 as uuidv4 } from "uuid";


const Profile = () => {
  const [favorites, setFavorites] = useState([]);
  const [searchFavs, setSearchFavs] = useState("");
  const { user } = useContext(UserContext);

 const fetchFavs = async () => {
  try {
    const response = await axios.get(
      ` http://localhost:3000/favorites/search?email=${user.email}&location=${searchFavs}`,
      { withCredentials: true }
    );
    setFavorites(response.data);
  } catch (error) {
    console.error("Error fetching favorites:", error);
  }
};

  useEffect(() => {
    fetchFavs();
  }, [user]); // Ejecuta cuando user cambie

  return (
    <>
      <ProfileInfo />
      <h2>Favoritos</h2>
      <input type="text" placeholder="Search favorites" />
       {favorites && favorites.length > 0 ? (
        <div className="favs-list">
          {favorites.map((fav) => (
            <Favs key={uuidv4()} favs={[fav]} onButton={fetchFavs}/>
          ))}</div>
        ) : (
          <div className="no-favorites">
            <h2>No tienes favoritos</h2>
          </div>
        )}
    </>
  );
};

export default Profile;
