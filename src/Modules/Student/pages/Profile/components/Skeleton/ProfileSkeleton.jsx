import React from 'react'

export default function ProfileSkeleton() {
  return (
    <div className="min-h-screen">
      <div className="animate-pulse">
          <div className="relative bg-gray-200 w-full h-48 rounded-tl-[100px] rounded-tr-lg mb-40"></div>
          <div className="absolute top-24 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-300 rounded-full"></div>
            <div className="space-y-2">
              <div className="w-32 h-6 bg-gray-300 rounded"></div>
              <div className="w-48 h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div className="px-4 lg:px-8 lg:w-[70%] mx-auto mt-56 space-y-4">
            <div className="w-full h-10 bg-gray-200 rounded"></div>
            <div className="w-full h-10 bg-gray-200 rounded"></div>
            <div className="w-full h-10 bg-gray-200 rounded"></div>
          </div>
        </div>
    </div>
  )
}
