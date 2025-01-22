import React from 'react'

const SkeletonCourseInfo = () => {
  return (
    <>
<div className="bg-slate-800 p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none  my-32 w-4/5 mx-auto">
  <div className="h-52 sm:h-full sm:w-72 rounded-xl bg-slate-900 animate-pulse" />
  <div className="flex flex-col flex-1 gap-5 sm:p-2">
    <div className="flex flex-1 flex-col gap-3">
      <div className="bg-slate-900 w-full animate-pulse h-14 rounded-2xl" />
      <div className="bg-slate-900 w-full animate-pulse h-3 rounded-2xl" />
      <div className="bg-slate-900 w-full animate-pulse h-3 rounded-2xl" />
      <div className="bg-slate-900 w-full animate-pulse h-3 rounded-2xl" />
      <div className="bg-slate-900 w-full animate-pulse h-3 rounded-2xl" />
    </div>
    <div className="mt-auto flex gap-3">
      <div className="bg-slate-900 w-20 h-8 animate-pulse rounded-full" />
      <div className="bg-slate-900 w-20 h-8 animate-pulse rounded-full" />
      <div className="bg-slate-900 w-20 h-8 animate-pulse rounded-full " />
      <div className="bg-slate-900 w-20 h-8 animate-pulse rounded-full " />
    </div>
  </div>
  
</div>
    </>
  )
}

export default SkeletonCourseInfo