import { CDN_URL } from "../utils/constants";

const ResCategoryList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left"
        >
          <div className="flex justify-between">
            <div className="flex flex-col justify-start">
              <span>{item?.card?.info?.name}</span>
              <span>Rs. {item?.card?.info?.price / 100}</span>{" "}
            </div>
            <div>
              <img
                className="w-20 h-20 rounded-md"
                src={CDN_URL + item?.card?.info?.imageId}
                alt="no image"
              />
            </div>
          </div>
          <div>
            <span>{item?.card?.info?.description}</span>
          </div>
          <button className=" p-2 rounded-md bg-gray-300 text-green-600">
            Add +
          </button>
        </div>
      ))}
    </div>
  );
};

export default ResCategoryList;
