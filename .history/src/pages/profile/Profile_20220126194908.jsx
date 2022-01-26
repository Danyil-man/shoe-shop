import axios from "axios";
import Orders from "components/orders/Orders";
import React, { useEffect, useState } from "react";
import style from "./Profile.module.scss";

const Profile = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await axios.get(
          "https://61e553d4595afe00176e54fc.mockapi.io/orders"
        );
        setOrders(response.data.map((obj) => obj.items).flat());
        setIsLoading(false);
      } catch {
        alert("Error");
      }

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
      <div className={style.sneakers__content}>
        {orders.length > 0 ? (
<>
{(isLoading ? [...Array(8)] : orders).map((order) => (
          <Orders order={order} loading={isLoading} />
        ))}</>
        ) : (

        )}
        
      </div>
    </div>
  );
};

export default Profile;
