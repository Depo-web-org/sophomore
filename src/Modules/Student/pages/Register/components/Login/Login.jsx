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
  const [userEmail, setUserEmail] = useState(null);
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
        const userData = { email: data.loginMail, password: data.password };
        const response = await login({ userData, role }).unwrap();
        if (response) {
          console.log("Login successful:", response);
          localStorage.setItem("refresh_token", response.refresh_token);
          // Dispatch the setCredentials action to save the user data in the Redux store
          dispatch(setCredentials(response));
  
          // Reset the form after successful login
          reset();
          navigate("/");
  
          // Aa313123@jjj   mohamed.taher@depowebeg.com
        }
        // Handle successful login logic here
      } catch (error) {
        console.error("Login Error:", error?.data?.message
        );
        setErrorMessage(
          error?.data?.message
        )
        setUserEmail(data.loginMail)
        // Handle errors here
      }
    };
    
    

  const handleForgetPassword = async (data) => {
    // console.log("Form data:", {email: data.email})
    try {
      const response = await forgetpassword({ email: data.loginMail, role }).unwrap();
      const enCodedMail = encodeEmail(data.loginMail);
      navigate(`/register/reset-password/${enCodedMail}`);
    }catch (error) {
      console.error("Login Error:", error?.data?.message
      );
      setErrorMessage(
        error?.data?.message

      );
      setUserEmail(data.loginMail)
      // Handle errors here
    }
  };


  // If the user is not logged in, redirect them to the login page
  const VerifyAccount=()=>{
    const enCodedMail = encodeEmail(userEmail);
    navigate(`/register/verify-account/${enCodedMail}`);
  }
 
  return (
    <div className=" flex flex-col justify-between gap-8 pb-4 lg:pb-0 lg:gap-24 w-full    overflow-hidden ">
      {forgetPassword ? (
        <ForgetPassword
          ResponseError={errorMessage}
          errorsForm={errors}
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
          ResponseError={
            errorMessage
          }
          VerifyAccount={VerifyAccount}
          handleLogin={handleLogin}
          errorsForm={errors}
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
     
      <img src="/logos/logo.svg" alt="" className="size-52 lg:size-auto lg:hidden" />
      <p className="text-white text-2xl md:text-3xl lg:text-5xl font-extrabold pt-4 text-center lg:text-start">
        {title.head}
      </p>
      <p className="text-sm lg:text-base text-gray-600 text-center lg:text-start">{title.subTitle}</p>
    </div>
  );
};


