import React from 'react'
import img from "../assets/Logo.png";


const Footer = () => {
  return (
   <div
        className="bg-pink-600 text-white w-full
                    p-[40px]  
                    md:px-[60px] 
                    xl2:px-[70px] xl2:h-[300px]
                    xl3:px-[80px] xl3:h-[300px] pt-10 md:pt-14"
      >
        <div
          className="grid-cols-2
                        xl2:grid "
        >
          <div className='flex flex-row gap-5 '>
             <img
              src={img}
              alt="mx-logo"
              className="w-[130px] h-[85px]
                         xs:py-[20px]"
            />
           

            <p
              className="text-[12px] leading-[20px] font-lato w-full lg:text-[18px] "
            >
              We are a software development company specializing in creating cutting-edge solutions for a variety of industries. 
            </p>
          </div>

          <div
            className="flex flex-col gap-4  md:flex-row items-center justify-center pb-8 "
          >
            <div
              className="xs:pb-[30px] 
                            md:pt-[60px] 
                            xl2:pt-[20px] px-4  cursor-pointer"
            >
              <h6 className="text-[14px] md:text-[16px] font-semibold text-pink-50 hover:text-gray-800">Our Technologies</h6>
              <p className="text-[10px] md:text-[14px] pt-[8px] text-pink-50 hover:text-gray-800">ReactJS</p>
              <p className="text-[10px] md:text-[14px] pt-[8px] text-pink-50 hover:text-gray-800">React Native</p>
              <p className="text-[10px] md:text-[14px] pt-[8px] text-pink-50 hover:text-gray-800">NodeJS</p>
            </div>

            <div
              className="xs:pb-[30px] 
                            md:pt-[60px] 
                            xl2:pt-[20px] px-4  cursor-pointer"
            >
              <h6 className="text-[14px] md:text-[16px] font-semibold text-pink-50 hover:text-gray-800">Our Services</h6>
              <p className="text-[10px] md:text-[14px] pt-[8px] text-pink-50 hover:text-gray-800">Web & Mobile App Development </p>
              <p className="text-[10px] md:text-[14px] pt-[8px] text-pink-50 hover:text-gray-800">
              Custom Software Development
              </p>
              <p className="text-[10px] md:text-[14px] pt-[8px] text-pink-50 hover:text-gray-800">Cloud & Enterprise Solutions</p>
            </div>

            <div
              className="xs:pb-[30px] 
                            md:pt-[60px] 
                            xl2:pt-[20px] px-4 md:px-10 cursor-pointer "
            >
              <h6 className="text-[14px] md:text-[16px] font-semibold text-pink-50 hover:text-gray-800">Contact Us</h6>
              <p className="text-[10px] md:text-[14px] pt-[8px] text-pink-50 hover:text-gray-800">041-0987326 </p>
              <p className="text-[10px] md:text-[14px] pt-[8px] text-pink-50 hover:text-gray-800">
              No-7,New Town,Embilipitiya.
              </p>
              <p className="text-[10px] md:text-[14px] pt-[8px] text-pink-50 hover:text-gray-800">mxdigitalsolution@gmail.com</p>
            </div>



          </div>
        </div>

        <div>
          <hr
            className="h-[1px] 
                        md:mx-[69px] "
          />
          <p className="text-center pt-[8px] mb-20px text-[12px]">
            Privacy Policy | Terms & Conditions
          </p><p className="text-center pt-[8px] mb-20px text-[12px] ">
            © 2025 MX Technologies. All Rights Reserved
          </p>
        </div>
      </div>
  )
}

export default Footer