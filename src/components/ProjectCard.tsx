import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const ProjectCard = ({ id, heading = "The Password Manager", content = "this is default text", btnText = "continue", imgUrl, isContactCard = false }: any) => {
  return (
    <Link
      href={isContactCard ? `/contact` : `/project/${id}`}
      className="box-normal-shadow rounded-2xl overflow-hidden"
    >
      <figure>
        <Image
          src={imgUrl || "/projectimages/placeholder.webp"}
          unoptimized={true}
          alt="project image"
          height={200}
          width={100}
          className="w-full h-[16rem] object-cover object-center "
        />
      </figure>
      <div className="py-8 px-6  tablet:py-6">
        <h3 className="text-2xl font-semibold">{heading}</h3>
        <p className="mt-6 text-[1rem] capitalize text-white/80 leading-[2.2] mobile-md:mt-4">
          {!isContactCard ? content?.slice(0, 130).trim() + '...' : content}
        </p>
        <Button content={btnText} className="capitalize w-full mt-7 active:bg-white" />
      </div>
    </Link>
  );
};

export default ProjectCard;
