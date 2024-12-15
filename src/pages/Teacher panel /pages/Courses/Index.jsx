import React from 'react'
import { Outlet } from 'react-router-dom'

const Index = () => {
  return (
    <div  className="min-h-screen bg-[#F8F9FA] flex flex-col p-4 px-8 justify-start items-start  gap-8">
            <Outlet />
        </div>
  )
}

export default Index