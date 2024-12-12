import React from "react";

const MinProfile = () => {
  return (
    <div className="mx-5 lg:pe-20">
      {/* form */}
      <div className="flex flex-col sm:flex-row items-center my-5 lg:w-[calc(100%-30%)] ms-auto">
        <span className="font-medium text-white text-base sm:text-lg me-auto pb-2">
          User Name
        </span>

        <label
          htmlFor="Username"
          className="w-full sm:w-64 relative block rounded-md border bg-white border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <input
            type="text"
            id="Username"
            className="w-full py-2 bg-white peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="User Name"
          />

          <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2  p-0.5 text-xs text-gray-500 font-bold transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            Mohamed Ayman
          </span>
        </label>
      </div>
      <hr className="ms-auto lg:w-[calc(100%-30%)]" />

      {/* last section */}

      <div className="h-36 my-2 lg:w-[calc(100%-30%)] ms-auto">
        <div className=" text-right py-1 cursor-pointer">
          <pre className=" text-gray-400 font-light "> Delete | Update </pre>
        </div>

        <div>
          <div className="flex justify-start items-center py-1">
            <p className=" text-white font-bold  px-5">Photo</p>
            <img
              className="w-14 h-14"
              src="/public/Profile/Camera.svg"
              alt="photo"
            />
          </div>
          <p className=" text-gray-500 font-normal text-sm px-5 my-2">
            Update your photo or edit and delete it
          </p>
        </div>
      </div>

      <hr className="ms-auto lg:w-[calc(100%-30%)]" />
    </div>
  );
};

export default MinProfile;
