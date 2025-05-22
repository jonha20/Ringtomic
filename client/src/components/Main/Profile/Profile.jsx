import React from "react";
import { useState, useEffect } from "react";
import ProfileInfo from "./ProfileInfo";
import Favs from "./Favs";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

const Profile = () => {
  const [user, setUser] = useState([]);
  const [favorites, setFavorites] = useState([]);

  //Leer token de la cookie
      const token = Cookies.get("access_token");
  
      if (!token) {
        console.log("No se encontró el token en la cookie");
        return;
      }else{
        const decoded = jwtDecode(token);
      }
     

 useEffect(() => {
  const fetchUser = async () => {
    try {
      const response = await fetch(`http://localhost:3000/users/${jwtDecode(token).id}`, {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  fetchUser();
}, []); // <-- SOLO una vez al montar

useEffect(() => {
  const fetchFavs = async () => {
    try {
      const response = await fetch(`http://localhost:3000/favorites/search?email=${decoded.email}&location=`, {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      setFavorites(data);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  };

  fetchFavs();
}, []); // <-- SOLO una vez al montar

  return <>
      <ProfileInfo userInfo={user}/>
      <Favs userFavorites={favorites}/>
  </>;
};

export default Profile;
