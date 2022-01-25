import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./Profile.module.scss";

const Profile = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      const response = await axios.get(
        "https://61e553d4595afe00176e54fc.mockapi.io/orders"
      );
      console.log(
        response.data.map((obj) => obj.items).flat()
        //response.data.reduce((prev, obj) => [...prev, ...obj.items], [])
      );
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
