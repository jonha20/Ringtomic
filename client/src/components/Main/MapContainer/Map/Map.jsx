import React, { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import axios from "axios";

const Map = ({ pitches }) => {
 const [coords, setValue] = useState();
 
 const handleAddFavorite = (courtId, courtName) => {
    console.log('Added to favorites:', courtId + ', ' + courtName);
    // Aquí puedes hacer una llamada a tu backend o actualizar estado
  };

  useEffect(() => {
    const fetchDefaultCity = async () => {
      try {
        const res = await axios.get(
          `https://ipinfo.io/json?token=${import.meta.env.VITE_LOCATION}`
        );
        const data = await res.data.loc;
        const loc = data.split(",").map(Number);
        //console.log(loc); // <-- Añade esto para depurar
        setValue(loc);
      } catch (error) {
        console.error("Error fetching location:", error);
        setValue([40.4168, -3.7038]);
      }
    };
    fetchDefaultCity();
  }, []);

 
  if (!coords) return null;
  return (
     <>
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
          pitches.map((feature, idx) => (
            <Marker
              key={idx}
              position={[
                feature.latitude,
                feature.longitude,
              ]}
            >
              <Popup>
                <div>
                  <strong>Campo:</strong>{" "}
                  {feature.type ?? "Sin dato"}
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
                   <button onClick={() => handleAddFavorite(feature.id, feature.name)}>
              ❤️ Añadir a favoritos
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
