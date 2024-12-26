import React, { useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";

export default function MyProfile() {
  const [profileImage, setProfileImage] = useState(
    "https://s3-alpha-sig.figma.com/img/56b7/1855/5f70fa6b93cdb06490b027b82b3d0038?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d~bHqR3Tnv7B87ZkS7dnOnou3OMgxYRho3-0Bqmcf-zAhiGMsCqsiaTptyesTYF88SfmX9gDzNRtv1fpPKRuUivv-RnoebIHkc0q4oMpOxHFKWE8RK7gJ~N-t-0YMK4oGuxV7zMQoCbJzcuSFo~H2Pz5rF6suHciwMVFb3w64UxO~nHxVBdaScrD2payUGDss3VR~lPMsn1QwLb9l2-RMEO5ESy~Ax5qv~yWXJWM7YyXzZpMSFjJb~N6pbDZ2njGFj1wFD-eXjelqC4ITfIPzjT5N8EpwtNX0BW6IkaZQvIOdTA~7gEOY8hyUnj-7AXCEsx-upowkIE9zc6-FSoANA__"
  );

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };
  return (
    <div className=" container">
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
                <p className="text-gray-300 text-sm">
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
            className="w-full ml-2 text-white text-base border-gray-200 p-2 flex  items-center justify-between gap-4"
          >
            Update UserName
            <input
              type="text"
              defaultValue={"username"}
              id="Username"
              className=" p-2 w-full text-gray-600  rounded-md bg-white peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
            />
          </label>
        </div>
        <hr className=" ms-auto lg:w-[calc(100%-30%)]" />

        {/* last section */}

        <div className="h-36 my-2 lg:w-[calc(100%-30%)] ms-auto">
          <div className=" text-right py-1 cursor-pointer text-white">
            <button>Delete </button>
            <span className="px-3">|</span>
            <button>Update</button>
          </div>

          <div>
            <div className="flex justify-start items-start">
              <label
                htmlFor="upload"
                className=" text-white font-medium cursor-pointer  px-5 flex items-center gap-4"
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
            <p className=" text-gray-500 font-normal text-sm px-5 my-2">
              Update your photo or edit and delete it
            </p>
          </div>
        </div>

        <hr className="ms-auto lg:w-[calc(100%-30%)]" />
      </div>
    </div>
  );
}
