import React from "react";
import Header from "./Header";

const LayoutM = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default LayoutM;
