import React from "react";

const Form = () => {
  return (
    <div className="lg:w-[calc(100%-30%)] min-h-96 sm:ms-auto my-4 lg:my-16 sm:mt-10 px-5 lg:px-0">
      {/*first email */}
      <div className="sm:pe-32 flex flex-col sm:flex-row items-center gap-4">
     

       
        <label
          htmlFor="Email"
          className="w-full  text-gray-500 font-semibold text-lg relative  rounded-md flex flex-wrap gap-y-4 justify-between items-center    "
        >
          Email
          <input
            type="email"
            id="Email"
            className="  w-full lg:w-1/2 p-2 bg-[#e2e4e6]  text-base placeholder:text-sm rounded-lg border-none   0  font-semibold focus:outline-gray-400 focus:outline focus:ring-0"
            placeholder="email@example.com"
          />

        
        </label>
      </div>

      <div className="sm:pe-60 pt-4 lg:pt-10">
        <div >
        <label
          htmlFor="New-Password"
          className="w-full  text-gray-500 font-semibold text-lg relative  rounded-md flex flex-col justify-between items-start    gap-y-4  "
        >
            Enter New Password
            <input
            type="password"
            id="New-Password"
            className="w-full lg:w-3/4 p-2 bg-[#e2e4e6]  text-base placeholder:text-sm rounded-lg border-none   font-semibold focus:outline-gray-400 focus:outline focus:ring-0"
            placeholder="*********"
          />
          </label>

         
        </div>

        <div className="py-4">
        <label
          htmlFor="Retype-New-Password"
          className="w-full  text-gray-500 font-semibold text-lg relative  rounded-md flex flex-col justify-between items-start    gap-y-4  "
        >
            Retype New Password
            <input
            type="password"
            id="Retype-New-Password"
            className="w-full lg:w-3/4 p-2 bg-[#e2e4e6]  text-base placeholder:text-sm rounded-lg border-none   font-semibold focus:outline-gray-400 focus:outline focus:ring-0"
            placeholder="*********"
          />
          </label>
        </div>

        <button
          type="button"
          data-twe-ripple-init
          data-twe-ripple-color="light"
          className=" w-full lg:w-auto rounded bg-primary px-2 py-2 text-md font-semibold text-white hover:bg-secondary transition-all duration-300"
        >
          Change Password
        </button>
      </div>
      {/* end */}
    </div>
  );
};

export default Form;
