import React, { useContext } from "react";
import { UserContext } from '@/src/context/userContext';

const ProfileInfo = () => {
  const { user } = useContext(UserContext);
  if (!user) {
    window.location.href = "/login";
  }

  return <>
  
    <section className="profile-info">
      <h3>Perfil de {user.name}</h3>
      <article className="profile-info__container">
        <div className="profile-info__container__img">
          <img src={user.img} alt="Profile" />
        </div>
        
        <div className="profile-info__container__data">
          <p>{user.email}</p>
        </div>
      </article>
      </section>

  </>;
};

export default ProfileInfo;
