import React, { useState } from "react";
import RESTAURANT_LIST from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

export const Body = () => {
  const [restaurantData, setRestaurantData] = useState(RESTAURANT_LIST);

  const filterResaturant = () => {
    const filtereData = restaurantData.filter((res) => res.avgRating > 4);
    setRestaurantData(filtereData);
    console.log(filtereData);
  };

  return (
    <div className="body-container">
      <div className="search-container">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="filter-btn" onClick={() => filterResaturant()}>
        Top Rated Restaurant
      </div>
      <div className="restaurant-container">
        {restaurantData?.map((restaurant) => (
          <RestaurantCard key={restaurant?.id} restaurantData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
