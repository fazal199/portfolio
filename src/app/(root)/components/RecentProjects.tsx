

import Heading from "@/components/Heading";
import ProjectCard from "@/components/ProjectCard";

import React from "react";
import { projectContent } from "../../../../constants";

const RecentProjects = () => {


  return (
    <section className="mt-44">
      <Heading content="Recent Projects" />
      <div className="grid grid-cols-3 gap-x-12 gap-y-20 mt-16 max-w-7xl mx-auto tablet:grid-cols-2 tablet:gap-x-10 mobile:gap-x-5 mobile-md:grid-cols-1">
        {
          projectContent.slice(0,3).map((item:any) => ( <ProjectCard key={item.id} id={item.id} imgUrl={item.imgUrl} heading={item.heading} content={item.content}/>))
        }
      </div>
    </section>
  );
};

export default RecentProjects;
