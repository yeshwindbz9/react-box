import { useDispatch, useSelector } from "react-redux";
import ResCategoryList from "./ResCategoryList";
import { useState } from "react";
import { clear } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [showCart, setShowCart] = useState(false);
  const toggleAccordion = () => {
    showCart ? setShowCart(false) : setShowCart(true);
  };
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clear());
  };
  return (
    <div className="flex-1 bg-gray-100 rounded-md p-2 text-center">
      <h1 className="text-4xl font-semibold mb-4">Cart</h1>

      <button
        className="border border-gray-500 p-1 rounded-md font-tsukimi-rounded hover:shadow-md"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>

      <div className="w-full">
        {/* Accordian header */}
        <div
          className="bg-gray-200 rounded-md shadow-lg p-4 w-5/6 mx-auto my-4 cursor-pointer "
          onClick={toggleAccordion}
        >
          <div className="flex justify-between w-5/6">
            <span>Cart Items</span>
            <span>🔻</span>
          </div>
          {/* Accordian body */}
          {cartItems.length === 0 ? (
            <div>
              {showCart && <h1>Cart is empty! Go on add something!</h1>}
            </div>
          ) : (
            <div>
              {showCart && (
                <ResCategoryList items={cartItems} showAdd={false} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
