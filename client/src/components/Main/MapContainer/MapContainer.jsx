import React, { useState, useEffect } from "react";
import Search from "./Search";
import Map from "./Map";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const MapContainer = () => {
  const [pitches, setPitches] = useState([]);
  const [allPitches, setAllPitches] = useState([]);

  useEffect(() => {
    const fetchPitches = async () => {
      try {
        const response = await axios.get("http://localhost:3000/pitches");
        setPitches(response.data);
        setAllPitches(response.data);
      } catch (error) {
        console.error("Error fetching pitches:", error);
      }
    };

    fetchPitches();
  }, []);

  return (
    <>
      <Search setPitches={setPitches} pitchesList={allPitches} />
      <Map key={uuidv4()} pitches={pitches} />
    </>
  );
};

export default MapContainer;
