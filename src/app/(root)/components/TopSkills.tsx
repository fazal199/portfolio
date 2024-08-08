import Heading from "@/components/Heading";
import { logoType } from "@/types";
import Image from "next/image";
import React from "react";

const TopSkills = () => {

  const logoContent: Array<logoType> = [
    {
      text: "Nextjs",
      imgSrc: "/logos/nextlogo.webp",
      alt: "nexjstlogo"
    },
    {
      text: "Reactjs",
      imgSrc: "/logos/reactlogo.webp",
      alt: "reactlogo"
    },
    {
      text: "Typescript",
      imgSrc: "/logos/typescriptlogo.webp",
      alt: "typescriptlogo"
    },
    {
      text: "Mongodb",
      imgSrc: "/logos/mongodblogo.webp",
      alt: "mongodblogo"
    },
    {
      text: "Nodejs",
      imgSrc: "/logos/nodelogo.webp",
      alt: "nodelogo"
    },
    {
      text: "Redux",
      imgSrc: "/logos/reduxlogo.webp",
      alt: "reduxlogo"
    },
  ]
  return (
    <section className="mt-44">
      <Heading content="My Top Skills" />
      <div className="grid grid-cols-3 gap-16 mt-16 max-w-xl mx-auto mobile-md:gap-8">
        {
          logoContent.map((item) => (<LogoCard key={item.text} text={item.text} imgSrc={item.imgSrc} alt={item.text} />))
        }
      </div>
    </section>
  );
};

const LogoCard = ({ text, imgSrc, alt }: logoType) => {
  return (
    <div>
      <figure className="box-normal-shadow overflow-hidden rounded-2xl">
        <Image
          src={imgSrc}
          alt={alt}
          width={500}
          height={500}
          className={`${text == "Nextjs" && `w-full max-h-[9.3rem] py-[3.1vw] mobile-md:max-h-[9.5] mobile-md:py-[3.8]  bg-white object-cover`}`}

        />
      </figure>
      <div className="text-center mt-4 font-semibold">{text}</div>
    </div>
  );
};

export default TopSkills;
