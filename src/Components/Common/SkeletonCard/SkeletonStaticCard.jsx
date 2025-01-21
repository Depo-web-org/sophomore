import React from 'react'

const SkeletonStaticCard = () => {
    return (
        <div className="animate-pulse bg-gray-200 py-6 rounded-lg">
          {/* Icon Skeleton */}
          {/* <div className="h-12 w-12 lg:h-16 lg:w-16 bg-gray-300 rounded-full mb-4"></div> */}
    
          {/* Text Skeleton */}
          
          <div className="flex flex-col items-start justify-start space-y-2 mx-5">
            {/* Title Skeleton */}
            <div className="h-10 w-full bg-gray-300 rounded"></div>
    
            {/* Stats Skeleton */}
            <div className="h-10 w-1/4 bg-gray-300 rounded"></div>
          </div>
        </div>
      );
    };

export default SkeletonStaticCard