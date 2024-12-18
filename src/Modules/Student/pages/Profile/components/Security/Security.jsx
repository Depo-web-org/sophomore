import React from "react";

export default function Security() {
  return (
    <>
      {/* first section */}
      <div className="w-full h-72 ">
        <div className="relative bg-gradient-to-r from-[#F15C54] from-10% to-[#536CB3] to-90% w-full h-48 rounded-tl-[100px] rounded-tr-lg">
          {/* img */}
          <img
            className="border-2 border-white absolute top-36 left-24 w-24 h-24 sm:w-32 sm:h-32 rounded-full"
            src="https://s3-alpha-sig.figma.com/img/56b7/1855/5f70fa6b93cdb06490b027b82b3d0038?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d~bHqR3Tnv7B87ZkS7dnOnou3OMgxYRho3-0Bqmcf-zAhiGMsCqsiaTptyesTYF88SfmX9gDzNRtv1fpPKRuUivv-RnoebIHkc0q4oMpOxHFKWE8RK7gJ~N-t-0YMK4oGuxV7zMQoCbJzcuSFo~H2Pz5rF6suHciwMVFb3w64UxO~nHxVBdaScrD2payUGDss3VR~lPMsn1QwLb9l2-RMEO5ESy~Ax5qv~yWXJWM7YyXzZpMSFjJb~N6pbDZ2njGFj1wFD-eXjelqC4ITfIPzjT5N8EpwtNX0BW6IkaZQvIOdTA~7gEOY8hyUnj-7AXCEsx-upowkIE9zc6-FSoANA__"
            alt="profile"
          />
        </div>

        {/* section Name */}
        <div className="relative min-h-36 sm:px-5 w-full sm:w-[60%] ms-auto sm:ms-auto ">
          <div className="absolute bottom-1 sm:top-2">
            <p className="font-bold text-white text-md">Sara Johnson</p>
            <p className="text-gray-500 text-sm">
              Update your photos and personal Details
            </p>
          </div>
        </div>
      </div>

      {/* form */}
      <div className=" w-[calc(100%-10%)] m-auto min-h-96 mt-16 sm:mt-10">
        {/*first email */}
        <div className="flex flex-col sm:flex-row items-center  gap-4">
          <span className="font-medium text-white text-base sm:text-lg me-auto">
            Email
          </span>

          <label
            htmlFor="Username"
            className="w-full sm:w-64 relative block rounded-md border bg-white border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="email"
              id="email"
              className="w-full py-2 bg-white peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Email"
            />

            <span className="pointer-events-none absolute left-2 top-2 -translate-y-1/2 p-0.5 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              hamada@gmail.com
            </span>
          </label>
        </div>

        <hr className="my-5" />

        <div >
          <div className="pb-5">
            <label
              htmlFor="UserEmail"
              className="block text-sm font-medium text-white pb-2"
            >
              Enter New Password
            </label>

            <input
              type="Password"
              id="Password"
              placeholder="  *********"
              className="py-2 mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            />
          </div>

          <hr className="" />

          <div className="py-5">
            <label
              htmlFor="UserEmail"
              className="block text-sm font-medium text-white pb-2"
            >
              Retype new Password 
            </label>

            <input
              type="Password"
              id="Change Password"
              placeholder="  *********"
              className=" py-2 mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            />
          </div>

          <hr className="mb-10" />

          <button
            type="button"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className="rounded bg-primary px-2 py-2 text-md font-semibold text-white hover:bg-blue-800 transition-all duration-300"
          >
            Change Password
          </button>
        </div>
        {/* end */}
      </div>
    </>
  );
}
