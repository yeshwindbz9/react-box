import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/header";
import Body from "./components/Body";
import Footer from "./components/Footer"; 

const AppComponent = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(jsxHeader); //replaces everything in the root element with header
root.render(<AppComponent/>)
