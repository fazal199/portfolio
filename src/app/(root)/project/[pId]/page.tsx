
import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import { projectContent } from "../../../../../constants";
import { Link } from "lucide-react";

export async function generateStaticParams() {
  return projectContent.map((post) => ({
    pId: post.id.toString(),
  }))
}

const ProjectDetailPage = ({ params }: any) => {

  const pId = params.pId;
  const data = projectContent.filter((item) => item.id == Number(pId))[0];



  return (
    <section className="pt-52 pb-16">
      <div className="max-w-6xl mx-auto grid-cols-2 grid gap-16 tablet:gap-8 tablet:grid-cols-1">
        <a href={data.link}>
          <figure className="h-full w-full">
            <Image
              src={data.imgUrl || '/projectimages/placeholder.webp'}
              alt="project photo"
              height={100}
              width={100}
              unoptimized={true}
              className="h-full w-full object-cover object-center border-8 border-dashed border-second-medium rounded-2xl"
            />
          </figure>
        </a>
        <div>
          <h2 className="text-3xl font-semibold tracking-wide mobile-sm:text-2xl">
            {data?.heading}
          </h2>
          <p className="mt-6 text-xl font-[500] mobile-sm:text-sm">
            Tech Used: {data?.techInfo}.
          </p>
          <p className="mt-5 leading-[2]">
            {data.content}
          </p>
        </div>
      </div>
      <a href={data.link}>
        {" "}
        <Button
          content={`Visit The Website`}
          className="w-8/12 mt-16 mx-auto py-4 flex gap-2 justify-center items-center mobile-sm:w-full mobile-sm:text-sm mobile-sm:mt-8"
          isIcon={<Link />}
        />
      </a>
    </section>
  );
};

export default ProjectDetailPage;
