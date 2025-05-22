import React from "react";
import { useContext } from "react";
import { UserContext } from "../../../../context/UserContext";

const ProfileInfo = () => {
  const { user } = useContext(UserContext);
  return <>
  
    <div className="profile-info">
      <h2>Perfil de {user.name}</h2>
      <div className="profile-info__container">
        <div className="profile-info__container__img">
          <img src={user.img} alt="Profile" />
        </div>
        <div className="profile-info__container__data">
          <p>Email: {user.email}</p>
          <p>Rol: {user.role}</p>
        </div>
      </div>
      </div>

  </>;
};

export default ProfileInfo;
