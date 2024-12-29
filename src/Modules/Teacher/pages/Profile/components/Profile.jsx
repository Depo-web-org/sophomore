import React from "react";
import { BsFillCameraFill } from "react-icons/bs";

const Profile = () => {
  return (
    <div className="w-full min-h-40 ">
      <div className="relative bg-gradient-to-r from-[#F15C54] from-10%  to-[#536CB3] to-90% w-full h-48 rounded-tl-[100px] rounded-tr-lg">
        {/* icon */}
        <BsFillCameraFill className="absolute top-4 right-7 h-6 w-6 text-white" />
        {/* img */}
        <img
          className="border-2 border-white absolute top-36 left-24 w-24 h-24 sm:w-32 sm:h-32 rounded-full"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile"
        />
      </div>

      {/* section Name */}
      <div className="relative min-h-36 sm:px-4 py-4 w-full mt-10 sm:mt-0 sm:w-[60%] ms-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-bold  text-md">Mohamed Ayman</p>
            <p className="text-gray-400 text-sm">
              Update your photos and personal Details
            </p>
          </div>

          <button
            type="button"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className="rounded bg-primary px-4 py-2 text-sm font-semibold text-white transition-all duration-300"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
