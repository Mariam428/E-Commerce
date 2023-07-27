import React from "react";
import style from '../CartItems/CartItems.css';

const CartItems = ({ cart, deleteFunction }) => {
  return (
    <div className="cart-items">
      {cart.map((item, idx) => (
        <div key={idx} className="cart-item">
          <img src={item.image} alt="Item" />
          <div className="item-info">
            <h4>{item.name}</h4>
            <span>
              <p>EGP</p>
              <h4>{item.price}</h4>
            </span>
            <span>
              <h4>{item.oldPrice}</h4>
              <p>{item.offer}% off</p>
            </span>
            <button onClick={() => deleteFunction(item, idx)}>Remove</button>
          </div>
        </div>
        
      ))}
      
    </div>
  );
};

export default CartItems;
