import ResCard from "./ResCard";
import { useState } from "react";
import resData from "../utils/mockData";

const Body = () => {
  // normal variable (updates but does not rerender UI)
  // let resList = resData;
  // state variable (updates and rerenders UI)
  const [resList, setList] = useState(resData);

  return (
    <div className="main-body">
      {/* <div className="search">
            Searchbar
          </div> */}
      <div className="filter">
        <i>Filter food joints: </i>
        <button
          className="filter-btn"
          onClick={() => {
            setList(resData.filter((res) => res.info.avgRating > 4.5));
          }}
        >
          Top Rated Places
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            setList(resData.filter((res) => res.info.sla.deliveryTime <= 30));
          }}
        >
          Delivery in 30
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            setList(
              resData.filter((res) => res.info.cuisines.includes("Burgers"))
            );
          }}
        >
          Burger Places
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            setList(resData);
          }}
        >
          Show All Places
        </button>

        <input placeholder="Search for a place" className="search-box" />
        <button
          className="filter-btn"
          onClick={() => {
            let value = document.querySelector(".search-box").value;
            if (value === "")
              alert("Please enter something in the search box!");
            else {
              let res = resData.filter((res) =>
                res.info.name.toLowerCase().includes(value.toLowerCase())
              );
              if (res.length > 0) setList(res);
              else alert("Sorry, coudn't find a place with that name.");
            }
          }}
        >
          🔍
        </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <ResCard key={restaurant.info.id} {...restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
