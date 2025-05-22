import React, { useState, useEffect } from "react";
import Search from "./Search";
import Map from "./Map";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const MapContainer = () => {
  const [pitches, setPitches] = useState([]);
  const [search, setSearch] = useState("");
console.log(search);
  useEffect(() => {
    const fetchPitches = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/pitches/search?location=${search}`);
        setPitches(response.data);
      } catch (error) {
        console.error("Error fetching pitches:", error);
      }
    };

    fetchPitches();
  }, [search]);

  return (
    <>
      <Search setSearch={setSearch}  />
      <Map key={uuidv4()} pitches={pitches} />
    </>
  );
};

export default MapContainer;
