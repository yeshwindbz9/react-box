import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL, SWIGGY_MENU_URL } from "../utils/constants";

const ResDetails = () => {
  //state var for holding res info
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams(); // destructure the params from url
  // include an empty dependency array since we only need to useEffect once
  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    const data = await fetch(SWIGGY_MENU_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null)
    return (
      <div
        className="main-body"
        style={{
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Shimmer />
      </div>
    );

  const { name, cuisines, costForTwo, cloudinaryImageId } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
  return (
    <div
      className="main-body"
      style={{
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <img
        height="300px"
        width="300px"
        src={CDN_URL + cloudinaryImageId}
        alt="resImg"
        style={{ borderRadius: "9px" }}
      ></img>
      <h1>{name}</h1>
      <h3>
        {"👀 Known for - "}
        {cuisines.concat(["and more 💭"]).join(", ")}
      </h3>
      <h4>
        {"Cost for two 💰 - Rs "}
        {costForTwo / 100}
      </h4>
      <h2>Recommended items 👍</h2>
      <ul>
        {itemCards.map((e, i) => (
          <li key={i}>
            {e.card.info.name} - {"₹ "}
            {e.card.info.price / 100 || e.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResDetails;
