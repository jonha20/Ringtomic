import React, { useContext } from "react";
import axios from "axios";
import { UserContext } from "@/src/context/userContext";

const Favs = ({ favs, onButton }) => {
  const { user } = useContext(UserContext);

  const deleteFav = async () => {
    try {
      let iduser = user.id;
      let idpitch = favs[0].id;
      console.log("ID del usuario:", iduser);
      console.log("ID del pitch:", idpitch);
      const response = await axios.delete(
        `http://localhost:3000/favorites/`,
        {
          data: {
            iduser,
            idpitch,
          },
        },
        { withCredentials: true }
      );
      console.log("Campo eliminado:", response.data);
    } catch (error) {
      console.error("Error al eliminar el campo:", error);
    }
  };
// En update los datos van sin data{} ya que se envían como el body de la petición PUT
// En delete los datos van dentro de data{} porque se envían como el cuerpo de la petición 
  const updateFavName = async () => {
    try {
      let iduser = user.id;
      let idpitch = favs[0].id; 
      let customname = prompt("Introduce el nuevo nombre del campo:");
      const response = await axios.put(
        `http://localhost:3000/favorites/`,
        {
          iduser,
          idpitch,
          customname,
        },
        { withCredentials: true }
      );
      console.log("Campo eliminado:", response.data);
    } catch (error) {
      console.error("Error al eliminar el campo:", error);
    }
  };
// async await en botones para manejar las peticiones asincrónicas
// y poder actualizar el estado del componente después de realizar la acción
  return (
    <>
      <div className="fav-card">
            <p>Id: {favs[0].id}</p>
            <p>Provincia: {favs[0].state}</p>
            <p>Ciudad: {favs[0].city}</p>
            <p>Campo: {favs[0].customname}</p>
            <p>Acceso: {favs[0].access}</p>
              <div className="fav-card__actions">
            <button
              onClick={async () => {
                await updateFavName();
                if (onButton) onButton();
              }}
              className="Editar"
            >
              {" "}
              Editar Nombre
            </button>
            <button
              onClick={async () => {
                await deleteFav();
                if (onButton) onButton();
              }}
              className="Eliminar"
            >
              {" "}
              Eliminar Campo
            </button>
          </div>
       </div>
    </>
  );
};

export default Favs;
