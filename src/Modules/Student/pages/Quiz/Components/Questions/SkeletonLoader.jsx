import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className='min-h-screen mt-10 lg:mt-0'> 

<div className="text-white  ">
      <div className="text-white b ">
        <p className="text-center font-semibold    ">
          <span className="bg-gray-300 w-1/2 h-10 rounded-md animate-pulse inline-block "></span> 
        </p>

        <div className="flex flex-col items-center justify-center my-5 gap-y-2  w-full ">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-300 h-10 w-4/5 lg:w-1/2 animate-pulse rounded-md flex items-center justify-start px-5 text-black font-semibold gap-x-5"
            >
              <span className="bg-gray-400 w-6 h-6 animate-pulse rounded-full mr-3"></span> 
              <span className="bg-gray-400 w-1/2 h-6 animate-pulse rounded"></span>
            </div>
          ))}
        </div>
      </div>
    </div>
   <div className='flex justify-center mx-auto '>
   <button onClick={()=>  window.location.reload()} className='text-white buttonHover  py-2 lg:py-3 px-7   rounded-md'>
            Refresh
    </button>
   </div>
    </div>
  
  );
};

export default SkeletonLoader;
