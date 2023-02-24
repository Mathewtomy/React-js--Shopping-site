import { useState,useEffect } from "react";
import Product from './pages/Product';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import ProductCategory from './pages/ProductCategory';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Navigation from './Components/Layout/Navigation';
import data from './Components/Data';
// import { useThemeHook } from './GlobalComponents/ThemeProvider';
//import { CartProvider, useCart } from "react-use-cart";
function MainRoutes() {
  

const [allData, setData] = useState(data);

const [show, setShow] = useState(true);
const [cart, setCart] = useState(JSON.parse(localStorage.getItem("myCart")) || []);

useEffect(() => {
  localStorage.setItem("myCart", JSON.stringify(cart));

  console.log(`Saved ${cart.length} items to localstorage`);
}, [cart]); //dependency is items


  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    localStorage.setItem('myCart', JSON.stringify(cart));
  };
  

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  // const [theme] = useThemeHook();
    return (
        <div className="bg-black" style={{ height: '100vh', overflowY: 'auto'}}>
          
        <Navigation setShow={setShow} size={cart.length}/>
        <br />
        <Switch>
        <Route path = "/"  exact>
          <Redirect to="/product" />
        </Route>

        <Route path = "/product/all" exact>
          <Redirect to= "/product" /> 
        </Route> 

        <Route path = "/product" exact>
          <Product handleClick={handleClick}/>
        </Route> 

        <Route path = "/product/:category" exact>
          <ProductCategory />
        </Route> 
        
        <Route path="/product-detail/" exact>
          <ProductDetails handleClick={handleClick}/>
        </Route>

        <Route path = "/wishlist" exact>
          <Wishlist />
        </Route> 

        <Route path = "/cart" exact>
          <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
        </Route> 

        <Route path = "*">
          <Redirect to= "/" />
        </Route>
      </Switch>
      </div>
    )
}
export default MainRoutes
