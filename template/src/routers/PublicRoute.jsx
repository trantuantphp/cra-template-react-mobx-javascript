import React from "react";
import { Route } from "react-router-dom";
import LayoutM from "layouts";

const PublicRoute = (props) => {
  return (
    <LayoutM>
      <Route {...props} />
    </LayoutM>
  );
};

export default PublicRoute;
