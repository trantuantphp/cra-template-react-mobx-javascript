import React from "react";
import "./Loading.scss";
import { Spin } from "antd";

const Loading = () => {
  return (
    <div className="wrapper wrapper--loading">
      <Spin />
    </div>
  );
};

export default Loading;
