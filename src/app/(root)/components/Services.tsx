import Heading from "@/components/Heading";
import ProjectCard from "@/components/ProjectCard";
import React from "react";

const Services = () => {

  const servicesContent = [
    {
      id: 1,
      heading: "Landing Page",
      content: "Get a landing page that works for you. I create simple, clear, and effective designs that attracts customers and Grow Your Business. Let's work together to grow your business.",
      imgUrl: "/services/serv1.webp",

    },
    {
      id: 2,
      heading: "Custom Web-App",
      content: "Get a custom web app that meets your needs. I Develop simple, efficient, and user-friendly web apps that enhance your business. Let's work together to achieve your business goals.",
      imgUrl: "/services/serv2.webp",
    },
    {
      id: 3,
      heading: "Full Custom Website",
      content: "Get a custom full custom website that meets your needs. I Develop simple, efficient, and user-friendly websites that enhance your business. Let's work together to achieve your business goals.",
      imgUrl: "/services/serv3.webp",
    },
    {
      id: 4,
      heading: "Portfolio Design",
      content: "Get a custom web app that meets your needs. I Develop simple, efficient, and user-friendly web apps that enhance your business. Let's work together to achieve your business goals.",
      imgUrl: "/services/serv4.webp",
    }

  ]
  return (
    <section className="mt-44 pb-40">
      <Heading content="What Can I Do?" />
      <div className="grid grid-cols-2 gap-24 mt-16 max-w-5xl mx-auto tablet:gap-x-12 tablet:gap-y-16 tablet:mobile:gap-x-8 mobile-md:grid-cols-1">
        {
          servicesContent.map((item) => (<ProjectCard key={item.id} heading={item.heading} btnText="contact" content={item.content} imgUrl={item.imgUrl} isContactCard={true} />))
        }
      </div>
    </section>
  );
};

export default Services;
