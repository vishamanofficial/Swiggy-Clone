// named export will be imported using {}    
import { CDN_URL } from "../utils/constants";
// import resList from "../utils/mockData";

const RestaurantCard = (props) => {
    const {resData} = props;

    const{
        cloudinaryImageId,
        name,
        avgRating,
        sla,
        cuisines,
        locality,
    } = resData?.info;

    return(
        <div className="res-card">
            <img className="res-logo" src={CDN_URL + cloudinaryImageId} />

            <h3>{name}</h3>

            <h4><i class="fa-solid fa-star"></i> {avgRating} 

            <i id="circle" class="fa-solid fa-circle"></i> 
            
            {sla?.slaString}</h4>

            <h5>{cuisines.join(", ")}</h5>
            
            <h6>{locality}</h6>
            
            
        </div>
    )
};

// higher order component

// input restaurantcard ==> restaurantcardpureveg

// export const withPromotedLabel = (RestaurantCard) => {
//     return (props) => {
//         return (
//             <div>
//                 <label>
//                     Pure Veg
//                 </label>
//                 <RestaurantCard {...props}/>
//             </div>
//         );
//     };
// };





export default RestaurantCard;