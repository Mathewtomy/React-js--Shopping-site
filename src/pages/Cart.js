import React, { useState, useEffect } from "react";
// import "../styles/fav.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

 
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
    localStorage.setItem('myCart', JSON.stringify(cart));
  };


const handlePrice = () => {
    let ans = 0;
    cart.map((items) => (ans += items.amount * items.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  
  });
  

  return (
    <article>
    <div
      className="fixed inset-0 bg-[rgba(0,0,0,0.7)]"
      
    >
      <div
       
        onClick={(e) => e.stopPropagation()}
        className="bg-whites w-[250px] h-full absolute  overflow-y-scroll animate-fade-in "
      >
<br></br><br></br>
  {cart.map((item) => (
 
 <div className="product-card" key={item.id}>
 <img src={item. url} alt={item.id} />
 <p className="card-title"> {item.name} </p>
 <p className="product-price"> {item.price} </p>

 

 <div>
            <button onClick={() => handleChange(item, 1)} className="btn-secondary">+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)} className="btn-secondary">-</button>
          </div>

 <br />

 <button>{item.price}</button>
 <button
   className="btn-secondary remove"
   onClick={() => handleRemove(item.id)}
 >
   Remove
 </button>

</div>
  ))}

<p className="card-title"> TOTAL:     {price} </p>

</div></div>
</article>
);
};


export default Cart;

