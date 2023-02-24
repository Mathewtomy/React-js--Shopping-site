import React, { useState, useEffect } from "react";
// import "../styles/fav.css";
import "./../Components/Product/ProductImage.css";

const Carts = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
   
  };



  return (
    <article>
        <div className="product-container">
        <div className="productList-container">
        <div className="productItem-container">
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
        
            <img src={item. url} alt="" />
            <p>{item.name}</p>
        
         
          <div>
         
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
       </div>
    </div>
    </div>
    </article>
  );
};

export default Carts;

