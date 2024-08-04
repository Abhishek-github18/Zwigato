import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/Usercontext";
import { useContext } from "react";
// import { useSelector } from 'react-redux'
import { useSelector } from "react-redux";


const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const {loggedUser, setUserName} = useContext(UserContext);

  const cartItems = useSelector((state) => state.cart.items);

  console.log(cartItems);

  return (
    <div className="header flex justify-between bg-blue-950 text-white">
      <div className="logo-container w-40">
        <img className="logo" src={LOGO_URL} alt="Company Logo" />
      </div>

      <div className="nav-items text-xl">
        <ul className="flex p-4 mt-8">
          <li>{useOnlineStatus() ? "Online ✔" : "Offline 🚨"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl"><Link to = "/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            className="btn px-4"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>

          <li className="px-4">{loggedUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
