import React, { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

const Search = ({ setSearch }) => {
  const [pitchesName, setPitchesName] = useState("");
  const [debouncedText] = useDebounce(pitchesName, 2000);

  useEffect(() => {
    setSearch(debouncedText);
  }, [debouncedText, setSearch]);

  const handleChange = (e) => {
    setPitchesName(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        name="name"
        value={pitchesName}
        onChange={handleChange}
        placeholder="Search City"
      />
    </div>
  );
};

export default Search;