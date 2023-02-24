import { useParams } from "react-router-dom";
import data from "../Components/Data";
import ProductLists from "../Components/Product/productlists";

const ProductCategory = () => {

    const params = useParams();
    console.log(params.category);
    const Url = 'https://fakestoreapi.com/products/category/' + params.category;
    const category=params.category;
    return(
         <ProductLists url = {params.category}/>
      
    );
}

export default ProductCategory;