import { useEffect, useState } from "react";
import Mine from "./Mine";

const MineField = ({ isActive }) => {
  const mines = Array.from({ length: 25 }, (_, index) => (
    <Mine
      key={index}
      className={index === 22 && isActive ? "svg_2" : "svg_block"}
    />
  ));
  return (
    <div className="bg-[#0a0f1d] mt-[45px] mb-[20px] relative overflow-hidden max-w-[350px] mx-auto ">
      <div className="p-[15px] mine_wrap gap-3 max-w-[350px] mx-auto grid justify-center items-center grid-cols-5 overflow-hidden">
        {mines}
      </div>
      <div
        className={`glow_line ${isActive ? "glow_line_animated" : ""}`}
      ></div>
      <div className="elements absolute"></div>
    </div>
  );
};
export default MineField;
