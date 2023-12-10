import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error404 from "./components/Error404";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ResDetails from "./components/ResDetails";

const AppComponent = () => {
  return (
    <div className="app">
      {/* push children according to routes */}
      <Header />
      {/* Outlet is filled with children according to the path */}
      <Outlet />
      <Footer />
    </div>
  );
};

//routing config
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <ResDetails />,
      },
    ],
    errorElement: <Error404 />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(jsxHeader); //replaces everything in the root element with header
root.render(<RouterProvider router={appRouter} />);
