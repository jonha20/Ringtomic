import React from "react";

const Favs = ({favs}) => {
  console.log(favs);
  return <>
  
    <div className="favs">
      
      <div className="favs__container">
        
        <div className="favs__container__data">
       
          <p>Provincia: {favs[0].state}</p>
          <p>Ciudad: {favs[0].city}</p>
          <p>Campo: {favs[0].name}</p>
          <p>Acceso: {favs[0].access}</p>
        </div>
      </div>
      </div>


  </>;
};

export default Favs;
