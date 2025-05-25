import React, { useContext } from "react";
import axios from "axios";
import { UserContext } from "@/src/context/userContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Favs = ({ favs, onButton, onDelete }) => {
  const { user } = useContext(UserContext);
  const notify = (message, type) => toast[type](message); // Función para mostrar notificaciones

  // Función para mostrar notificaciones

  const deleteFav = async () => {
    try {
      let iduser = user.id;
      let idpitch = favs.id;
      const response = await axios.delete(
        `https://ringtomic.onrender.com/favorites/`,
        {
          data: {
            iduser,
            idpitch,
          },
        },
        { withCredentials: true }
      );
      console.log("Campo eliminado:", response.data);
      if (onDelete) onDelete(); // Llama a la función onDelete
    } catch (error) {
      console.error("Error al eliminar el campo:", error);
    }
  };

  const updateFavName = async () => {
    try {
      let iduser = user.id;
      let idpitch = favs.id;
      let customname = favs.customname;

      await withReactContent(Swal).fire({
        title: <i>Introduce nuevo nombre</i>,
        input: "text",
        customClass: {
          confirmButton: "swal-confirm-button",
          cancelButton: "swal-cancel-button",
        },
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: "Guardar",
        preConfirm: () => {
          return (customname = Swal.getInput().value);
        },
      });

      const response = await axios.put(
        `https://ringtomic.onrender.com/favorites/`,
        {
          iduser,
          idpitch,
          customname,
        },
        { withCredentials: true }
      );
      console.log("Campo actualizado:", response.data);
    } catch (error) {
      console.error("Error al actualizar el campo:", error);
    }
  };

  const reserveFav = async () => {
    try {
      const response = await axios.put(
        `https://ringtomic.onrender.com/favorites/${favs.id}`,
        { withCredentials: true }
      );
      console.log("Campo reservado:", response.data);
    } catch (error) {
      console.error("Error al reservar el campo:", error);
    }
  };

  return (
    <>
      <article className="fav-card">
        <p>Id: {favs.id}</p>
        <p>Provincia: {favs.state}</p>
        <p>Ciudad: {favs.city}</p>
        <p>Campo: {favs.customname}</p>
        <p>Acceso: {favs.access}</p>
        <p>Reservado: {favs.reserved ? "Sí" : "No"}</p>
        <div className="fav-card__actions">
          <button
            onClick={async () => {
              await updateFavName();
              if (onButton) onButton();
              notify("Nombre actualizado", "info");
            }}
            className="Editar"
          >
            Editar Nombre
          </button>
          <button
            onClick={async () => {
              try {
                await deleteFav();
                if (onButton) await onButton();
                notify("Campo eliminado de favoritos", "warning");
              } catch (error) {
                notify("Error al reservar el campo", "error");
              }
            }}
            className="Eliminar"
          >
            Eliminar Campo
          </button>
          <button
            onClick={async () => {
              try {
                await reserveFav();
                if (onButton) await onButton();
                notify("Campo reservado", "success");
              } catch (error) {
                notify("Error al reservar el campo", "error");
              }
            }}
            className="Reservar"
          >
            Reservar Campo
          </button>
        </div>
      </article>
    </>
  );
};

export default Favs;
