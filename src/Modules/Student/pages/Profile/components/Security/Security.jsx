import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCheck, FaRegEyeSlash } from "react-icons/fa";
import Alert from "../Alerts/Alert";
import { FaRegEye } from "react-icons/fa6";
import { useStudent_change_passwordMutation } from "../../../../../../Redux/Auth/authApiSlice";
import { useSelector } from "react-redux";
import { ImSpinner9 } from "react-icons/im";

export default function Security() {


  const [showAlert, setShowAlert] = useState(false);
  const role = useSelector((state) => state.role.role);
  console.log(role);

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

  const [changePassword, { isLoading, isError, error }] =
    useStudent_change_passwordMutation();
  console.log(error);

  const onSubmit = async (data) => {
    if (data.new_password !== data.confirm_password) {
      console.log("Passwords do not match!");
      return;
    }


    const infos = {
      old_password: data.old_password,
      new_password: data.new_password,
      confirm_password: data.confirm_password,
    };
    try {
      const response = await changePassword({ data: infos, role }).unwrap();

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
        <div className="relative bg-gradient-to-r from-secondary from-10% to-primary to-90% w-full h-48 rounded-tl-[100px] rounded-tr-lg">
          {/* Image */}
          <img
            className="border-2 border-white absolute top-36 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-24 w-24 h-24 sm:w-32 sm:h-32 rounded-full object-fit"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            </div>
          </div>
        </div>
      </div>

      {/* form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[calc(100%-10%)] lg:w-[calc(100%-40%)] container m-auto min-h-96 mt-8"
      >
        {/*first email */}
        <div className="relative border-b py-5">
          <span className="text-sm font-medium text-white  pb-2">
            Enter your current password
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
              placeholder="Enter Your Old Password"
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
            Enter New Password
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
          {errors.new_password && (
            <p className="text-red-500 text-sm">
              {errors.new_password.message}
            </p>
          )}
        </div>

        <div className="relative">
          <span className="text-sm font-medium text-white pb-2">
            Retype new Password
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
            "Change Password"
          )}
        </button>

        {/* end */}
      </form>
    </div>
  );
}
