import React, { useState } from "react"
import './MainApp.css'

import CartItems from "../CartItems/CartItems"
import Items from '../Items/Items'
import logo from '../images/MSPLogo.svg'
import  gloves from "../images/gloves.jpg";
import camera from "../images/camera.jpg";
import tshirts from "../images/t-shirts.jpg";
import pants from "../images/pants.jpg";
import dress from "../images/dress.jpg";
import shoes from "../images/shoes.jpg";
import bag from "../images/bag.jpg";
import hat from "../images/hat.jpg";
import sunglasses from "../images/sunglasses.jpg";
import lamp from "../images/lamp.jpg";
import towel from "../images/towel.jpg";
import chairs from "../images/chairs.jpg";
import cushion from "../images/cushion.jpg";
import coffeeCups from "../images/coffeeCups.jpg";
import curtain from "../images/curtain.jpg";




const MainApp = ()=>{

    const items = [
        { image: gloves, name: "Gloves", oldPrice: 50, offer: 10 },
        { image: camera, name: "Camera", oldPrice: 650, offer: 40 },
        { image: tshirts, name: "T-Shirts", oldPrice: 1000, offer: 30 },
        { image: pants, name: "Pants", oldPrice: 850, offer: 18 },
        { image: dress, name: "Dress", oldPrice: 680, offer: 44 },
        { image: shoes, name: "Shoes", oldPrice: 600, offer: 13 },
        { image: bag, name: "Bag", oldPrice: 300, offer: 5 },
        { image: hat, name: "Hat", oldPrice: 70, offer: 8 },
        { image: sunglasses, name: "Sunglasses", oldPrice: 920, offer: 14 },
        { image: lamp, name: "Lamp", oldPrice: 850, offer: 46 },
        { image: towel, name: "Towel", oldPrice: 400, offer: 30 },
        { image: chairs, name: "Chairs", oldPrice: 1000, offer: 33 },
        { image: cushion, name: "Cushion", oldPrice: 550, offer: 26 },
        { image: coffeeCups, name: "CoffeeCups", oldPrice: 140, offer: 28 },
        { image: curtain, name: "Curtain", oldPrice: 390, offer: 42 },
      ];

     


const [shopItems, setShopItems] = useState(items);
const [cart,setCartItems]=useState([]);
const [totalPrice, setTotalPrice] = useState(0); 

const addToCart = (item, deletedIndex) => {
  const newItem = {
    ...item,
    price: item.oldPrice * (100 - item.offer) / 100,
  };

  setCartItems((prevCartItems) => [...prevCartItems, newItem]);
  setShopItems((prevShopItems) =>
    prevShopItems.filter((obj, idx) => deletedIndex !== idx)
  );

  // Calculate the total price after updating the cart
  const newTotalPrice = (totalPrice + newItem.price); 
  setTotalPrice(Number(newTotalPrice)); 
};



  const removeFromCart = (item,DeletedIndex) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((obj,idx) => DeletedIndex!=idx)
    );
    setShopItems((prevShopItems) => [...prevShopItems, item]);

    const removedItemPrice = item.oldPrice * (100 - item.offer) / 100;

    // Calculate the new total price after removing the item
    const newTotalPrice = (totalPrice - removedItemPrice);
    setTotalPrice(Number(newTotalPrice)); 
  };



return(
    <>
    <header>
        <div className="logo">
            <img src={logo}/>
        </div>
        <h1>MSP E-COMMERCE</h1>
    </header>
    <main>
        <section>
            <div className="head">
                <div>{shopItems.length}</div>
            <h2> Top Home Picks</h2>
            </div>
            <div className="display">    
            <Items items={shopItems} AddFunction={addToCart} />
            </div>
        </section>
        <section>
          <div className="cart">
            <div className="cart-icon">&#128722;</div>
            <div className="cart-item-count">{cart.length}</div>
            <div>
              <CartItems cart={cart} deleteFunction={removeFromCart} />
            </div>
          </div>
          <div className="main-total-price">
            <p>Total Price : </p>
            <span>EGP <sup>{totalPrice.toFixed(2)} </sup></span>
          </div>
        </section>
        
    </main>
    </>
)

}



export default MainApp;