import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurantData }) => {
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
      <img src={`${IMG_CDN_URL}${cloudinaryImageId}`} alt={name} />
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

export default RestaurantCard;
