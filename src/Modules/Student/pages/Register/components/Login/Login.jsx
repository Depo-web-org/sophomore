import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../../../../../ProtectedRoutes/AuthContext";
import axios from "axios";
import { useForm } from "react-hook-form";
import OtpContent from "./Components/OtpContent";
import LogInContent from "./Components/LogInContent";




export default function Login({ toggleForm }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(false);
  const [forgetPassword, setForgetPassword] = useState(false);
  const [loadingSending, setLoadingSending] = useState(false)

  const handleLogin = async (data) => {
    console.log("Form Data:", data);

    try {
      const response = await axios.post(
        "http://192.168.1.26:8000/api/v1/login/provider/",
        {
          email: data.email,
          password: data.password,
        },
        {
          withCredentials: true, // Enables sending cookies
        }
      );
      

      if (response.status === 200) {
        console.log("Login successful:", response.data);
        // You can token or handle the response here
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        console.error("Error Response:", error.response.data);
        setErrorMessage(true);
      } else {
        console.error("Error:", error.message);
      }
    }

  };

  const handleOtp = async (data) => {
    console.log("Form Data:", {
            email: data.email,
          });
  //  setMail(data)
    setLoadingSending(true)
await axios.post(`http://192.168.1.26:8000/api/v1/resend-otp/consumer/`, data)
              .catch(err =>{
   console.log(err .request.responseText)
  setLoadingSending(false)
 }) 
   
  };

  return (
    <div className=" flex flex-col justify-between gap-8 pb-4 lg:pb-0 lg:gap-24 w-full    overflow-hidden ">
      {
         forgetPassword ? <OtpContent
         register={register}
         handleSubmit={handleSubmit}
         handleOtp={handleOtp}
         forgetPassword={forgetPassword}
         setForgetPassword={setForgetPassword}
         toggleForm={toggleForm}
         loadingSending={loadingSending}
       />  :  <LogInContent
           toggleForm={toggleForm}
           register={register}
           handleSubmit={handleSubmit}
           errorMessage={errorMessage}
           handleLogin={handleLogin}
           errors={errors}
             forgetPassword={forgetPassword}
           setForgetPassword={setForgetPassword}
           loadingSending={loadingSending}
         />
      }
     
     
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
