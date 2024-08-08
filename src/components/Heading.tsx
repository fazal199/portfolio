import React from "react";

const Heading = ({ content }: any) => {
  return (
    <div className="max-w-lg mx-auto mobile-sm:w-full">
      <h2 className="text-5xl py-2 font-bold gradient-heading text-center tracking-[0.05em] mobile-md:text-4xl">
        {content}
      </h2>
      <div className="h-1 mt-4 w-full bg-second-medium mobile-md:mx-auto mobile-sm:mt-2"></div>
      <div className="h-1 mt-6 w-[80%] mx-auto bg-second-medium mobile-md:w-[80%] mobile-sm:mt-3"></div>
    </div>
  );
};

export default Heading;
