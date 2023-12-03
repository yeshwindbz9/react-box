import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
    // console.log(props.info.name)
    const {name, cuisines, avgRating, sla, cloudinaryImageId} = props?.info
    return (
      <div className="res-card" style={{backgroundColor: "lightgray"}} >
        <img className="res-logo" width="94" height="94" src={CDN_URL+cloudinaryImageId} alt="salami-pizza"/>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} ⭐</h4>
        <h4>{sla.deliveryTime} mins</h4>
      </div>
    );
}

export default ResCard;