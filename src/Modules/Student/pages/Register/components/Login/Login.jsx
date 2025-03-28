import CryptoJS from "crypto-js";
import React, { useEffect, useState } from "react";
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
import useRole, { secretKey } from "../../../../../../Hooks/UseRole";
import { setRole } from "../../../../../../Redux/RoleSlice/RoleSlice";
import { getRole } from "../../../../../../Helpers/enCodeRole";
import { setStudent } from "../../../../../../Redux/StudentSlices/StudentSlice";
import { useTranslation } from "react-i18next";

export default function Login({ toggleForm }) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(false);
  const [forgetPassword, setForgetPassword] = useState(false);
  const userRole = useRole("RO_V1_2024");
  const role = useSelector((state) => state.role.role);
  const provider = role === "teacher" ? true : false;
  const [userEmail, setUserEmail] = useState(null);
  const { i18n } = useTranslation();

  const VerifyAccount = (email) => {
    const enCodedMail = encodeEmail(email);
    navigate(`/register/verify-account/${enCodedMail}`);
  };

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

      if (provider) {
        userData.provider = provider;
      }
      const response = await login({ userData, role }).unwrap();
      setUserEmail(data.loginMail);

      if (response.code === 0) {
        // Encrypt the refresh token and store it
        console.log("before", response.data.token);

        localStorage.setItem("Token", response.data.token);

        console.log("after", response.data.token);
        //Store In Redux

        const studentData = {
          uid: response.data.token,
          email: response.data.email,
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          phone: response.data.phone_number,
          path: response.data.path,
          photo: response.data.photo,
        };

        dispatch(setStudent(studentData));

        // Encrypt the Role and store it
        const encryptedRole = CryptoJS.AES.encrypt(role, secretKey).toString();
        localStorage.setItem("RO_V1_2024", encryptedRole);

        //Store In Redux
        const roleOfUser = getRole("RO_V1_2024");

        const loginResponse = { ...response, role };
        dispatch(
          setCredentials({
            token: loginResponse.access_token,
            user: loginResponse,
          })
        );
        dispatch(setRole(roleOfUser));

        // RestForm
        reset();

        // Navigate the user based on the role
        if (role === "student") {
          navigate("/");
        } else if (role === "teacher") {
          navigate("/teacherupload");
        } else {
          navigate("/register");
        }
      } else if (response.code === 10) {
      
        const enCodedMail = encodeEmail(data.loginMail);
        navigate(`/register/otp/${enCodedMail}`);
        
      } else if (response.code === 20) {
        setErrorMessage(response?.message);
      } else {
        setErrorMessage(response?.message);
      }
    } catch (error) {
      // console.error("Login Error:", error?.data?.message);
      error?.data?.message
        ? setErrorMessage(error?.data?.message)
        : setErrorMessage(
            i18n?.languages[0] == "ar"
              ? "خطأ في تسجيل الدخول"
              : "Oops! We couldn't process your request may you don't have internet connection. Please refresh the page or try again later. For assistance, reach out to sophomore@info.com."
          );
    }
  };

  const handleForgetPassword = async (data) => {
    // console.log("Form data:", {email: data.email})
    try {
      const userData = { email: data.loginMail };

      if (provider) {
        userData.provider = provider;
      }

      const response = await forgetpassword({ userData }).unwrap();

      const enCodedMail = encodeEmail(data.loginMail);

      navigate(`/register/reset-password/${enCodedMail}`);

      console.log(`/reset-password/${enCodedMail}`);
    } catch (error) {
      setErrorMessage(error?.data?.message);
      setUserEmail(data.loginMail);
      // Handle errors here
    }
  };

  // If the user is not logged in, redirect them to the login page

  return (
    <div className=" flex flex-col justify-between gap-8 pb-4 lg:pb-0 lg:gap-24 w-full     overflow-hidden ">
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
          ResponseError={errorMessage}
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
    <div className=" flex flex-col justify-center items-center gap-2  w-full">
      <img
        src="/images/logos/logo.svg"
        alt="logo"
        className="w-72 md:full "
      />
      <p className="text-white text-3xl lg:text-5xl font-extrabold pt-4 text-center lg:text-start">
        {title.head}
      </p>
      <p className="text-sm lg:text-base text-gray-600 text-center lg:text-start">
        {title.subTitle}
      </p>
    </div>
  );
};
