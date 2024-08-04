import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemCategory from "./ItemCategory";
import { useState } from "react";

const Menu = () => {
  const { resId } = useParams();

  const [showIndex, setshowIndex] = useState(0);

  const resInfo = useRestaurantMenu(resId);
  if (resInfo === undefined) return <Shimmer />;

  const menu =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;

  const itemCategory =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item.card.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(itemCategory);

  // type.googleapis.com/swiggy.presentation.food.v2.ItemCategory

  // console.log(menu);

  const { name, cuisines, id, costForTwo } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  return (
    <div className="mx-auto my-10 w-6/12 bg-gray-100">
      <h1 className="font-bold text-2xl">{name}</h1>
      <h4>
        {cuisines.join(",") +
          "    -     ₹" +
          costForTwo / 100 +
          " " +
          "cost for two"}
      </h4>
      {itemCategory.map((item, index) => (
        <ItemCategory
          key={index}
          item={item}
          show={index === showIndex ? true : false}
          setshowIndex={()=>{showIndex == index ? setshowIndex(-1) : setshowIndex(index)}}
        />
      ))}
      {/* <ItemCategory category={itemCategory} /> */}
    </div>
  );
};

export default Menu;
