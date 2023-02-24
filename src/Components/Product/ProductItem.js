import { useState } from "react";
import ProductImage from "./ProductImage";
import './ProductItem.css';
import Cart from '../../pages/Cart';

const ProductItem = (props) => {
 
    const {product}=props
    const{handleCl}=props
    // const { name, url, price, description } = product;
    return(

          
         
        <div className="productItem-container">
           
            <ProductImage url = {product.url} id = {product.id} index={product.index} product={product}/>
            <div id = "name"> {product.name} </div>
            <div id="price"> {product.price} </div>
    
            <button  className="cart" onClick={() => handleCl(props.product)}> Add to Cart </button>
        </div>
      
    )

}

export default ProductItem;