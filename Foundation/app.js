import React from "react";
import ReactDOM  from "react-dom/client";

const currentDate = new Date();

// React.createElement => JS Object => HTMLElement(after render)
const header = React.createElement(
  "h1",
  { id: "heading" },
  "HelloWorld! using ReactElement!"
);

// JSX (transpiled by Babel before it reaches JS) => React.createElement (JS Object) => HTMLElement(after render)
const jsxHeader = <h4 className="anotherHeading">"HelloWorld! using JSX!"</h4>;
const paraTag = <p>ParaTag here! {jsxHeader}</p>

// React Component
// Functional Components with component composition
const MainComponent = () => {
  return (
    <div> 
      <TitleComponent></TitleComponent> 
      {<h2>Check this out======================================</h2>}
      {TitleComponent()}
      {<h2>Check this out======================================</h2>}
      <TitleComponent/>
    </div>
  );
}

const TitleComponent = () => {
  return (
    <div>
      <h2 className="HeadingComponent">"HelloWorld! using Functional Component!"</h2>
      <h3>Current Date is {currentDate.toDateString()}</h3>
      {paraTag}
    </div>
    
  );
}


const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(jsxHeader); //replaces everything in the root element with header
root.render(<MainComponent/>)
