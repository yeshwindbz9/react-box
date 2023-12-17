import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import appStore from "../src/utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import resData from "../src/utils/mockData";
import { renderIntoDocument } from "react-dom/test-utils";
import Body from "../src/components/Body";
import MOCK from "./mock.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK);
    },
  });
});

test("should render the body component with search component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const searchInput = screen.getByTestId("search-box");
  fireEvent.change(searchInput, { target: { value: "burger" } });
  const cards = screen.getAllByTestId("res-card");
  expect(cards.length).toBe(4);
});

test("should render the body component with top rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  // const topRatedBtn = screen.getByTestId("top-rated")

  const topRatedBtn = screen.getByRole("button", { name: "Top Rated Places" });
  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("res-card");
  expect(cardsAfterFilter.length).toBe(6);
});
