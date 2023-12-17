import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = props?.info;
  return (
    <div
      data-testid="res-card"
      className=" flex flex-col gap-3 m-1 rounded-md p-1 w-[200px] h-[500px] hover:border hover:border-black hover:cursor-pointer hover:shadow-2xl"
      style={{ backgroundColor: "lightgray" }}
    >
      <img
        className="w-[200px] h-[180px] rounded-md"
        width="94"
        height="94"
        src={CDN_URL + cloudinaryImageId}
        alt="salami-pizza"
      />
      <h3 className="text-xl">{name}</h3>
      <h4 className="text-sm">{cuisines.join(", ")}</h4>
      <h4 className="text-lg">{avgRating} ⭐</h4>
      <h4 className="text-lg">{sla.deliveryTime} mins</h4>
    </div>
  );
};

// Higher order component
export const PromotedResCard = (ResCard) => {
  return (props) => {
    const { header, subHeader } = props?.info?.aggregatedDiscountInfoV3;
    return (
      <div>
        <div className="relative">
          <p className="absolute left-1 rounded-md border-2 border-orange-200 text-center bg-black text-sm text-white p-1">
            ✨ {header}: {subHeader}
          </p>
        </div>

        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
