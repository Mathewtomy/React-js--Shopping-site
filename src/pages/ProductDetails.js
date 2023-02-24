import { useParams } from "react-router-dom";
import ProductDetail from "../Components/ProductDetail/ProductDetail";
function ProductDetails(props) {

//const{handleClicks}=handleClick;
    // const params = useParams();
    
    // const url =  params.productId;

    return(
        <ProductDetail handleClick={props.handleClick}/>
    );
}

export default ProductDetails;