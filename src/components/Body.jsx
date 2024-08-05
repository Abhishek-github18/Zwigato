import RestraurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/Usercontext";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [restroList, setRestroList] = useState();

  const PromotedRestaurant = withPromotedLabel(RestraurantCard);

  const {loggedUser, setUserName} = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resList = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await resList.json();

    // console.log(data);

    setListOfRestaurant(
      // optional chaining
      data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRestroList(
      data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(listOfRestaurant);
    // console.log(data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(listOfRestaurant);

    // debugger
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline. Please check your internet connection.
      </h1>
    );
  }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body mt-4 mx-4">
      <div className="filter-btn flex m-4">
        <button
          className="border-blue-950 border-10 transition ease-in-out btn bg-blue-950 text-white hover:bg-white hover:text-blue-950 p-4 rounded-xl "
          onClick={() => {
            let filteredList = restroList.filter((res) => {
              return res.info.avgRating > 4;
            });
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        <input
          className="p-4 mx-4 rounded-xl border-2 border-blue-950"
          type="text"
          data-testid="searchBox"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="border-blue-950 border-10 transition ease-in-out btn bg-blue-950 text-white hover:bg-white hover:text-blue-950 p-4 rounded-xl "
          style={{ marginLeft: "1rem" }}
          onClick={async () => {
            // await fetchData();
            // console.log(restroList);
            const filteredList = restroList.filter((res) => {
              // console.log(res);
              return res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setListOfRestaurant(filteredList);
          }}
        >
          Search
        </button>

        <input
          className="p-4 mx-4 rounded-xl border-2 border-blue-950"
          type="text"
          value={loggedUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>

      <div className="res-Container flex flex-wrap">
        {listOfRestaurant.map((e) =>
          e.info?.aggregatedDiscountInfoV3 === undefined ? (
            <RestraurantCard key={e.info.id} resData={e} />
          ) : (
            <PromotedRestaurant key={e.info.id} resData={e} />
          )
        )}
      </div>
    </div>
  );
};

export default Body;
