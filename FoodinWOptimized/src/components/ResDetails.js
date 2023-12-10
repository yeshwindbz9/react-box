import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useResInfo from "../utils/useResInfo";

const ResDetails = () => {
  const { resId } = useParams(); // destructure the params from url
  const resInfo = useResInfo(resId); // this is a custom hook

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
