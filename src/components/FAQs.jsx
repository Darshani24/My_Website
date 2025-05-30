import React, { useState } from "react";

const FAQs = () => {

    const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We specialize in custom software development, web and mobile app development, and enterprise solutions tailored to various industries.",
    },
    {
      question: "How do you ensure project quality?",
      answer: "We follow industry best practices, including agile methodologies, rigorous testing, and continuous feedback loops to deliver high-quality solutions.",
    },
    {
      question: "How long does a typical project take?",
      answer: "The timeline depends on project complexity, but we provide a clear roadmap and regular updates to ensure timely delivery.",
    },
  ];
  return (
   <div
      className=" xs:my-[60px] 
                    md:my-[60px] md:mx-[42px]
                    xl2:my-[80px] xl2:mx-[152px] 
                    xl3:my-[80px] xl3:mx-[297px] p-9"
    >
      <h2
        className="text-[25px] font-semibold text-center leading-[33px] text-primary font-poppins  
                       xs:px-[20px] 
                       md:px-[148px] pb-10 lg:pb-14"
      >
        Frequently asked questions
      </h2>
      <div>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-[7px] bg-[#f8f3f8] text-[14px] xs:m-[20px] p-[16px] "
          >
            <div className="flex justify-between" onClick={() => toggleFAQ(index)}>
              <p className={`font-medium cursor-pointer ${openIndex === index ? 'text-primary' : 'text-black'}`}>
                {faq.question}
              </p>
              <span className={`font-bold cursor-pointer ${openIndex === index ? 'text-primary' : 'text-black'}`}>
                {openIndex === index ? "—" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-[8px] text-[##6F6C90] text-[18px] leading-[30px] ">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQs