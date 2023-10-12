import React from "react";
import img from "../assets/article-preview-component-master/images/drawers.jpg";

const LeftContainer = () => {
  return (
    <aside className="md:w-[18rem] ">
      <img
        src={img}
        alt="drawers"
        className=" object-cover md:rounded-tl-xl md:rounded-bl-xl h-full rounded-tl-xl rounded-tr-xl md:rounded-tr-none"
      />
    </aside>
  );
};

export default LeftContainer;
