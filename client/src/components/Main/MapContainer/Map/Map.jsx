import React, { useState, useEffect, useContext } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import axios from "axios";
import { UserContext } from "@/src/context/userContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

const Map = ({ pitches }) => {
  const [coords, setValue] = useState([40.4168, -3.7038]); // Valor por defecto
  const { user } = useContext(UserContext);
  const notify = (message, type) => toast[type](message); // Función para mostrar notificaciones
let iduser = user.id;
  const handleAddFavorite = async (idpitch, customname) => {
    try {
      // Hacer la petición para añadir a favoritos
      const response = await axios.post(
        "https://ringtomic.onrender.com/favorites/",
        {
          iduser,
          idpitch,
          customname,
        },
        { withCredentials: true }
      );

      if (response.status === 201) {
        console.log(response.data.msg);
        notify("Campo añadido a Favoritos", "success");
        console.log("Added to favorites:", idpitch + ", " + customname);
      }else {
        console.log("No se pudo añadir a favoritos");
      }
    } catch (error) {
       if (error.response && error.response.status === 500) {
      console.log("El campo ya está en favoritos");
      notify("El campo ya está en Favoritos", "error");
    } else {
      console.error("No se pudo añadir a favoritos:", error.message);
      notify("No se pudo añadir a favoritos", "error");
    }
    }
  };

  const handleReserve = async (idpitch) => {
    try {
      const response = await axios.put(
        `https://ringtomic.onrender.com/favorites/${idpitch}`,
        { withCredentials: true }
      );
      console.log("Campo reservado:", response.data);
    } catch (error) {
      console.error("Error al reservar el campo:", error);
    }
  };


useEffect(() => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setValue([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        console.error("No se pudo obtener la ubicación:", error);
        setValue([40.4168, -3.7038]); // Madrid
      }
    );
  } else {
    setValue([40.4168, -3.7038]); // Madrid
  }
}, []);


  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        progress={undefined}
        theme={"colored"}
      />
      <MapContainer
        className="full-map"
        center={coords}
        zoom={13}
        style={{ height: "70vh", width: "90%", borderRadius: "18px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {pitches &&
          pitches.map((feature) => (
            <Marker key={uuidv4()} position={[feature.latitude, feature.longitude]}>
              <Popup>
                <div>
                  <strong>Campo:</strong> {feature.type ?? "Sin dato"}
                  <br />
                  {feature.access && (
                    <>
                      <strong>Acceso:</strong> {feature.access}
                      <br />
                    </>
                  )}
                  {feature.reserved && (
                    <>
                      <strong>Reservado:</strong> {feature.reserved}
                      <br />
                    </>
                  )}
                  {feature.city && (
                    <>
                      <strong>Ciudad:</strong> {feature.city}
                      <br />
                    </>
                  )}
                  <button
                    onClick={() => {
                      handleAddFavorite(feature.id, feature.name);
                      
                    }}
                  >
                    ❤️ Añadir a favoritos
                  </button>
                  <button
                    onClick={() => {
                      handleReserve(feature.id);
                    }}
                  >
                    📅 Reservar Cancha
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </>
  );
};

export default Map;
