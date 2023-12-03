import {
  ADDRESS_ICON,
  CART_ICON,
  HEADER_LOGO,
  HOME_ICON,
  INFO_ICON,
} from "../utils/constants";

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
    <h1>Foodin A food ordering app clone </h1>
    <div className="nav-items">
      <ul>
        <li>
          <img width="40" height="40" src={HOME_ICON} alt="log-cabin" />
        </li>
        <li>
          <img width="40" height="40" src={INFO_ICON} alt="info" />
        </li>
        <li>
          <img width="40" height="40" src={ADDRESS_ICON} alt="address-book" />
        </li>
        <li>
          <img width="40" height="40" src={CART_ICON} alt="shopping-cart" />
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
