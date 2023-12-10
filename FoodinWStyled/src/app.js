import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error404 from "./components/Error404";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import ResDetails from "./components/ResDetails";
const ResDetails = lazy(() => import("./components/ResDetails"));
// using lazy loading instead

const AppComponent = () => {
  return (
    <div className="flex flex-col h-screen gap-1 font-tsukimi-rounded shadow-lg">
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
        // try using slow 3g network
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <ResDetails />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error404 />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(jsxHeader); //replaces everything in the root element with header
root.render(<RouterProvider router={appRouter} />);
