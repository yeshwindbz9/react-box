import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  // console.log(props.info.name)
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = props?.info;
  return (
    <div
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
      <h3 className="text-3xl">{name}</h3>
      <h4 className="text-2xl">{cuisines.join(", ")}</h4>
      <h4 className="text-2xl">{avgRating} ⭐</h4>
      <h4 className="text-2xl">{sla.deliveryTime} mins</h4>
    </div>
  );
};

export default ResCard;
