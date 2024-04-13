import RestaurantCard from "./RestaurantCard";
import Banner from "./Banner";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);

  const [filterdRestaurant, setFilterdRestaurant] = useState([]);

  const [ogList, setOgList] = useState(
    "Click here to see top rated restaurants."
  );

  const [searchText, setSearchText] = useState("");

  console.log(listOfRestaurants);

  useEffect ( () => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );

    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );


    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilterdRestaurant(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection.{" "}
      </h1>
    );

  return (
    <div>
      <h1 className="text-2xl p-8 text-center font-bold mb-2">Please enable "Allow CORS: Access-Control-Allow-Origin" extension.</h1>
      <div className="flex justify-between items-center mt-4 mb-4 ml-[150px] mr-[150px]">
        <h2 className="text-2xl font-bold mb-2">What's on your mind?</h2>
      </div>
      <div className="flex justify-center flex-wrap ml-[150px] mr-[150px] border-b-2">
        {<Banner />}
      </div>

      {/* --------------------------------------------------- */}
      <div className="flex justify-between items-center mt-5 ml-[150px] mr-[150px]">
        <h2 className="text-2xl font-bold">Top restaurant chains in Lucknow</h2>

        <div className="search">
          <input
            type="text"
            placeholder="Search.."
            className="border border-solid rounded-lg text-md py-2 px-4 m-2"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>

          <button
            className="items-center text-white bg-[#FF9119] hover:shadow-md rounded-lg text-md py-2 px-4 m-2"
            onClick={() => {
              const filterdRestaurant = listOfRestaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilterdRestaurant(filterdRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div className="filter">
          <button
            className="items-center text-white bg-[#FF9119] hover:shadow-md rounded-lg text-md py-2 px-4 "
            onClick={() => {
              ogList === "Click here to see top rated restaurants."
                ? setOgList("Click here to see all restaurants.")
                : setOgList("Click here to see top rated restaurants.");

              if (ogList === "Click here to see top rated restaurants.") {
                const filterdList = listOfRestaurants.filter(
                  (restaurant) => restaurant.info.avgRating >= 4.5
                );
                setFilterdRestaurant(filterdList);
              } else {
                setFilterdRestaurant(listOfRestaurants);
              }
            }}
          >
            {ogList}
          </button>
        </div>
      </div>
      <div className="flex justify-center flex-wrap ">
        {filterdRestaurant?.map((restaurant) => (
          <RestaurantCard resData={restaurant} />
        ))}
      </div>

      {/* ---------------------------------- */}
      <div className="flex justify-between border-t-2 items-center mt-4 mb-4 ml-[150px] mr-[150px] ">
        <h2 className="text-2xl font-bold mt-7 mb-2">
          Restaurants with online food delivery in Lucknow
        </h2>
      </div>
      <div className="flex justify-center flex-wrap">
        {filterdRestaurant?.map((restaurant) => (
          <RestaurantCard resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
