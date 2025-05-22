import React, { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
const Map = ({ pitches }) => {
  const [coords, setValue] = useState([40.4168, -3.7038]); // Valor por defecto

  const handleAddFavorite = async (idpitch, customname) => {
    //Leer token de la cookie
    const token = Cookies.get("access_token");

    if (!token) {
      console.log("No se encontró el token en la cookie");
      return;
    }
    // Decodificar el token para obtener el id del usuario
    let iduser;
    try {
      const decoded = jwtDecode(token);
      iduser = decoded.id;
      console.log("ID del usuario:", iduser);
    } catch (e) {
      console.log("Error decodificando el token:", e.message);
      return;
    }

    if (!iduser) {
      console.log("No se pudo obtener el id del usuario");
      return;
    }
    try {
      const request = await axios({
        method: "post",
        url: "http://localhost:3000/favorites/",
        data: {
          iduser,
          idpitch,
          customname,
        },
        withCredentials: true,
      });

      if (request.status === 201) {
        console.log(request.data.msg);
        console.log("Added to favorites:", idpitch + ", " + customname);
      }
    } catch (error) {
      console.error(error.response.data);
    }
  };

  useEffect(() => {
    const fetchDefaultCity = async () => {
      try {
        const res = await axios.get(
          `https://ipinfo.io/json?token=${import.meta.env.VITE_LOCATION}`
        );
        const data = await res.data.loc;
        const loc = data.split(",").map(Number);
        setValue(loc);
      } catch (error) {
        console.error("Error fetching location:", error);
        setValue([40.4168, -3.7038]);
      }
    };
    fetchDefaultCity();
  }, []);

  // Componente para mover el mapa cuando cambian las coords
  function ChangeView({ center }) {
    const map = useMap();
    useEffect(() => {
      if (center) {
        map.setView(center);
      }
    }, [center, map]);
    return null;
  }

  return (
    <MapContainer
      className="full-map"
      center={coords}
      zoom={13}
      style={{ height: "70vh", width: "90%", borderRadius: "18px" }}
    >
      <ChangeView center={coords} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {pitches &&
        pitches.map((feature, idx) => (
          <Marker key={idx} position={[feature.latitude, feature.longitude]}>
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
                <button
                  onClick={() => handleAddFavorite(feature.id, feature.name)}
                >
                  ❤️ Añadir a favoritos
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
};

export default Map;
