import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import LogInContent from "./Components/LogInContent";
import { useDispatch, useSelector } from "react-redux";
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
  const role = useSelector((state) => state.role.role);
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
      const userData = { email: data.email, password: data.password };
      const response = await login({ userData, role }).unwrap();
      if (response) {
        console.log("Login successful:", response);
        localStorage.setItem("refresh_token", response.refresh_token);
        // Dispatch the setCredentials action to save the user data in the Redux store
        const loginResponse = { ...response, role };

        dispatch(setCredentials(loginResponse));
        console.log("from login getting role:", loginResponse);

        // Reset the form after successful login
        reset();
        // Navigate to the appropriate dashboard or page based on the role
        if (role === "consumer") {
          navigate("/");
        } else if (role === "provider") {
          navigate("/teacherPanel");
        } else {
          navigate("/register");
        }

        // Aa313123@jjj   mohamed.taher@depowebeg.com
      }
      // Handle successful login logic here
    } catch (error) {
      console.error("Login Error:", error);
      // Handle errors here
    }
  };

  const handleForgetPassword = async (data) => {
    // console.log("Form data:", {email: data.email})
    try {
      const response = await forgetpassword({
        email: data.email,
        role,
      }).unwrap();
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
          errorMessage={errorMessage}
          errors={errors}
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
    <div className="flex flex-col justify-start items-center lg:items-start gap-2  w-full">
      <img
        src="/logos/logo.svg"
        alt=""
        className="size-52 lg:size-auto lg:hidden"
      />
      <p className="text-white text-3xl lg:text-4xl font-semibold pt-4">
        {title.head}
      </p>
      <p className="text-sm lg:text-base text-gray-600">{title.subTitle}</p>
    </div>
  );
};
