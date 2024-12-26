import React from "react";

const TopText = ({name,title}) => {


  
  return (
    <div className="relative flex flex-col items-center justify-center my-10">
      <p className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold">
  
        {name}
      </p>
      <p className="text-sm sm:text-base lg:text-lg text-gray-500">
      
        {title}
      </p>
    </div>
  );
};

export default TopText;
