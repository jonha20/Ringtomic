import React, { useState, useEffect ,useContext} from "react";
import { useDebounce } from "use-debounce";

const Search = ({setPitches, pitchesList}) => {

  const [pitchesName, setPitchesName] = useState("");
  const [debouncedText] = useDebounce(pitchesName, 2000);

    useEffect(() => {
  // Combina los Pokémon de la API y los del usuario
 
  const filtered = pitchesList.filter((poke) =>
    poke.name.toLowerCase().includes(debouncedText.toLowerCase())
  );
  setPitches(filtered);
}, [debouncedText, pitchesList, setPitches]);

   const handleChange = (e) => {
    setPitchesName(e.target.value);
  };

  return <>
  <div className="search-bar-container">
        <input
          type="text"
          name="name"
          value={pitchesName}
          onChange={handleChange}
          placeholder="Search Pokemon"
        />
      </div>
  </>;
};

export default Search;
