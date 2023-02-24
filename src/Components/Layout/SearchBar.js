import './SearchBar.css'
import SearchButton from './SearchButton';
import React,{useState,useContext} from 'react'
import { PostContext } from '../../contextStore/PostContext'
import { useHistory } from 'react-router'
import data from '../Data';
import SearchIcon from "../../Assets/SearchIcon"
import CloseIcon from "../../Assets/CloseIcon/CloseIcon"
function SearchBar() {

    const [allPost, setAllPost] = useState(data);

    const {setPostContent}=useContext(PostContext)
    const history=useHistory()
    
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = allPost.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase())||value.category.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  const handleSelectedSearch=(item)=>{
    setPostContent(item)
       history.push("/product-detail")
  }
  const handleSearchClick=()=>{
    if(filteredData.length===0){
     alert("No items found.., please search by product category or product name");
     }
     
     else {setAllPost(filteredData);
     history.push("/product-detail")}
     
  }
    return(
   
        <div className='search'>
        <div className="searchInputs">
        <input
          type="text"
          placeholder="Find products"
          value={wordEntered}
          onChange={handleFilter}
        />
        {/* <div className="searchIcon">
          
           <div onClick={handleSearchClick}>  </div>
           {filteredData.length !== 0 && (
            <div id="clearBtn"  onClick={clearInput} ></div>
          )}
        </div> */}
      </div>
         {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div key={key} className="dataItem" onClick={()=>handleSelectedSearch(value)}>
                <p>{value.name} </p>
              </div>
            );
          })}
        </div>
      )}
        </div>
  

  
    );
}

export default SearchBar;