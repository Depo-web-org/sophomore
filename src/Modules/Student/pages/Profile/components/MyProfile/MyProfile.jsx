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
      <div className="w-full min-h-40">
        <div className="relative bg-gradient-to-r from-[#F15C54] from-10% to-[#536CB3] to-90% w-full h-48 rounded-tl-[100px] rounded-tr-lg">
          {/* Image */}
          <img
            className="border-2 border-white absolute top-36 left-24 w-24 h-24 sm:w-32 sm:h-32 rounded-full"
            src={profileImage}
            alt="profile"
          />
        </div>
      </div>
      <div className="px-8">
        <div>
          {/* section Name */}
          <div className="relative min-h-36 sm:px-4 py-4 w-full mt-10 sm:mt-0 sm:w-[60%] ms-auto">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="font-bold text-white text-md">Sara Johnson</p>
                <p className="text-gray-500 font-normal text-sm">
                  Update your photos and personal Details
                </p>
              </div>

              <button
                type="button"
                className="rounded bg-primary p-2 text-lg font-semibold text-white "
              >
                Save
              </button>
            </div>
          </div>
        </div>

        {/* form */}
        <div className="   flex flex-col sm:flex-row items-center mb-5 lg:w-[calc(100%-30%)] ms-auto">
          <label
            htmlFor="Username"
            className="w-full text-white text-sm md:text-base  p-2 flex  items-center justify-between gap-2 flex-wrap"
          >
            Update UserName
            <input
              type="text"
              defaultValue={"username"}
              id="Username"
              className=" p-2 w-full text-gray-600 text-base rounded-md bg-white peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
            />
          </label>
        </div>
        <hr className=" ms-auto lg:w-[calc(100%-30%)]" />

        {/* last section */}

        <div className="h-36  lg:w-[calc(100%-30%)] ms-auto  flex justify-between items-start py-3 flex-wrap">
          <div>
            <div className="flex justify-start items-start">
              <label
                htmlFor="upload"
                className=" text-white font-medium cursor-pointer flex items-center gap-4"
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
                  className="w-14 h-14"
                  src="/public/Profile/Camera.svg"
                  alt="photo"
                />
              </label>
            </div>
            <p className=" text-gray-500 font-normal text-sm my-2">
              Update your photo or edit and delete it
            </p>
          </div>
          <div className=" text-right py-1 cursor-pointer text-white">
            <button>Delete </button>
            <span className="px-3">|</span>
            <button>Update</button>
          </div>
        </div>

        <hr className="ms-auto lg:w-[calc(100%-30%)] mt-2" />
      </div>
    </div>
  );
}
