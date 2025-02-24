import React from "react";
import { IoCamera } from "react-icons/io5";

const MinProfile = () => {
  return (
    <div className="mx-5 lg:pe-20   ">
      {/* form */}
      {/* <div className="flex flex-col sm:flex-row items-center mb-4 lg:my-5 lg:w-[calc(100%-30%)] ms-auto">
        

        <label
          htmlFor="Username"
         className="w-full font-semibold text-lg text-gray-600 rounded-md flex flex-wrap gap-y-4 justify-between items-center    "
        >
          User Name
          <input
            type="text"
            id="Username"
            className=" w-full lg:w-1/3 p-2 bg-[#e2e4e6] text-base placeholder:text-sm  rounded-lg border-none   text-gray-500  font-semibold focus:outline-gray-400 focus:outline focus:ring-0"
            placeholder="User Name"
          />

        
        </label>
      </div> */}
      <hr className="ms-auto lg:w-[70%]  " />

      {/* last section */}

      <div className="h-36 my-2 lg:w-3/4 ms-auto flex  flex-col  ">
        <div className=" text-center lg:text-right py-1 cursor-pointer order-2 lg:order-1 ">
          <pre className=" text-gray-400 font-light hover:text-black duration-700 ">
        
            Delete | Update
          </pre>
        </div>

        <div className="order-1">
          <div className="flex justify-center lg:justify-start items-center py-1 ">
            <p className=" font-bold  px-5">Photo</p>
            <span className="bg-slate-200 p-3 rounded-full text-primary text-lg lg:text-3xl cursor-pointer">
            <IoCamera />
            </span>
          </div>
          <p className=" text-gray-500 font-normal text-xs text-center lg:text-start lg:text-sm px-5 my-2">
            Update your photo or edit and delete it
          </p>
        </div>
      </div>

      <hr className="ms-auto lg:w-[70%]" />
    </div>
  );
};

export default MinProfile;
