import React, { useContext, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UserContext } from '@/src/context/userContext';
import axios from "axios";

const ProfileInfo = () => {
  const { user } = useContext(UserContext);
  if (!user) {
    window.location.href = "/login";
  }
 


  return <>
  
    <div className="profile-info">
      <h3>Perfil de {user.name}</h3>
      <div className="profile-info__container">
        <div className="profile-info__container__img">
          <img src={user.img} alt="Profile" />
        </div>
        
        <div className="profile-info__container__data">
          <p>{user.email}</p>
        </div>
      </div>
      </div>

  </>;
};

export default ProfileInfo;
