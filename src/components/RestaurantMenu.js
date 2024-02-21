// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
// import { MENU_URL } from "../utils/constants";
 
const RestaurantMenu = () => {
    // const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    // useEffect(() =>{
    //     fetchMenu();
    // }, []);  
    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_URL + resId);
    //     const json = await data.json();
    //     setResInfo(json.data);       
    // };

    // console.log(resInfo);
    const  name  = resInfo?.cards[2]?.card?.card?.info?.name;
    const  cuisines  = resInfo?.cards[2]?.card?.card?.info?.cuisines;
    const  costForTwoMessage  = resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage;
    const  areaName  = resInfo?.cards[2]?.card?.card?.info?.areaName;
    // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;
    const categories =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log(categories);
    
    // const dish = resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[5].card.card.itemCards[0].card.info.name;
    // const price = resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[5].card.card.itemCards[0].card.info.price;
    // const description = resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[5].card.card.itemCards[5].card.info.description;


    return(
        <div className="menu">
            <div>
                {name ?  <h1>{name}</h1> : <h1>Loading...</h1>}
                {cuisines ?  <h2>{cuisines.join(", ")}</h2> : <h1>Loading...</h1>}
                {costForTwoMessage ?  <h2>{costForTwoMessage}</h2> : <h1>Loading...</h1>}
                {areaName ? <h2>{areaName}</h2>  : <h1>Loading...</h1>}
            </div>

            {categories?.map((category) =>{
                <RestaurantCategory data={category.card.card}/>
                })}

        </div>
    )
};

export default RestaurantMenu;