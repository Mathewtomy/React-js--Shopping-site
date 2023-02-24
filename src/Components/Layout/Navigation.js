import CartButton from './CartButton';
import './Navigation.css';
import WishlistButton from './WishlistButton';
import Category from '../Category/Category';
import SearchBar from './SearchBar';

const Navigation = ({ setShow, size }) => {

  return(
        <header className="navigation-container"> 
          <div id='logo'> Shopify </div>
          <Category />
          <SearchBar /> 
          <WishlistButton />
          <CartButton show={setShow} size={size}/>
        </header>
    )
}

export default Navigation;