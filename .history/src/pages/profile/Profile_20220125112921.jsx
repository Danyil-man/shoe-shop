import React from "react";
import style from "./Profile.module.scss";

const Profile = () => {
  return (
    <div className={style.wrapper}>
      <h1>My Orders</h1>
      <div className={style.sneakers__content}></div>
    </div>
  );
};

export default Profile;
