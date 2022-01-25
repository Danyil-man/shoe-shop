import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./Profile.module.scss";

const Profile = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      const response = await axios.get("");
    }
    fetchOrders();
  }, []);

  return (
    <div className={style.wrapper}>
      <h1>My Orders</h1>
      <div className={style.sneakers__content}></div>
    </div>
  );
};

export default Profile;
