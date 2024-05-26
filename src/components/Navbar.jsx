import React from "react";
import leaf from "../Assets/leaf.gif";
const Navbar = () => {
  return (
    <>
      <div className="flex justify-around items-center w-full">
        <div className="flex items-center ">
          <h1 className=" flex justify-center items-center font-bold text-[8vh] text-green-600 ">
            <h1 className="text-green-800 ">L</h1>eafy
          </h1>
          <img src={leaf} alt="Leafy" />
        </div>
        <div className="flex gap-9 text-green-800  text-[3vh]">
          <button className="hover:text-green-900 hover:scale-125 transition-all hover:font-semibold ">
            <a href="#"> Home</a>
          </button>
          <button className="hover:text-green-900 hover:scale-125 transition-all hover:font-semibold ">
            <a href="#about">About us</a>
          </button>
          <button className="hover:text-green-900 hover:scale-125 transition-all hover:font-semibold ">
            <a href="#contact">Contact</a>
          </button>
          <button className="hover:text-green-900 hover:scale-125 transition-all hover:font-semibold ">
            <a href="#uploadimage">Upload Image</a>
          </button>
          <button className="hover:text-green-900 hover:scale-125 transition-all hover:font-semibold ">
            <a href="#contact">Write Us</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
