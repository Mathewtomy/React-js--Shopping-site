import './CartButton.css';
import CartIcon from './CartIcon';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartButton = ({ show, size }) => {
  const history = useHistory();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  //const cartData = useSelector((state) => state.cartData);
    return(
        <button className='cart-button'> 
           <span id='cartIcon'> <CartIcon /></span>
           <span style={{color:"red"}} className="my_shop" onClick={() => show(true)}>
         
        </span>
        <div className="cart" onClick={() => show(false)}>
          <span></span>
          </div>
           <Link
             
              to='/cart'
              activeClassName='active'
              className='nav-links nav-link-cart'
              onClick={click ? handleClick : null}>
              <i className='bi bi-cart-check-fill'></i>
              <span className='product-cart-item-count' style={{color:"red"}}>
                {/* {cartData.reduce(
                  (accumulator, currentValue) =>
                    accumulator + Number(currentValue.productQuantity),
                  0
                )} */}
                {size}
              </span>
            </Link>
        </button>
    );
}

export default CartButton;