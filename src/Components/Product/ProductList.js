
import { useState,useEffect } from "react";

import useFetch from "../../hooks/use-fetch";
import data from "../Data";
import Pagination from "../Pagination/Pagination";
import ProductItem from "./ProductItem";
import "./ProductList.css";
import { useHistory } from "react-router";
const ProductList = (props) => {

   
    // const {datas} = useFetch(data);
    let [posts, setPosts] = useState(data);

    var productData;

  const history = useHistory();

    useEffect(() => {

        setTimeout(() => {
          setPosts(data);
        }, 500);
    
    }, [])
    let length = posts.length;

    let [currentPage,setCurrentPage]=useState(1)

    let itemsPerPage=9


   const onClickPreviousButtonhandler =()=>{
        if(currentPage === 1) return
        setCurrentPage(currentPage - 1)
    }
    const onClickNextButtonhandler =()=>{
        if(currentPage === 4) return
        setCurrentPage(currentPage + 1)
    }

    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const paginatedProductData = data.slice(indexOfFirstProduct, indexOfLastProduct);

 
   
     
     
    

    return(
        <div className="productList-container">
           
           {paginatedProductData.map((product) => (
          <ProductItem
          product={product}
          key = {product.id}
          id = {product.id}
          name = {product.name}
          category = {product.category}
          description = {product.description}
          url = {product.url}
          rating = {product.rating}
          price = {product.price}
          handleCl={props.handleClick}
            wishlistText="Add to Wishlist"
          />
        ))}
           
            <Pagination pageNumber = {currentPage} onClickPrevious = {onClickPreviousButtonhandler} onClickNext = {onClickNextButtonhandler} />
        </div>
    )
}

export default ProductList;
