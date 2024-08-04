import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constant";

const useRestaurantMenu = (resId) => {
  const [restuarantMenu, setRestaurantMenu] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);

    const jsonData = await data.json();
    console.log(jsonData);
    setRestaurantMenu(jsonData);
  };

  return restuarantMenu;
};

export default useRestaurantMenu;
