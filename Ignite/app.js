import React from "react";
import ReactDOM  from "react-dom/client";

const header = React.createElement(
  "h1",
  { id: "heading" },
  "HelloWorld! using React!"
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm the first header"),
    React.createElement("h1", {}, "I'm the second header"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm the first header in second child"),
    React.createElement("h1", {}, "I'm the second header in second child"),
  ])]
);

root.render(parent);
