import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Security() {
  const [errorMasege, seterrorMasege] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);

    if (data.Password === data.password2) {
      seterrorMasege(false);
      console.log("true");
      reset();
    } else {
      console.log("false");

      seterrorMasege(true);
    }
  };

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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[calc(100%-10%)] lg:w-[calc(100%-40%)] m-auto min-h-96 mt-16 sm:mt-10"
      >
        {/*first email */}

        <span className="text-sm font-medium text-white  pb-2">
          Enter your current password
        </span>

        <input
          type="Password"
          id="Currentpassword"
          placeholder="  Current password"
          className="py-2 mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
          {...register("Currentpassword", { required: "Current password required" })}
        />
        {errors.Currentpassword && (
          <p className="text-red-500 text-sm">{errors.Currentpassword.message}</p>
        )}

        <hr className="my-5" />

        <div>
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
              {...register("Password", { required: "Password required" })}
            />
            {errors.Password && (
              <p className="text-red-500 text-sm">{errors.Password.message}</p>
            )}
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
              id="password2"
              placeholder="  *********"
              className=" py-2 mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              {...register("password2", {
                required: "password2 required",
              })}
            />
            {errors.password2 && (
              <p className="text-red-500 text-sm">{errors.password2.message}</p>
            )}
          </div>

          <hr className="" />

          {errorMasege && (
            <p className="text-red-500 text-sm">Password is filde</p>
          )}

          <button
            type="submit"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className="rounded bg-primary mt-3 px-2 py-2 text-md font-semibold text-white hover:bg-blue-800 transition-all duration-300"
          >
            Change Password
          </button>
        </div>
        {/* end */}
      </form>
    </>
  );
}
