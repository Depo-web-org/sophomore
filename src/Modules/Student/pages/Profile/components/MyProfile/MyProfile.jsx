import React, { useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";

export default function MyProfile() {
  const [profileImage, setProfileImage] = useState(
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className=" ">
      {/* first section */}
      <div className="w-full min-h-40 ">
        {/* cover */}
        <div className="relative bg-gradient-to-r from-secondary from-10% to-primary to-90% w-full h-48 rounded-tl-[100px] rounded-tr-lg">
          {/* Image */}
          <img
            className="border-2 border-white absolute top-36 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-24 w-24 h-24 sm:w-32 sm:h-32 rounded-full object-fit"
            src={profileImage}
            alt="profile"
          />
        </div>
        <div className="px-1 lg:px-8">
          {/* section Name */}
          <div className="relative md:min-h-24 lg:min-h-36 sm:px-4 pt-4 w-full mt-10 sm:mt-20 lg:mt-0 lg:w-[60%] ms-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 lg:gap-4  ">
              <div className="w-full text-center lg:text-start">
                <p className="font-bold text-white text-lg">Sara Johnson</p>
                <p className="text-gray-500 font-normal text-xs lg:text-sm text-n">
                  Update your photos and personal Details
                </p>
              </div>

              <button
                type="button"
                className="rounded bg-primary p-2 text-xs lg:text-base font-semibold text-white "
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-1 lg:px-8">
        {/* form */}
        <div className="   flex flex-col sm:flex-row items-center mb-5 lg:w-[70%] ms-auto border-b border-gray-50 pb-2">
          <label
            htmlFor="Username"
            className="w-full text-white font-medium text-sm md:text-base  py-2 flex  items-center justify-between gap-2 flex-wrap"
          >
            Update UserName
            <input
              type="text"
              defaultValue={"username"}
              id="Username"
              className=" p-2 w-full text-gray-600 font-normal rounded-md bg-white peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-sm md:text-base"
            />
          </label>
        </div>
        {/* <hr className=" ms-auto lg:w-[70%]" /> */}

        {/* last section */}

        <div className=" mb-5 border-b border-gray-50  lg:w-[70%] ms-auto gap-2  flex justify-center sm:justify-between  items-center pb-3 flex-wrap">
          <div>
            <div className="flex justify-center lg:justify-start items-start ">
              <label
                htmlFor="upload"
                className=" text-white font-medium cursor-pointer flex items-center gap-2 lg:gap-4"
              >
                upload Photo
                <input
                  type="file"
                  id="upload"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
                <img
                  className=" size-10 lg:size-14"
                  src="images/Profile/Camera.svg"
                  alt="photo"
                />
              </label>
            </div>
          </div>
          <div className=" text-right py-1 cursor-pointer text-white  ">
            <button>Delete </button>
            <span className="px-3">|</span>
            <button>Update</button>
          </div>
        </div>
        <p className=" text-gray-500 font-normal text-xs lg:text-sm text-nowrap my-2 pb-4 text-center ">
          Update your photo or edit and delete it
        </p>
      </div>
    </div>
  );
}
