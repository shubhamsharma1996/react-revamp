import React from "react";
import ReactDOM from "react-dom";
import logo from "./assets/Images/logo.png";
import RESTAURANT_LIST from "./utils";
const IMG_URL = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/`;

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="heading-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="body-container">
      <div className="search-container">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="restaurant-container">
        {RESTAURANT_LIST.map((restaurant) => (
          <RestaurantCardComponent
            key={restaurant?.id}
            restaurantData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

const RestaurantCardComponent = ({ restaurantData }) => {
  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    slaString,
    cuisines,
    areaName,
  } = restaurantData;
  return (
    <div className="restaurant-card">
      <img src={`${IMG_URL}${cloudinaryImageId}`} alt={name} />
      <h1>{name}</h1>
      <div className="restaurant-rating">
        <h3>{avgRatingString}</h3>
        <h3>{slaString}</h3>
      </div>
      <h4>{cuisines?.join(", ")}</h4>
      <p>{areaName}</p>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div id="app">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
