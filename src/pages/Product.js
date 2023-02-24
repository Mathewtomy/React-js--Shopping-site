import React,{useState,useContext} from 'react'
import data from "../Components/Data";
import ProductList from "../Components/Product/ProductList";

function Product (props){
    const [allPost, setAllPost] = useState(data);
    const Url = "https://fakestoreapi.com/products";
    // let displayCards=allPost.map((product,index)=>{return(
    //     <ProductList product={product} index={index} key={index} />
    //   ) });

    return(
        <div className="product-container">
            <ProductList handleClick={props.handleClick}/>
          
        </div>
    )
}

export default Product;