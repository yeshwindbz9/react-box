import { render, screen } from "@testing-library/react";
import Header from "../src/components/Header";
import { Provider } from "react-redux";
import appStore from "../src/utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("should load header component with title", () => {
  // have to provide redux store
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const headerTitle = screen.getByText("Foodin A food delivery app clone");
  expect(headerTitle).toBeInTheDocument();
});

test("should load header component with cart", () => {
  render(
    // have to provide browser router
    <BrowserRouter>
      {/* // have to provide redux store */}
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartLogo = screen.getByAltText("shopping-cart");
  expect(cartLogo).toBeInTheDocument();
});
