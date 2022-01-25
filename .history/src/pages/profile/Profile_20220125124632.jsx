import axios from "axios";
import Orders from "components/Orders/Orders";
import React, { useEffect, useState } from "react";
import style from "./Profile.module.scss";

const Profile = () => {
  const [orders, setOrders] = useState([]);
  const [orderId, setOrderID] = useState(null);

  useEffect(() => {
    async function fetchOrders() {
      const response = await axios.get(
        "https://61e553d4595afe00176e54fc.mockapi.io/orders"
      );
      setOrders(response.data.map((obj) => obj.items)).flat();
      setOrderID(response.data.map((obj) => obj.id));
      // console.log(
      //   response.data.map((obj) => obj.items).flat()
      //   response.data.reduce((prev, obj) => [...prev, ...obj.items], [])
      // );
    }
    fetchOrders();
  }, []);

  return (
    <div className={style.wrapper}>
      <h1>My Orders </h1>
      <div key={orderId} className={style.sneakers__content}>
        {orders.map((order) => (
          <Orders key={order.id} order={order} orderId={orderId} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
