import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCheck, FaRegEyeSlash } from "react-icons/fa";
import Alert from "../Alerts/Alert";
import { FaRegEye } from "react-icons/fa6";
import { useChange_passwordMutation } from "../../../../../../Redux/Auth/authApiSlice";
import { useSelector } from "react-redux";
import { ImSpinner9 } from "react-icons/im";
import useFetch from "../../../../../../Hooks/UseFetch";
import useChangePassword from "../../../../../../Hooks/UseChangePassword";
import { useTranslation } from "react-i18next";
import { useGetProfileQuery } from "../../../../../../Redux/data/getDataApiSlice";
import { LoadingComponents } from "../../../../../../App";
import ProfileSkeleton from "../Skeleton/ProfileSkeleton";
import { newFunction } from "../../../../../../Helpers/Alert";

export default function Security() {
  const { t, i18n } = useTranslation();

  const {
    data,
    error: dataerror,
    isFetching,
    refetch,
    isLoading: dataLoading,
  } = useGetProfileQuery();
const student= UserInformation?.data;

const UserInformation= JSON.parse(localStorage.getItem('USER'))

  const [showAlert, setShowAlert] = useState(false); 
  const [showAlertError, setShowAlertError] = useState(false); 
  const handleAlert = newFunction(setShowAlert, setShowAlertError);

  const role = useSelector((state) => state.role.role);

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();
  // alert

  // Hook For Change Password
  const { submitChangePassword, isLoading, isError } = useChangePassword({ role,handleAlert,reset,});
  // Submit
  const onSubmit = (data) => submitChangePassword(data);



  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };


  if (isFetching) {
    return <ProfileSkeleton />;
  }

  
  return (
    <div className=" pb-10 lg:pb-0">
      {showAlert && (
        <Alert
          Name="Password changed successfully!"
          title={"Your password has been updated successfully."}
          color={"text-green-600"}
          showAlert={showAlert}
          setShowAlert={setShowAlert}
        />
      )}

      {showAlertError && (
        <Alert
          Name="Error changing password"
          title={"Your password Error changing password"}
          color={"text-red-600"}
          showAlert={showAlertError}
          setShowAlert={setShowAlertError}
        />
      )}

      {/* first section */}
      <div className="w-full min-h-40 ">
        {/* cover */}
        <div
          className="relative bg-gradient-to-r from-secondary from-10% to-primary to-90% w-full h-48 rounded-tl-[100px] rounded-tr-lg mb-24
        "
        >
          {/* Image */}

          <div
            className={`flex flex-col lg:flex-row justify-center items-center absolute -bottom-[70%] md:-bottom-[60%] mb-5  ${
              i18n.language === "en"
                ? "left-1/2 -translate-x-1/2 lg:translate-x-0  lg:left-[5%]"
                : "right-1/2 translate-x-1/2 md:right-10   md:translate-x-0"
            }  `}
          >
            <div className="relative">

            <img
              className="border-2 border-white size-24 h-24 sm:size-32 rounded-full object-cover"
              src={
                student?.photo
                  ? `https://dev.depowebeg.com${student?.path}${student?.photo}`
                  : "data:image/png;base64,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"
              }
              alt="profile"
            />
                <div  className="bg-green-400 size-3 lg:size-4 absolute end-1/4 bottom-0 z-[5] rounded-full "/>

            </div>
            <div className=" lg:flex-1 ">
              {/* section Name */}
              <div className="relative sm:px-4 pt-4 w-full   ">
                <div className="w-full text-center lg:text-start text-nowrap">
                  <p className="font-bold text-white text-2xl">
                    {student?.first_name
                      ? `${student?.first_name} ${student.last_name}`
                      : "your name"}
                  </p>
                  <span className="text-mainGray text-xs lg:text-sm ">
                    {t("Security.updatePassword")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* form */}
      <form
        // ${i18n.language ===  "ar" ?  "ms-auto" :"m-auto"}
        onSubmit={handleSubmit(onSubmit)}
        className={`w-full px-4 lg:px-8  min-h-96 ${
          i18n.language === "ar" ? "me-auto" : ""
        } `}
      >
        {/*first email */}
        <div className="relative border-b py-5">
          <span className="text-sm font-medium text-white  pb-2">
            {t("Security.currentPassword")}
          </span>
          <label
            htmlFor="old_password"
            className=" bg-white rounded-lg border-gray-200 px-4 text-sm shadow-sm flex items-center justify-between"
          >
            <input
              type={showPassword ? "text" : "password"}
              id="old_password"
              {...register("old_password", {
                required: "old Password is required",
                pattern: {
                  value:
                    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/,
                  message:
                    "Password must contain at least one uppercase letter, one number, and one special character",
                },
              })}
              className="outline-none w-[90%] py-4"
              placeholder={t("Security.currentPassword")}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className=" text-gray-500 focus:outline-none"
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
            {t("Security.newPassword")}
          </span>
          <label
            htmlFor="new_password"
            className=" bg-white rounded-lg border-gray-200 px-4 text-sm shadow-sm flex items-center justify-between"
          >
            <input
              type={showPassword ? "text" : "password"}
              id="new_password"
              {...register("new_password", {
                required: "new Password is required",
                pattern: {
                  value:
                    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/,
                  message:
                    "Password must contain at least one uppercase letter, one number, and one special character",
                },
              })}
              className="outline-none w-[90%] py-4"
              placeholder={t("Security.newPassword")}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="ml-2 text-gray-500 focus:outline-none"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </label>
          {errors.new_password && (
            <p className="text-red-500 text-sm">
              {errors.new_password.message}
            </p>
          )}
        </div>

        <div className="relative">
          <span className="text-sm font-medium text-white pb-2">
            {t("Security.Retype new Password")}
          </span>
          <label
            htmlFor="password"
            className=" bg-white rounded-lg border-gray-200 px-4 text-sm shadow-sm flex items-center justify-between"
          >
            <input
              type={showPassword ? "text" : "password"}
              id="confirm_password"
              {...register("confirm_password", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === getValues("new_password") || "Passwords must match",
              })}
              className="outline-none w-[90%] py-4"
              placeholder={t("Security.Retype new Password")}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="ml-2 text-gray-500 focus:outline-none"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </label>
          {errors.confirm_password && (
            <p className="text-red-500 text-sm">
              {errors.confirm_password.message}
            </p>
          )}
        </div>

        {isError && <p className="text-red-500 text-sm">Password is filde</p>}

        <button
          type="submit"
          disabled={
            isLoading ||
            errors.old_password ||
            errors.confirm_password ||
            errors.new_password
          }
          className={`inline-flex w-full mt-5 rounded-lg px-2 py-2 text-md font-semibold transition-all duration-300 ${
            isLoading
              ? "bg-white text-white cursor-not-allowed"
              : errors.old_password ||
                errors.confirm_password ||
                errors.new_password
              ? "bg-primary bg-opacity-5 text-white text-opacity-60 cursor-not-allowed"
              : "bg-primary text-white hover:bg-secondary"
          } px-5 py-3 text-sm font-medium text-white justify-center items-center`}
        >
          {isLoading ? (
            <ImSpinner9 className="animate-spin text-3xl text-secondary" />
          ) : (
            `${t("Security.changePassword")}`
          )}
        </button>

        {/* end */}
      </form>
    </div>
  );
}
// export function newFunction(setShowAlert, setShowAlertError) {
//   return (type, duration = 3000) => {
//     if (type === 'success') {
//       setShowAlert(true);
//       setTimeout(() => {
//         setShowAlert(false);
//       }, duration);
//     } else if (type === 'error') {
//       setShowAlertError(true);
//       setTimeout(() => {
//         setShowAlertError(false);
//       }, duration);
//     }
//   };
// }

