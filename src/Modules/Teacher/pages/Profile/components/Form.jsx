import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useChange_passwordMutation } from "../../../../../Redux/Auth/authApiSlice";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { ImSpinner9 } from "react-icons/im";
import { useSelector } from "react-redux";
import Alert from "../../../../Student/pages/Profile/components/Alerts/Alert";
import useChangePassword from "../../../../../Hooks/UseChangePassword";

const Form = () => {
  const { register, handleSubmit, getValues,reset, watch,formState: { errors },} = useForm();
  const role = useSelector((state) => state.role.role);
  const [showAlert, setShowAlert] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
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


  return (
    <div className="lg:w-[calc(70%)] min-h-96 sm:ms-auto my-4 lg:my-16 sm:mt-10 px-5 lg:px-0 ">
       <Alert
        Name="Password changed successfully!"
        title={"Your password has been updated successfully."}
        color={"text-green-600"}
        showAlert={showAlert}
        setShowAlert={setShowAlert}
      />
      {/* Email Input */}
      {/* <div className="md:pr-24 flex flex-col sm:flex-row items-center gap-4">
        <label
          htmlFor="email"
          className="w-full text-gray-500 font-medium text-lg relative rounded-md flex flex-wrap gap-y-4 justify-between items-center"
        >
          Email
          <input
            type="email"
            id="email"
            // {...register("email", {
            //   required: "Email is required",
            //   pattern: {
            //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            //     message: "Invalid email address",
            //   },
            // })}
            className="w-full lg:w-1/2 p-2 bg-gray-200  text-sm  rounded-lg border-none font-medium  outline-0 outline-none py-3 "
            placeholder="email@example.com"
          />
        </label>
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )} 
      </div>
*/}
      <form onSubmit={handleSubmit(onSubmit)} className=" w-full lg:w-3/5 mt-5 bgred">
        {/* Password Inputs */}
        <div className="relative pb-2 pt-5">
          <span className="text-sm font-medium text-gray-500  mb-4 block">
            Enter your current password
          </span>
          <label
            htmlFor="old_password"
            className=" bg-gray-200 rounded-lg border-gray-200 px-4 text-sm shadow-sm flex items-center justify-between "
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
              className="outline-none w-[90%] py-3 bg-gray-200"
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
        <div className="relative  py-2 ">
          <span className="text-sm font-medium text-gray-500  mb-4 block">
            Enter New Password
          </span>
          <label
            htmlFor="new_password"
            className=" bg-gray-200 rounded-lg border-gray-200 px-4 text-sm shadow-sm flex items-center justify-between "
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
              className="outline-none w-[90%] py-3 bg-gray-200"
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

        <div className="relative pt-4 pb-2">
          <span className="text-sm font-medium text-gray-500  mb-4 block">
            Retype new Password
          </span>
          <label
            htmlFor="password"
            className=" bg-gray-200 rounded-lg border-gray-200 px-4 text-sm shadow-sm flex items-center justify-between "
          >
            <input
              type={showPassword ? "text" : "password"}
              id="confirm_password"
              {...register("confirm_password", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === getValues("new_password") || "Passwords must match",
              })}
              className="outline-none w-[90%] py-3 bg-gray-200"
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
        <button
          type="submit"
          disabled={
            isLoading ||
            errors.old_password ||
            errors.confirm_password ||
            errors.new_password
          }
          className={`inline-flex w-full lg:w-3/5 mt-5 rounded-md px-2 py-2 text-md font-semibold transition-all duration-300 ${
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
      </form>
    </div>
  );
};

export default Form;
