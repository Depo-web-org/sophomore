import React from 'react'
import { IoClose } from 'react-icons/io5'

const SubmitUnitsModel = ({setModelOpen}) => {
  return (
    <>
     <div
      onClick={() => setModelOpen(false)}
      className="fixed inset-0 bg-slate-600 bg-opacity-50 flex items-center justify-center"
    >
      <div
        className="bg-slate-900 rounded-lg py-8 px-6 w-4/5 lg:w-1/2 mx-auto border-r-4 border-b-4 border-primary"
        onClick={(e) => e.stopPropagation()}
      >
       
        <div className="flex items-center justify-center flex-col gap-2">
          <p className=" text-white text-2xl font-bold">Are you sure </p>
          <span className="text-base font-normal leading-6 text-center text-[#72777A] mb-4">
           Submit Units
          </span>
          <div className='flex  gap-4 flex-wrap w-full justify-center '>
          <button  onClick={()=> console.log('DATA send')} className="bg-primary text-white px-4 py-2 w-full md:w-1/3  rounded-full">
            Yes
          </button>
          <button  onClick={() => setModelOpen(false)} className="bg-slate-900 border-white  border text-white px-4 py-2 w-full md:w-2/5 rounded-full">
            Discard
          </button>
          </div>
        
        </div>
      </div>
    </div>
    
    
    
    
    
    
    </>
  )
}

export default SubmitUnitsModel