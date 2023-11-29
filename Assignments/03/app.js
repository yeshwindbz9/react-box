import React from "react";
import ReactDOM  from "react-dom/client";

const currentDate = new Date();

// Nested element using React.createElement 
const titleDiv = React.createElement(
  "div",
  { class: "title" },
  React.createElement(
    "h3",
    {},
    "HelloWorld! using React.create Element!"
  )
);

// Nested element using JSX
const titleDivJSX = (
  <div className="title">
    <h3>"HelloWorld! using JSX!"</h3>
  </div>
);

// Functional component of the same
const titleDivFC =() => (
  <div className="title">
    <h3>"HelloWorld! using FC!"</h3>
  </div>
);

const MainComponent= () => (
  <header>
		<div class="logo">
      <img width="60" height="60" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-namaste-yoga-flaticons-lineal-color-flat-icons.png" alt="namaste"/>
		</div>
		<div class="search-bar">
			<form>
				<input type="text" placeholder="Search..."/>
				<button type="submit"><img class="fas fa-search" width="10" height="10" src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1"/></button>
			</form>
		</div>
		<div class="user-icon">
      <img class="fas fa-user" width="60" height="60" src="https://img.icons8.com/clouds/100/user.png" alt="user"/>
		</div>
	</header>
);


const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(jsxHeader); //replaces everything in the root element with header
root.render(MainComponent())
