import React, { useContext, useEffect, useState } from "react";

import data from '../Data';
import './ProductDetail.css'; 
import ProductDetailItem from './ProductDetailItem';
import { useHistory } from "react-router";
import { PostContext } from "../../contextStore/PostContext";


    function ProductDetail(props) {
      // const{handle}=handleClickz;
        let { postContent } = useContext(PostContext);
        const history = useHistory();
    var productData;

    useEffect(() => {
        let { id } = postContent;
        if (id === undefined) {
          history.push("/product");
        } else {
      
          const filteredData = data.filter((item) => {
            if (item.id === id) {
              return item;
            }
          })
          ;
       
        }
      }, [history, postContent]);
    
        
        console.log("rating : " + data.rating)
        
        productData = 
            <ProductDetailItem 
               id = {postContent.id}
               name = {postContent.title}
               category = {postContent.category}
               description = {postContent.description}
               imageUrl = {postContent.url}
               rating = {data.rating}
               price = {postContent.price}
               item={postContent}
               handleCl={props.handleClick}
            />
    

    return(
        <div className="productDetails-container">
            {productData}
        </div>
    )
}

export default ProductDetail;