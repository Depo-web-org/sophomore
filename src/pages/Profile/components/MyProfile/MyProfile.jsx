import React from "react";
import { BsFillCameraFill } from "react-icons/bs";

export default function MyProfile() {
  return (
    <>
      {/* first section */}
      <div className="w-full min-h-40">
        <div className="relative bg-gradient-to-r from-[#F15C54] from-10%  to-[#536CB3] to-90% w-full h-48 rounded-tl-[100px] rounded-tr-lg">
          {/* icon */}
          <BsFillCameraFill className="absolute top-4 right-7 h-6 w-6 text-white" />
          {/* img */}
          <img
            className="border-2 border-white absolute top-36 left-24 w-24 h-24 sm:w-32 sm:h-32 rounded-full"
            src="https://s3-alpha-sig.figma.com/img/56b7/1855/5f70fa6b93cdb06490b027b82b3d0038?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d~bHqR3Tnv7B87ZkS7dnOnou3OMgxYRho3-0Bqmcf-zAhiGMsCqsiaTptyesTYF88SfmX9gDzNRtv1fpPKRuUivv-RnoebIHkc0q4oMpOxHFKWE8RK7gJ~N-t-0YMK4oGuxV7zMQoCbJzcuSFo~H2Pz5rF6suHciwMVFb3w64UxO~nHxVBdaScrD2payUGDss3VR~lPMsn1QwLb9l2-RMEO5ESy~Ax5qv~yWXJWM7YyXzZpMSFjJb~N6pbDZ2njGFj1wFD-eXjelqC4ITfIPzjT5N8EpwtNX0BW6IkaZQvIOdTA~7gEOY8hyUnj-7AXCEsx-upowkIE9zc6-FSoANA__"
            alt="profile"
          />
        </div>

        {/* section Name */}
        <div className="relative min-h-36 sm:px-4 py-4 w-full mt-10 sm:mt-0 sm:w-[60%] ms-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="font-bold text-white text-md">Sara Johnson</p>
              <p className="text-gray-300 text-sm">
                Update your photos and personal Details
              </p>
            </div>

            <button
              type="button"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              className="rounded bg-primary px-4 py-2 text-sm font-semibold text-white  hover:bg-blue-800 transition-all duration-300"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      {/* form */}
      <div className="flex flex-col sm:flex-row items-center mb-5 lg:w-[calc(100%-30%)] ms-auto">
        <span className="font-medium text-white text-base sm:text-lg me-auto pb-2">
          User Name
        </span>

        <label
          htmlFor="Username"
          className="w-full sm:w-64  relative block rounded-md border bg-white border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <input
            type="text"
            id="Username"
            className="w-full py-2 bg-white peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="User Name"
          />

          <span className="pointer-events-none absolute start-1 top-0 -translate-y-1/2  p-0.5 text-xs text-gray-400  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            Username
          </span>
        </label>
      </div>
      <hr className=" ms-auto lg:w-[calc(100%-30%)]" />

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
    </>
  );
}
