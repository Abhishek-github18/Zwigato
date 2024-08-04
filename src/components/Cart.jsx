import { useDispatch, useSelector } from "react-redux";
import ItemCategoryList from "./ItemCategoryList";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-8 w-auto mx-28 text-center">
      <h1 className="text-2xl font-bold text-center">Cart Page</h1>
      <button
        className="bg-black text-white rounded-lg m-2 p-2"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length > 0 ? (
        <ItemCategoryList list={cartItems} />
      ) : (
        <h2 className="text-center">Cart is Empty</h2>
      )}
    </div>
  );
};

export default Cart;
