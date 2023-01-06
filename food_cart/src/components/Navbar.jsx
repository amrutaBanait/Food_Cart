import React, { useState } from "react";
import {
 
  AiOutlineMenu,
  AiOutlineSearch,
  
} from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left Side  */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl  sm:text-3xl lg:text-4xl px-2">
          Spicy <span className="font-semibold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      
      <div
        className="bg-gray-200 rounded-full flex items-center px-2 w-[200px]
          sm:w-[400px] lg:w-[500px]"
      >
        <AiOutlineSearch size={25} />
        <input
          type="text"
          className="bg-transparent w-full focus:outline-none p-2"
          placeholder="Search for foods, restaurants, cuisines"
        />
      </div>
     {/* Cart button  */}
     <button
        className="bg-black text-white 
      hidden md:flex items-center py-2 rounded-full"
      >
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>
{/* Mobile Menu  */}
      {/* { overlay} */}

      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
     
    

      
  
    </div>
  );
};

      

      
      
 
export default Navbar;
