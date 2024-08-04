import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";

import { addToCart } from "../utils/cartSlice";

const ItemCategoryList = ({ list }) => {
  // console.log("List", list);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
   
    dispatch(addToCart(item));
  }
  return (
    <div>
      {list.map((item) => (
        <div key={item.card.info.id} className="flex justify-between m-4">
          <div className="item-details">
            <h2 className="font-bold">{item.card.info.name}</h2>
            <span className="font-bold">₹{item.card.info.price / 100}</span>
            <h3>{item.card.info.description}</h3>
          </div>
          <div className="item-image w-56">
            <button className="text-xl ml-20 absolute bg-slate-300 rounded-sm border-blue-200"
            onClick={() => {
              handleAddToCart(item)}}>Add+</button>
            <img
              className="item-image max-w-56"
              src={CDN_URL + item.card.info.imageId}
              alt="dish_image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCategoryList;
