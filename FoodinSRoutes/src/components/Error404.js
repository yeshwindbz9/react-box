import React from "react";
import { useRouteError } from "react-router-dom";

const Error404 = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Error404: Oops, something went wrong!</h1>
      <h2>
        Error messges: {err.status}, {err.statusText}, {err.data}
      </h2>
    </div>
  );
};

export default Error404;
