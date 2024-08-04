import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constant";

const RestraurantCard = (props) => {
  console.log(props);
// debugger 
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } =
    props?.resData.info;

  return (
    <Link to={"restaurant/" + props.resData.info.id}>
      <div className="p-2 res-card m-4 bg-slate-200 text-blue w-64 rounded-md hover:bg-white hover:text-blue-950 transition ease-out hover:shadow-md">
        <div className="res-img ">
          <img
            className="res-logo w-full object-cover rounded-t-md"
            alt="res-logo"
            src={CDN_URL + cloudinaryImageId}
          />
        </div>
        <h3 className="p-2">{name}</h3>
        <h4 className="p-2">{costForTwo}</h4>
        <h4 className="p-2">{avgRating}</h4>
        <div className="flex flex-wrap">
          {cuisines.map((cuisine, index) => (
            <h1 key={index} className="p-2 ">{cuisine}</h1>
          ))}
        </div>
        <h4 className="p-2 ">{sla.deliveryTime}</h4>
      </div>
    </Link>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    // debugger
    return (
      <div className="relative">
        <RestaurantCard key={props.resData.info.id} {...props} />
        <div className="absolute top-0 left-0 bg-black text-white p-2 rounded-tr-md rounded-bl-md">
          {props.resData.info.aggregatedDiscountInfoV3.header}
        </div>
      </div>
    );
    
  };
};

export default RestraurantCard;
