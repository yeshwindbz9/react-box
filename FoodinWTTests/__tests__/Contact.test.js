import { render, screen } from "@testing-library/react";
import Contact from "../src/components/Contact";
import "@testing-library/jest-dom";
import { describe } from "node:test";

describe("render test for contact page", () => {
  test("render test for contact page should load the heading", () => {
    render(<Contact />);
    //Querying
    const heading = screen.getByText("Contact page");
    //Assert
    expect(heading).toBeInTheDocument();
  });
  test("render test for contact page should load button", () => {
    render(<Contact />);
    //Querying
    const btn = screen.getByRole("button");
    //Assert
    expect(btn).toBeInTheDocument();
  });
  it("render test for contact page should load input", () => {
    render(<Contact />);
    //Querying
    const concern = screen.getByPlaceholderText("enter your concern");
    //Assert
    expect(concern).toBeInTheDocument();
  });
  it("render test for contact page should load all input", () => {
    render(<Contact />);
    //Querying
    const ipBoxes = screen.getAllByRole("textbox");
    //Assert
    expect(ipBoxes.length).toBe(3);
  });
});
