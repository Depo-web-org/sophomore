import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../../../../../ProtectedRoutes/AuthContext";
import { useForm } from "react-hook-form";
import OtpContent from "./Components/ForgetPassword";
import LogInContent from "./Components/LogInContent";
import axios from "axios";

import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../../../../../Redux/Auth/authApiSlice";
import { setCredentials } from "../../../../../../Redux/Auth/authSlice";
import { encodeEmail } from "../../../../../../Helpers/enCodedMail";
import ForgetPassword from "./Components/ForgetPassword";

export default function Login({ toggleForm }) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(false);
  const [forgetPassword, setForgetPassword] = useState(false);
  const [loadingSending, setLoadingSending] = useState(false);

  const dispatch = useDispatch();

  // Setup react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Use login mutation from authApiSlice
  const [login, { isLoading, isError, error }] = useLoginMutation();

  const handleLogin = async (data) => {
    try {
      console.log("Login request data:", data);

      // Call the login mutation using data from the form
      const response = await login({
        email: data.email,
        password: data.password,
      }).unwrap();

      console.log("Login response:", response);

      if (response) {
        console.log("Login successful:", response);

        // Dispatch the setCredentials action to save the user data in the Redux store
        dispatch(setCredentials(response));

        // Reset the form after successful login
        reset();

        // Redirect to home page or the dashboard
        navigate("/");
      }
    } catch (error) {
      // Log the full error details for debugging
      console.error("Login Error:", error);

      // Check if there is an error response and display the error message
      if (error?.data?.message) {
        setErrorMessage(error.data.message);
      } else if (error?.status === 401) {
        setErrorMessage("Invalid email or password.");
      } else {
        setErrorMessage("There was an unexpected error. Please try again.");
      }
    }
  };

  const handleOtp = async (data) => {
    console.log("Form Data:", {
      email: data.email,
    });
    //  setMail(data)
    setLoadingSending(true);
    const enCodedMail=encodeEmail(data.email)
    await axios
      .post(`http://192.168.1.26:8000/api/v1/reset-password/consumer/`, data) .then(() => navigate(`/register/reset-password/${enCodedMail}`))
      .catch((err) => {
        console.log(err.request.responseText);
        setLoadingSending(false);
      });
  };

  return (
    <div className=" flex flex-col justify-between gap-8 pb-4 lg:pb-0 lg:gap-24 w-full    overflow-hidden ">
      {forgetPassword ? (
        <ForgetPassword
          register={register}
          handleSubmit={handleSubmit}
          handleOtp={handleOtp}
          forgetPassword={forgetPassword}
          setForgetPassword={setForgetPassword}
          toggleForm={toggleForm}
          loadingSending={loadingSending}
        />
      ) : (
        <LogInContent
          toggleForm={toggleForm}
          register={register}
          handleSubmit={handleSubmit}
          errorMessage={
            isError
              ? error?.data?.message || "There was an error during login"
              : ""
          }
          handleLogin={handleLogin}
          errors={errors}
          forgetPassword={forgetPassword}
          setForgetPassword={setForgetPassword}
          loadingSending={isLoading}
        />
      )}
    </div>
  );
}

export const HeadTitle = ({ title }) => {
  return (
    <div className="flex flex-col justify-start items-start gap-2">
      <img src="/logos/logo.svg" alt="" className="" />
      <p className="text-white text-3xl lg:text-4xl font-semibold pt-4">
        {title.head}
      </p>
      <p className="text-sm lg:text-base text-gray-600">{title.subTitle}</p>
    </div>
  );
};
