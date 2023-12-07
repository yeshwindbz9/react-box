import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import resData from "../utils/mockData";
import {
  SWIGGY_API_URL,
  SWIGGY_POST_DATA,
  SWIGGY_POST_URL,
} from "../utils/constants";

//variable to update data
let resCount = 10;

const Body = () => {
  // normal variable (updates but does not rerender UI)
  // let resList = resData;
  // state variable (updates and rerenders UI)
  const [resList, setList] = useState([]);
  // filtered state variable to not allow repeated filters
  const [filteredList, setFiltered] = useState(resList);
  // state variable for search box
  const [searchText, setSearchText] = useState("");

  // using use effect to fetch data from an api
  // it's called after the component renders
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // fetch data from swiggy api
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    // optional chaining
    let list =
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setList(list);
    setFiltered(list);
  };

  const updateData = async () => {
    let data = SWIGGY_POST_DATA;
    data.widgetOffset.collectionV5RestaurantListWidget_SimRestoRelevance_food_seo =
      String(resCount);
    resCount += 20;
    console.log(resCount);
    const response = await fetch(SWIGGY_POST_URL, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const json = await response.json();
    // optional chaining
    let list =
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    list = resList.concat(list);
    setList(list);
    setFiltered(list);
  };

  return (
    <div className="main-body">
      <div className="filter">
        <i>Filter food joints: </i>
        <button
          className="filter-btn"
          onClick={() => {
            setFiltered(resList.filter((res) => res.info.avgRating > 4.2));
          }}
        >
          Top Rated Places
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            setFiltered(
              resList.filter((res) => res.info.sla.deliveryTime <= 30)
            );
          }}
        >
          Delivery in 30
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            setFiltered(
              resList.filter((res) => res.info.cuisines.includes("Burgers"))
            );
          }}
        >
          Burger Places
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            fetchData();
          }}
        >
          Show All Places
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            updateData();
          }}
        >
          Load More Places
        </button>

        <input
          placeholder="Search for a place 🔍"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            let res = resList.filter((res) =>
              res.info.name.toLowerCase().includes(e.target.value.toLowerCase())
            );
            if (res.length > 0) setFiltered(res);
          }}
        />
      </div>
      <div className="res-container">
        {filteredList.length === 0
          ? Array(20)
              .fill(1)
              .map((e, i) => <Shimmer key={i} />)
          : filteredList.map((restaurant) => (
              <ResCard key={restaurant.info.id} {...restaurant} />
            ))}
      </div>
    </div>
  );
};

export default Body;
