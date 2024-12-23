import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import LogInContent from "./Components/LogInContent";
import { useDispatch } from "react-redux";
import {
  useLoginMutation,
  useForget_passwordMutation,
} from "../../../../../../Redux/Auth/authApiSlice";
import { setCredentials } from "../../../../../../Redux/Auth/authSlice";
import { encodeEmail } from "../../../../../../Helpers/enCodedMail";
import ForgetPassword from "./Components/ForgetPassword";

export default function Login({ toggleForm }) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(false);
  const [forgetPassword, setForgetPassword] = useState(false);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [login, { isLoading, isError, error }] = useLoginMutation();
  const [forgetpassword, { isLoading: isForgetPasswordLoading }] =
    useForget_passwordMutation();

  const handleLogin = async (data) => {
    try {
      console.log("Login request data:", data);

      const response = await login({
        email: data.email,
        password: data.password,
      }).unwrap();

      console.log("Login response:", response);

      if (response) {
        console.log("Login successful:", response);
        localStorage.setItem("refresh_token", response.refresh_token);
        // Dispatch the setCredentials action to save the user data in the Redux store
        dispatch(setCredentials(response));

        // Reset the form after successful login
        reset();
        navigate("/");

        // Aa313123@gj   mohamed.taher@depowebeg.com
      }
    } catch (error) {
      console.error("Login Error:", error);

      if (error?.data?.message) {
        setErrorMessage(error.data.message);
      } else if (error?.status === 401) {
        setErrorMessage("Invalid email or password.");
      } else {
        setErrorMessage("There was an unexpected error. Please try again.");
      }
    }
  };

  const handleForgetPassword = async (data) => {
    try {
      const response = await forgetpassword({ email: data.email }).unwrap();
      const enCodedMail = encodeEmail(data.email);
      navigate(`/register/reset-password/${enCodedMail}`);
    } catch (err) {
      setErrorMessage(
        err?.data?.message || "There was an unexpected error. Please try again."
      );
    }
  };

  return (
    <div className=" flex flex-col justify-between gap-8 pb-4 lg:pb-0 lg:gap-24 w-full    overflow-hidden ">
      {forgetPassword ? (
        <ForgetPassword
          register={register}
          handleSubmit={handleSubmit}
          handleForgetPassword={handleForgetPassword}
          forgetPassword={forgetPassword}
          setForgetPassword={setForgetPassword}
          toggleForm={toggleForm}
          loadingSending={isForgetPasswordLoading}
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