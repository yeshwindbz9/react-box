import { render, screen } from "@testing-library/react";
import ResCard, { PromotedResCard } from "../src/components/ResCard";
import { Provider } from "react-redux";
import appStore from "../src/utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import resData from "../src/utils/mockData";

test("should load ResCard with data", () => {
  render(<ResCard {...resData[0]} />);
  const firstResName = screen.getByText("McDonald's");
  expect(firstResName).toBeInTheDocument();
});

test("should load ResCard with header for promoted restaurants", () => {
  const ResCardWHeader = PromotedResCard(ResCard);
  render(<ResCardWHeader {...resData[0]} />);
  const header = screen.getByText("✨ 10% OFF: ABOVE ₹1000");
  expect(header).toBeInTheDocument();
});
