import React from 'react'

const SkeletonTeacherCards = () => {
  return (
    <>
<div>
  <div className="flex min-h-screen flex-col justify-center bg-gray-900 py-12 px-4">
    <div className="relative bg-white p-4  shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg rounded-lg">
      <div className="m-2 max-w-sm animate-pulse">
        <div className="flex items-center justify-center h-48 w-full bg-gray-300 dark:bg-gray-700 sm:w-96">
        </div>
        <div className="h-8 w-48 mb-4 mt-2 rounded-full bg-gray-200 dark:bg-gray-700" />
        <div className="h-2 max-w-[360px] mb-2.5 rounded-full bg-gray-200 dark:bg-gray-700" />
        <div className="h-6 rounded-full mb-2.5 bg-gray-200 dark:bg-gray-700" />
        <div className="h-6 max-w-[330px] rounded-full mb-2.5 bg-gray-200 dark:bg-gray-700" />
        <div className="h-7 max-w-[50px] rounded-full mb-2.5 bg-gray-200 dark:bg-gray-700" />
      </div>
     
    </div>
  </div>
  <style dangerouslySetInnerHTML={{__html: "\n  .mask {\n    mask-image: linear-gradient(180deg, white, rgba(255, 255, 255, 0));\n  }\n" }} />
</div>

    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default SkeletonTeacherCards