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

export default function Security() {
  const { t,i18n} = useTranslation();


  const [showAlert, setShowAlert] = useState(false);
  const role = useSelector((state) => state.role.role);

  const {
    register,
    handleSubmit,
    getValues,
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

  // Hook For Change Password
  const { submitChangePassword, isLoading, isError } = useChangePassword({ role,handleShowAlert,reset,});

  // Submit
  const onSubmit = (data) => submitChangePassword(data);

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <div className=" pb-10 lg:pb-0">
      <Alert
        Name="Password changed successfully!"
        title={"Your password has been updated successfully."}
        color={"text-green-600"}
        showAlert={showAlert}
        setShowAlert={setShowAlert}
      />

      {/* first section */}
      <div className="w-full min-h-40 ">
        {/* cover */}
        <div className="relative bg-gradient-to-r from-secondary from-10% to-primary to-90% w-full h-48 rounded-tl-[100px] rounded-tr-lg mb-24
        ">
          {/* Image */}



          <div className=" flex flex-col lg:flex-row justify-center items-center absolute -bottom-[45%]  left-1/2 -translate-x-1/2 xl:translate-x-0  xl:left-[5%]   ">
          <img
            className="border-2 border-white w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover"
            src={""}
            alt="profile"
          />
          <div className=" lg:flex-1 ">
          {/* section Name */}
          <div className="relative sm:px-4 pt-4 w-full   ">
              <div className="w-full text-center lg:text-start text-nowrap">
              <p className="font-bold text-white lg:text-lg">{'your name'}</p>
              <span className="text-mainGray text-xs lg:text-sm ">{t("Security.updatePassword")}</span>
              </div>
          </div>
        </div>
          </div>
        </div>

      </div>
 
      {/* form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`w-full md:w-4/5 lg:w-3/5 min-h-96 ${i18n.language ===  "ar" ?  "ms-auto" :"m-auto"}`}
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
              placeholder=  {t("Security.currentPassword")}

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
              placeholder=  {t("Security.Retype new Password")}

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
