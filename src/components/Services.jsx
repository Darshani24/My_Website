import React from "react";
import ServiceCard from "./ServiceCard";
import img1 from "../assets/img1.jpeg"
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.jpeg";

const Services = () => {
  return (
     <>
      <ServiceCard
        url={img1}
        title="App Development"
        description="we have a team of experienced software engineers who are skilled in different programming languages and platform. We work closely with our clients to understand their specific needs and requirements. We provide a wide range of services including web development, mobile app development, and software development."
        reverse={false}
      />

      <ServiceCard
        url={img2}
        title="Graphic Design"
        description="we have a team of experienced graphic designers who are skilled in using a variety of design software and tools to create visually appealing and effective designs. We work closely with our clients to understand their specific needs and requirements. We provide a wide range of services including logo design, branding, and marketing materials."
        reverse={true}
      />
      <ServiceCard
        url={img3}
        title="Creative Ideas"
        description="Our team is dedicated to generating innovative ideas that can help our clients achieve their goals and make a lasting impression on their customers. We work closely with our clients to understand their specific needs and requirements. We provide a wide range of services including brainstorming sessions, concept development, and creative strategy."
        reverse={false}
      />

      <ServiceCard
        url={img4}
        title="Marketing"
        description="Marketing refers to the activities and processes that a business uses to promote its products or services to potential customers. The key objective of marketing is to attract, engage, and convert potential customers into paying customers. Marketing can take many forms, including advertising, public relations, social media, and content marketing."
        reverse={true}
      />
    </>
  )
}

export default Services