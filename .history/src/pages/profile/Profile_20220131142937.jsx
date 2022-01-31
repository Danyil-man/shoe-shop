import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./Profile.module.scss";
import noOrders from "../../img/noOrders.png";
import Orders from "../../components/Orders/Orders";
import Response from "../../components/ResponseComponent/Response";

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
            ))}
          </>
        ) : (
          <Response
            title="No orders"
            description="Come back to buy something"
            img={noOrders}
          />
        )}
      </div>
    </div>
  );
};

export default Profile;
