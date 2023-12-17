import { useSelector } from "react-redux";
import {
  ADDRESS_ICON,
  CART_ICON,
  HEADER_LOGO,
  HOME_ICON,
  INFO_ICON,
} from "../utils/constants";

import { Link } from "react-router-dom";

const Header = () => {
  // creating a selector to subscribe to the cart slice form store

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center bg-gray-100 rounded-md flex-shrink-0">
      <div className="logo-container">
        <img
          className="p-1 m-1"
          width="80"
          height="80"
          src={HEADER_LOGO}
          alt="fry"
        />
      </div>
      <h1
        className="text-4xl font-bold"
        style={{ textAlign: "center", alignContent: "center" }}
      >
        Foodin A food delivery app clone
      </h1>
      <div className="nav-items flex">
        <ul className="flex flex-wrap">
          <li className="p-3 m-2 list-none cursor-pointer">
            <Link to="/">
              <img width="40" height="40" src={HOME_ICON} alt="log-cabin" />
            </Link>
          </li>
          <li className="p-3 m-2 list-none cursor-pointer">
            <Link to="/about">
              <img width="40" height="40" src={INFO_ICON} alt="info" />
            </Link>
          </li>
          <li className="p-3 m-2 list-none cursor-pointer">
            <Link to="/contact">
              <img
                width="40"
                height="40"
                src={ADDRESS_ICON}
                alt="address-book"
              />
            </Link>
          </li>
          <li className="p-3 m-2 list-none cursor-pointer">
            <Link to="/cart">
              <span className="relative">
                <img
                  width="40"
                  height="40"
                  src={CART_ICON}
                  alt="shopping-cart"
                />
                <span
                  data-testid="cart-length"
                  className="w-11/12 h-1/2 absolute -top-2px -right-2px bg-gray-600 text-white rounded-3xl p-1 text-xs text-center"
                >
                  {cartItems.length}
                </span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
