import { useEffect, useState } from "react";
import Mine from "./Mine";
import Cross from "../../public/images/Cross.svg"
import Star from './Star'

const MineField = ({ isActive }) => {
  const mines = Array.from({ length: 25 }, (_, index) => (
    <Mine
      key={index}
      className={index === 99 && isActive ? "block_step1" : isActive ? 'blocks_step1' : "svg_block"}
    />
  ));

  return (
    <div className="bg-[#0a0f1d] mt-[15px] mb-[20px] relative overflow-hidden max-w-[350px] mx-auto ">
      <div className="p-[15px] mine_wrap gap-3 max-w-[350px] mx-auto grid justify-center items-center grid-cols-5 overflow-hidden relative">
        {mines}
        <div className="absolute w-full left-0 h-full p-[15px] gap-3 max-w-[350px] grid justify-center items-center grid-cols-5">
        <Star size={54} className={`star ${isActive ?'starVisible starHidden' : 'starHidden'} `}/>
        <Star size={54} className={`star ${isActive ?'starVisible starHidden' : 'starHidden'} `}/>
        <Star size={54} className={`star ${isActive ?'starVisible starHidden' : 'starHidden'} `}/>
        <Star size={54} className={`star ${isActive ?'starVisible starHidden' : 'starHidden'} `}/>
        <img src={Cross} className={`${isActive ? 'crossVisible crossHidden' : 'crossHidden'}`}/>
        <img src={Cross} className={`${isActive ? 'crossVisible crossHidden' : 'crossHidden'}`}/>
        <Star size={54} className={`star ${isActive ?'starVisible starHidden' : 'starHidden'} `}/>
        <Star size={54} className={`star ${isActive ?'starVisible starHidden' : 'starHidden'} `}/>
        <Star size={54} className={`star ${isActive ?'starVisible starHidden' : 'starHidden'} `}/>
        <Star size={54} className={`star ${isActive ?'starVisible starHidden' : 'starHidden'} `}/>
        <img src={Cross} className={`${isActive ? 'crossVisible crossHidden' : 'crossHidden'}`}/>
        <Star size={54} className={`star ${isActive ?'starVisible starHidden' : 'starHidden'} `}/>
        <Star size={54} className={`star ${isActive ?'starVisible starHidden' : 'starHidden'} `}/>
        <Star size={54} className={`star ${isActive ?'starVisible starHidden' : 'starHidden'} `}/>
        <img src={Cross} className={`${isActive ? 'crossVisible crossHidden' : 'crossHidden'}`}/>
        <img src={Cross} className={`${isActive ? 'crossVisible crossHidden' : 'crossHidden'}`}/>
        <img src={Cross} className={`${isActive ? 'crossVisible crossHidden' : 'crossHidden'}`}/>
        <Star size={54} className={`star ${isActive ?'starVisible starHidden' : 'starHidden'} `}/>
        <Star size={54} className={`star ${isActive ?'starVisible starHidden' : 'starHidden'} `}/>
        <Star size={54} className={`star ${isActive ?'starVisible starHidden' : 'starHidden'} `}/>
        <Star size={54} className={`star ${isActive ?'starVisible starHidden' : 'starHidden'} `}/>
        <Star size={54} className={`star ${isActive ?'starVisible starHidden' : 'starHidden'} `}/>
        <Star size={54} className={`star ${isActive ?'starVisible starHidden' : 'starHidden'} `}/>
        {/* <img src={Cross} className= {`cross ${isActive ? 'crossDet' : null}`}/> */}
        <img src={Cross} className={`${isActive ? 'crossVisible crossHidden' : 'crossHidden'}`}/>
        <Star size={54} className={`star ${isActive ?'starVisible starHidden' : 'starHidden'} `}/>
        </div>
      </div>
      <div
        className={`glow_line ${isActive ? "glow_line_animated" : ""}`}
      ></div>
      <div className="elements absolute"></div>
    </div>
  );
};
export default MineField;
