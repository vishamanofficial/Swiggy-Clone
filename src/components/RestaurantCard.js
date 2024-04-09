// named export will be imported using {}
import { CDN_URL } from "../utils/constants";
// import resList from "../utils/mockData";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, sla, cuisines, locality } =
    resData?.info;

  return (
    <div className="w-[280px] m-5">
      <img className="rounded-2xl w-[280px] h-[200px]" src={CDN_URL + cloudinaryImageId} />

      <h3 className="text-lg pt-2 font-medium">{name}</h3>

      <h4 className="text-[15px]">
        {" "}
        <span className="text-green-600">
          <i class="fa-solid fa-star"></i>
        </span>{" "}
        {avgRating}
        <span className="m-2 text-[5px]">
          <i id="circle" class="fa-solid fa-circle"></i>
        </span>
        {sla?.slaString}
      </h4>

      <h5 className="text-[14px]">{cuisines.join(", ")}</h5>

      <h6 className="text-[14px]">{locality}</h6>
    </div>
  );
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
