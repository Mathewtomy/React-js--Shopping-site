
import './ProductDetailItem.css'
import { useState } from 'react';

import { Route, Switch, Redirect ,Link} from 'react-router-dom';


const ProductDetailItem = (props) => {
const [productCount, setProductCount] = useState(1);
const{handleCl}=props

    return(
    
    <div className="productItemDetails-container">  
 <span style={{color:"red"}} className="my_shop" >
   
        </span>
       
             
           
       
        <img src = {props.imageUrl} alt='failed to load image'/>
        <div>
        <div id = "name"> {props.name} </div>
        <div id="price"> Price : {props.price} </div>
        <div id='description'> About this item : {props.description}</div>
        {/* <div id = 'rating'> {props.rating} </div> */}
        <div className='product-quantity mb-2'>
                <button
                  className='btn btn-outline-secondary fs-4 ps-3 pe-3'
                  onClick={() => setProductCount((preCount) => preCount - 1)}>
                  -
                </button>
                <button className='btn btn-outline-secondary fs-4 ps-4 pe-4 m-1'>
                  {productCount > 0 ? productCount : setProductCount(1)}
                </button>
                <button
                  className='btn btn-outline-secondary fs-4  ps-3 pe-3'
                  onClick={() => setProductCount((preCount) => preCount + 1)}>
                  +
                </button>
              </div>
              <button  className="cart" onClick={() => handleCl(props.item)}> Add to Cart </button>
     
        </div>
    
    </div>

    )
}

export default ProductDetailItem;