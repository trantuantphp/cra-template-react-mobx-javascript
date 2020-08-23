import React from "react";
import { Empty } from "antd";
import image from "./empty.png";

const CustomEmpty = () => (
  <Empty image={image} imageStyle={{ height: 60 }} description={<span>#nothing_in_here.</span>}></Empty>
);

export default CustomEmpty;
