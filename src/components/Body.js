import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import resList from "../utils/mockData";
import { withPromotedLabel } from "./RestaurantCard";


const Body = () => {
    
    const [listOfRestaurants, setListOfRestaurant] = useState(resList);
    // serach box ke liye ye backchodi ho rhi
    const [filterdRestaurant, setFilterdRestaurant] = useState(resList);
    // yaha main khud se logic laga rha hu ki jb click kru to top rated restautent dikhe aur jb dobara click kru to top rated restaurant dikhe
    const [ogList, setOgList] = useState("Click here to see top rated restaurants.");
    // akshay saini sir search button banana sikha rhe
    const [searchText, setSearchText] = useState("");


 
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1>Looks like you are offline!! Please check your internet connection.  </h1>


    return(
        <div className="body">
            
            <div className="res-tital">
            <h2>Top Restaurant Chains in City</h2>

            <div className="search">
                <input type="text" placeholder="Search.." className="search-box" 
                value={searchText} 
                
                onChange={(e)=>{
                    setSearchText(e.target.value);
                    }} ></input>
                   
                <button className="search-btn"
                onClick={() => {
                    const filterdRestaurant = listOfRestaurants.filter(
                        (restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                    ); 
                    setFilterdRestaurant(filterdRestaurant);
                }}>
                    Search
                    </button>
            </div>

            <div className="filter">
                <button className="filter-btn"  
                onClick={()=>{
                    ogList === "Click here to see top rated restaurants." ?
                    setOgList("Click here to see all restaurants.") :
                    setOgList("Click here to see top rated restaurants.")

                    if(ogList === "Click here to see top rated restaurants."){

                     const filterdList = listOfRestaurants.filter(
                        (restaurant) => restaurant.info.avgRating >= 4.5
                    );
                    setFilterdRestaurant(filterdList);
                    }
                    else
                    {
                        setFilterdRestaurant(resList);
                    }                    
                }}>
                    {ogList}
                </button>
            </div>  
            </div>
     
            <div className="res-container"> 
                   
            {filterdRestaurant?.map((restaurant) => (
            <Link 
            key={restaurant.info.id} 
            to={"/restaurants/"+restaurant.info.id} >    
            <RestaurantCard resData={restaurant}/> 
            </Link>
            ))}

 


            </div>
            
        </div>
    )
};


export default Body;