import {
  ADDRESS_ICON,
  CART_ICON,
  HEADER_LOGO,
  HOME_ICON,
  INFO_ICON,
} from "../utils/constants";

import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        width="80"
        height="80"
        src={HEADER_LOGO}
        alt="fry"
      />
    </div>
    <h1 style={{ textAlign: "center", alignContent: "center" }}>
      Foodin A food delivery app clone
    </h1>
    <div className="nav-items">
      <ul>
        <li>
          <Link to="/">
            <img width="40" height="40" src={HOME_ICON} alt="log-cabin" />
          </Link>
        </li>
        <li>
          <Link to="/about">
            <img width="40" height="40" src={INFO_ICON} alt="info" />
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <img width="40" height="40" src={ADDRESS_ICON} alt="address-book" />
          </Link>
        </li>
        <li>
          <img width="40" height="40" src={CART_ICON} alt="shopping-cart" />
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
