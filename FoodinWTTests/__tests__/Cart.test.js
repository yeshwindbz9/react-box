import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import appStore from "../src/utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { renderIntoDocument } from "react-dom/test-utils";
import ResDetails from "../src/components/ResDetails";
import Header from "../src/components/Header";
import mockData from "./mockResMenu.json";
import Cart from "../src/components/Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mockData);
    },
  });
});

test("should load restaurant details component", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <ResDetails />
          <Cart />
        </BrowserRouter>
      </Provider>
    );
  });

  const accordianHeader = screen.getByText("Biriyani (5)");
  fireEvent.click(accordianHeader);

  const foodItems = screen.getAllByTestId("food-items");
  expect(foodItems.length).toBe(5);

  const addBtn = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtn[0]);

  const cartLength = screen.getByTestId("cart-length");
  expect(cartLength).toHaveTextContent(1);

  const cartAccordianHeader = screen.getByText("Cart Items");
  fireEvent.click(cartAccordianHeader);

  expect(foodItems.length).toBe(5);
});
