
import { useState,useEffect } from "react";

import { useSelector } from 'react-redux';
import data from "../Data";

import ProductItem from "./ProductItem";
import "./ProductList.css";
import { useHistory } from "react-router";
const ProductLists = (props) => {

    const url = props.url;
    // const {datas} = useFetch(data);
    const [allPost, setAllPost] = useState(data);

    var productData;

  const history = useHistory();

  let displayCards=allPost.filter((itm)=>itm.category===url).map((product,index)=>{return(
    <ProductItem product={product} index={index} id = {product.id}
    name = {product.name}
    category = {product.category}
    description = {product.description}
    url = {product.url}
    rating = {product.rating}
    price = {product.price}
   />
   )});
  return (<div className="productList-container">
           
  {displayCards}

</div>
  )
}
export default ProductLists;