import React, { memo } from "react";
import { motion } from "framer-motion";

const ServiceCard = memo(({ url, title, description, reverse }) => {
  return (
   <>
     <motion.div
      initial={{ opacity: 0, x: -100 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.7}}
      viewport={{ once: false, amount: 0.7 }}
        className="place-items-center xs:my-[60px] xs:mx-[20px]
                   md:grid md:grid-cols-3 md:mx-[20px] 
                   xl2:mt-[80px] xl2:mx-[152px]
                   xl3:mt-[80px] xl3:mx[180px]"
      >
        <div className={reverse ? "order-last " : "order-first "}>

          <motion.img
            whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.2 }}
            src={url}
            alt="image"
            className="block mx-auto 
           w-[150px] h-[200px] sm:w-[205px] sm:h-[255px]
           md:w-[275px] md:h-[275px] 
           xl2:w-[346px] xl2:h-[348px]
           xl3:w-[414px] xl3:h-[414px] pt-8 shadow-2xl"
          />
        </div>

        <div
          className={
            reverse ? "order-first col-span-2" : "order-last col-span-2"
          }
        >
          <div className="text-center md:text-left md:px-[20px] p-[5px] md:p-[30px] lg:p-[80px]">
            <h2 className="text-[20px] lg:text-[26px] font-semibold leading-[33px] text-primary font-poppins pt-3">
              {title}
            </h2>
            <p className="text-black p-6 xs:my-[30px] text-[14px] lg:text-[18px] leading-[20px] text-justify ">
              {description}
            </p>

            <motion.button 
                    whileTap={{scale:0.9}}
                    whileHover={{scale:1.2, backgroundColor:"pink",color:"black"}}
                     className="bg-pink-600  text-white px-[10px] py-[10px]  rounded-[4px] text-[14px] leading-[24px] font-bold h-[50px] ">
                     Learn More
                    </motion.button>
          
          </div>
        </div>
      </motion.div>
    </>
  );
}
);
export default ServiceCard