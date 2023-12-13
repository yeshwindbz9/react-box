import { useState } from "react";
import ResCategoryList from "./ResCategoryList";

const ResCategory = (props) => {
  const data = props?.data;
  const showItem = props?.showItem;
  const setShowIndex = props?.setShowIndex;
  const index = props?.index;
  // modify state variable of parent on click to toggle accordian
  const expandAccordion = () => {
    showItem ? setShowIndex(null) : setShowIndex(index);
  };
  return (
    <div className="w-full">
      {/* Accordian header */}
      <div
        className="bg-gray-200 rounded-md shadow-lg p-4 w-6/12 mx-auto my-4 cursor-pointer"
        onClick={expandAccordion}
      >
        <div className="flex justify-between">
          <span>
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔻</span>
        </div>
        {/* Accordian body */}
        <div>{showItem && <ResCategoryList items={data.itemCards} />}</div>
      </div>
    </div>
  );
};

export default ResCategory;
