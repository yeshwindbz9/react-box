import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useResInfo from "../utils/useResInfo";
import ResCategory from "./ResCategory";
import { useState } from "react";

const ResDetails = () => {
  const { resId } = useParams(); // destructure the params from url
  const resInfo = useResInfo(resId); // this is a custom hook

  // state index to expand accordian
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null)
    return (
      <div
        className="flex-1 bg-gray-100 rounded-md p-2 flex flex-col"
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
  const itemCards =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const categories = itemCards.filter(
    (item) =>
      item?.card?.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  return (
    <div
      className="flex-1 bg-gray-100 rounded-md p-2 gap-2 flex flex-col w-full "
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
      <h1 className="text-4xl font-bold">{name}</h1>
      <h3 className="text-3xl">
        {"👀 Known for - "}
        {cuisines.concat(["and more 💭"]).join(", ")}
      </h3>
      <h4 className="text-2xl">
        {"Cost for two 💰 - Rs "}
        {costForTwo / 100}
      </h4>
      {categories.map((cat, index) => (
        <ResCategory
          data={cat?.card?.card}
          key={index}
          index={index}
          showItem={index === showIndex ? true : false}
          setShowIndex={(index) => setShowIndex(index)}
        />
      ))}
      <ul></ul>
    </div>
  );
};

export default ResDetails;
