import { useEffect, useState } from "react";
import { SWIGGY_MENU_URL } from "./constants";

const useResInfo = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    const data = await fetch(SWIGGY_MENU_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useResInfo;
