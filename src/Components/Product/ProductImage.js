import { Link } from 'react-router-dom';
import React,{useContext} from 'react'
import { PostContext } from '../../contextStore/PostContext';
import './ProductImage.css';
import {useHistory} from "react-router-dom";

const ProductImage = (props) => {
    const imageUrl = props.url;
    let {setPostContent} = useContext(PostContext)
  //  const url = "/product-detail/" + props.id;
    const url = "/product-detail/";
    const history=useHistory()
    return(
        <div className="image-container" key={props.index} onClick={()=>{
            setPostContent(props.product)
            history.push("/product-detail")
          }}>
    

                <img src={imageUrl} alt="Failed to load image.." />
            
        </div>
    )
}

export default ProductImage;