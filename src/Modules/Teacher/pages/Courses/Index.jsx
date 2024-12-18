import React from 'react'
import { Outlet } from 'react-router-dom'

const Courses = () => {
  return (
    <div  className="min-h-screen bg-[#F8F9FA] flex flex-col justify-start p-4 px-8 gap-8">
            <Outlet />
        </div>
  )
}

export default Courses 