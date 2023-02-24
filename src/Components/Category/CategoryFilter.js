
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import React, { useState } from "react";
import './CategoryFilter.css';
// import DynamicPosts from './Dynamic';

const CategoryFilter = ({value, getCategoryFilterValue}) => {
    let [category, setCategory] = useState();
    let history = useHistory();

    
    const filterCategory = [
        { id: '1', label: 'All', value: 'all' },
        { id: '2', label: "Men's Clothing", value: "Men's" },
        { id: '3', label: "Women's Clothing", value: "Women's"},
        { id: '4', label: 'Electronics', value: "Electronics"},
        { id: '5', label: 'Jewelery', value: "Jewelery"}
     ];
     
     var Url;
     
     const onClickCategoryFilterHandler = (event) => {
        history.push(`/product/${event.target.value}`);
     };
  
    return(
        <select className = "category-container" value={value} onChange={onClickCategoryFilterHandler}>
        { filterCategory.map(category => 
            <option key={category.id} label = {category.label} value={category.value}>
                {category.label}
            </option>
        )} 
        </select>
        
    );
}

export default CategoryFilter;