import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCheck, FaRegEyeSlash } from "react-icons/fa";
import Alert from "../Alerts/Alert";
import { FaRegEye } from "react-icons/fa6";
import { useStudent_change_passwordMutation } from "../../../../../../Redux/Auth/authApiSlice";
import { useSelector } from "react-redux";

export default function Security() {
  const [showAlert, setShowAlert] = useState(false);
  const role = useSelector((state) => state.role.role);
  console.log(role);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // alert
  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const [changePassword, { isLoading, isError, error }] =
    useStudent_change_passwordMutation();

  const onSubmit = async (data) => {
    if (data.new_password !== data.confirm_password) {
      console.log("Passwords do not match!");
      return;
    }

    const refresh_token = localStorage.getItem("refresh_token");
    if (!refresh_token) {
      console.error("Refresh token is missing!");
      return;
    }

    try {
      const response = await changePassword({
        data: {
          refresh_token,
          old_password: data.old_password,
          new_password: data.new_password,
          confirm_password: data.confirm_password,
        },
      }).unwrap();

      console.log("Password change successful:", response);

      handleShowAlert();
      reset();
    } catch (err) {
      console.error("Error changing password:", err);
    }
  };
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <>
      <Alert
        Name="Password changed successfully!"
        title={"Your password has been updated successfully."}
        showAlert={showAlert}
        setShowAlert={setShowAlert}
      />

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
        <div className="relative border-b py-5">
          <span className="text-sm font-medium text-white  pb-2">
            Enter your current password
          </span>
          <label
            htmlFor="old_password"
            className="w-full bg-white rounded-lg border-gray-200 p-4 text-sm shadow-sm flex items-center justify-between"
          >
            <input
              type={showPassword ? "text" : "password"}
              id="old_password"
              {...register("old_password", {
                required: "old Password is required",
                minLength: {
                  value: 6,
                  message: "old Password must be at least 6 characters",
                },
              })}
              className="outline-none flex-1"
              placeholder="Enter Your Old Password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="ml-2 text-gray-500 focus:outline-none"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </label>
          {errors.old_password && (
            <p className="text-red-500 text-sm">
              {errors.old_password.message}
            </p>
          )}
        </div>

        <div className="relative border-b py-5">
          <span className="text-sm font-medium text-white  pb-2">
            Enter New Password
          </span>
          <label
            htmlFor="new_password"
            className="w-full bg-white rounded-lg border-gray-200 p-4 text-sm shadow-sm flex items-center justify-between"
          >
            <input
              type={showPassword ? "text" : "password"}
              id="new_password"
              {...register("new_password", {
                required: "new Password is required",
                minLength: {
                  value: 6,
                  message: "The new Password must be at least 6 characters",
                },
              })}
              className="outline-none flex-1"
              placeholder="Enter Your Old Password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="ml-2 text-gray-500 focus:outline-none"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </label>
          {errors.old_password && (
            <p className="text-red-500 text-sm">
              {errors.old_password.message}
            </p>
          )}
        </div>

        <div className="relative border-b py-5">
          <span className="text-sm font-medium text-white  pb-2">
            Retype new Password
          </span>
          <label
            htmlFor="confirm_password"
            className="w-full bg-white rounded-lg border-gray-200 p-4 text-sm shadow-sm flex items-center justify-between"
          >
            <input
              type={showPassword ? "text" : "password"}
              id="confirm_password"
              {...register("confirm_password", {
                required: "new Password is required",
                minLength: {
                  value: 6,
                  message: "The new Password must be at least 6 characters",
                },
              })}
              className="outline-none flex-1"
              placeholder="Confirm new Password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="ml-2 text-gray-500 focus:outline-none"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </label>
          {errors.old_password && (
            <p className="text-red-500 text-sm">
              {errors.old_password.message}
            </p>
          )}
        </div>

        {isError && <p className="text-red-500 text-sm">Password is filde</p>}

        <button
          type="submit"
          data-twe-ripple-init
          data-twe-ripple-color="light"
          className="rounded bg-primary mt-3 px-2 py-2 text-md font-semibold text-white hover:bg-blue-800 transition-all duration-300"
        >
          {isLoading ? (
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-white motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          ) : (
            "Change Password  "
          )}
        </button>
        {/* end */}
      </form>
    </>
  );
}
