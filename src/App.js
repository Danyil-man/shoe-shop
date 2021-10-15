import React from 'react';
import logo from './img/headlogo.png';
import cart from './img/cart1.svg';
import user from './img/user.svg';
import cross1 from './img/cross/cross1.jpg';
import cross2 from './img/cross/cross2.jpg';
import cross3 from './img/cross/cross3.jpg';
import cross4 from './img/cross/cross4.jpg';
import cross5 from './img/cross/cross5.jpg';
import cross6 from './img/cross/cross6.jpg';
import cross7 from './img/cross/cross7.jpg';
import cross8 from './img/cross/cross8.jpg';

import button from './img/plus.svg';


function App() {
  return (
    <div>
      <div className="wrapper">
        <header className="header">
          <div className="headerLeft">
            <img width={50} height={50} src={logo} />
            <div>
              <h3 className="textupper">React Shoes</h3>
              <p>Магазин кросівок</p>
            </div>
          </div>
          <ul className="headerright">
            <li className="money_li">
            <img src={cart} />
              <span>1200грн.</span>
            </li>
            <li>
              <img src={user} />
            </li>
          </ul>
        </header>

        <div className="content">

          <h1 className="headcard">Всі кросівки</h1>

          <div className="sneakers__content">
          <div className="card">
            <img width={133} height={112} src={cross1} />
            <p>Чоловічі кросівки Nike Blazer Mid Suede</p>
            <div className="card__content">
              <div>
               <p>Ціна: </p>
               <b>4 900грн.</b>
              </div>
              <button className="button">
                <img src={button} />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src={cross2} />
            <p>Чоловічі кросівки Nike Blazer Mid Suede</p>
            <div className="card__content">
              <div>
               <p>Ціна: </p>
               <b>4 900грн.</b>
              </div>
              <button className="button">
                <img src={button} />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src={cross3} />
            <p>Чоловічі кросівки Nike Blazer Mid Suede</p>
            <div className="card__content">
              <div>
               <p>Ціна: </p>
               <b>4 900грн.</b>
              </div>
              <button className="button">
                <img src={button} />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src={cross4} />
            <p>Чоловічі кросівки Nike Blazer Mid Suede</p>
            <div className="card__content">
              <div>
               <p>Ціна: </p>
               <b>4 900грн.</b>
              </div>
              <button className="button">
                <img src={button} />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src={cross5} />
            <p>Чоловічі кросівки Nike Blazer Mid Suede</p>
            <div className="card__content">
              <div>
               <p>Ціна: </p>
               <b>4 900грн.</b>
              </div>
              <button className="button">
                <img src={button} />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src={cross6} />
            <p>Чоловічі кросівки Nike Blazer Mid Suede</p>
            <div className="card__content">
              <div>
               <p>Ціна: </p>
               <b>4 900грн.</b>
              </div>
              <button className="button">
                <img src={button} />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src={cross7} />
            <p>Чоловічі кросівки Nike Blazer Mid Suede</p>
            <div className="card__content">
              <div>
               <p>Ціна: </p>
               <b>4 900грн.</b>
              </div>
              <button className="button">
                <img src={button} />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src={cross8} />
            <p>Чоловічі кросівки Nike Blazer Mid Suede</p>
            <div className="card__content">
              <div>
               <p>Ціна: </p>
               <b>4 900грн.</b>
              </div>
              <button className="button">
                <img src={button} />
              </button>
            </div>
          </div>
          </div>

          

        </div>
      </div>
    </div>
  );
}

export default App;
