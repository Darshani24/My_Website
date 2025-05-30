import React from "react";
import hero from '../assets/hero1.jpeg';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="w-full h-[475px] md:h-[536px] lg:h-[630px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.3 }}
        className="absolute top-[10%] lg:top-[15%] left-1/2 -translate-x-1/2
                   bg-gradient-to-r from-dark to-analogous2 bg-opacity-80
                   px-6 py-6 w-[90%] max-w-[600px] md:text-justify"
      >
        <h1
          className="text-[22px] md:text-[25px] lg:text-[35px] leading-[40px] text-white hover:text-gray-800 font-bold pb-[30px]"
        >
          We are a software development company delivering innovative solutions across industries.
        </h1>

        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.2, backgroundColor: "pink", color: "black" }}
          className="bg-pink-600 text-white px-5 py-3 rounded text-sm leading-6 font-bold h-[60px]"
        >
          GET FREE CONSULTATION
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
