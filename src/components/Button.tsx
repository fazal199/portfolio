"use client";
import React from "react";

const Button = ({ onClick, content, className = "", isIcon, isLoading = false }: any) => {
  return (
    <button
      disabled={isLoading}
      onClick={onClick}
      className={`font-bold text-lg tracking-[0.1em] rounded-slight py-2 px-8 border-2 border-second-medium box-normal-shadow ${className}`}
    >
      {
        !isLoading ? (
          <>
            {content}
            {isIcon && isIcon}
          </>
        ) : (
          <h1><Loader /></h1>
        )
      }


    </button>
  );
};

const Loader = () => {
  return (
    <div className="flex flex-row justify-center w-full pt-2 gap-2">
      <div className="w-4 h-4 rounded-full bg-second-medium animate-bounce [animation-delay:.7s]" />
      <div className="w-4 h-4 rounded-full bg-second-medium animate-bounce [animation-delay:.3s]" />
      <div className="w-4 h-4 rounded-full bg-second-medium animate-bounce [animation-delay:.7s]" />
    </div>

  )
}

export default Button;
