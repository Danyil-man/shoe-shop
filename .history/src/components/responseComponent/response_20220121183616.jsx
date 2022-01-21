import React from "react";

const Response = () => {
  return (
    <>
      <div className={style.emptyCartBlock}>
        <img src={emptyCart} alt="emptyCart" />
        <h2>Корзина пуста</h2>
        <p>Добавте хоча б одну пару кросівок, щоб зробити замовлення</p>
        <button onClick={closeCart}>Вернутися назад</button>
      </div>
    </>
  );
};

export default Response;
