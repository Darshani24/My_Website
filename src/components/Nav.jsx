import React from 'react'
import { useState } from "react";
import logo from "../assets/Logo.png";

const Nav = () => {

     const [isOpen, setIsOpen] = useState(false);

  return (
    <div
        className=" bg-pink-600 flex justify-between items-center
                    px-[20px] py-[20px] h-[100px]
                    md:px-[40px] md:py-[22px] md:h[80px]
                    xl2:px-[60px]   xl2:h-[101.5px] 
                    xl3:px-[80px]  xl3:h-[101px] "
      >
        <img
          src={logo}
          alt="Logo"
          className=" w-[85px] h-[65px]  md:w-[90px] md:h-[70px] lg:w-[95px] lg:h-[100px]  "
        />
       
        <div>
          <ul className="hidden md:flex text-black text-[16px] lg:text-[20px] my-[18px] leading-[16px]  ">
            <li>
              <a href="#" className="pr-[28px] ">
                
                
                HOME
                
              </a>
            </li>
            <li>
              <a href="#" className="pr-[28px]">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#" className="pr-[28px]">
                CONTACT US
              </a>
            </li>
            <li>
              <a href="#" className="">
              SERVICES
              </a>
            </li>
          </ul>
        </div>
        <button
          className="md:hidden text-white text-4xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {isOpen && (
  <div className="fixed inset-0 bg-pink-200 text-black flex flex-col p-8 z-40 h-[250px] overflow-y-auto">
    <button
      className="absolute top-[16px] right-[20px] text-3xl z-50"
      onClick={() => setIsOpen(false)}
    >
      ✖
    </button>

    <ul className="text-[14px] space-y-[16px] mt-[40px]">
      <li><a href="#" className="block">HOME</a></li>
      <li><a href="#" className="block">SERVICES</a></li>
      <li><a href="#" className="block">ABOUT US</a></li>
      <li><a href="#" className="block">CONTACT US</a></li>
    </ul>
  </div>
)}
      </div>
  )
}

export default Nav