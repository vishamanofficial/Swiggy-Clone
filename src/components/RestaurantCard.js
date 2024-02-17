// named export will be imported using {}    
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    // const{
    //     name,
    //     locality,
    //     costForTwo,
    //     cuisines
    // } = resData?.data;

    return(
        <div className="res-card">
            <img className="res-logo" src={CDN_URL + resData.info.cloudinaryImageId} />

            <h3>{resData.info.name}</h3>

            <h4><i class="fa-solid fa-star"></i> {resData.info.avgRating} 
            <i id="circle" class="fa-solid fa-circle"></i> 
            {resData.info.sla.deliveryTime + " minutes"}</h4>

            <h5>{resData.info.cuisines.join(", ")}</h5>
            
            <h6>{resData.info.locality}</h6>
            
            
        </div>
    )
};

export default RestaurantCard;