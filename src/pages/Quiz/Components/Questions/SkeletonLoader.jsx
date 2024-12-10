import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className='min-h-screen '>

<div className="text-white my-10">
      <div className="text-white  ">
        <p className="text-center font-semibold   ">
          <span className="bg-gray-300 w-72 h-9 rounded-md animate-pulse inline-block "></span> 
        </p>

        <div className="flex flex-col items-center justify-center my-5 gap-y-2">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-300 h-14 w-1/2 animate-pulse rounded-md flex items-center justify-start px-5 text-black font-semibold gap-x-5"
            >
              <span className="bg-gray-400 w-6 h-6 animate-pulse rounded-full mr-3"></span> 
              <span className="bg-gray-400 w-1/2 h-6 animate-pulse rounded"></span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  
  );
};

export default SkeletonLoader;
