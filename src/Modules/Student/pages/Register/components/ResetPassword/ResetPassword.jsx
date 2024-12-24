import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { HeadTitle } from "../Login/Login";
import { ImSpinner9 } from "react-icons/im";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";
import { decodeEmail } from "../../../../../../Helpers/deCode";
import {
  useForget_passwordMutation,
  useReset_passwordMutation,
} from "../../../../../../Redux/Auth/authApiSlice";
import { ResendOtpModal } from "../OTP/OTP";
import { useSelector } from "react-redux";

const ResetPassword = () => {
  const { userMail } = useParams(); // Get encoded email from the URL
  const navigate = useNavigate();
  //deCode the User mail
  const email = decodeEmail(userMail);
  const [showPassword, setShowPassword] = useState(false);
  const [resendOTPModal, setResendOTPModal] = useState(false);
  const role = useSelector((state) => state.role.role);

  const [forgetpassword, { isLoading: isForgetPasswordLoading }] =
    useForget_passwordMutation();

  const { handleSubmit, control, setFocus, register , formState: { errors }, }   = useForm({
    defaultValues: {
      otp_code: ["", "", "", "", "", ""],
    },
  });
  const [resetPassword, { isLoading, isError, error }] =
    useReset_passwordMutation();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onSubmit = async (data) => {
    const otp = data.otp_code.join("");
    const dataSend = {
      otp,
      password: data.password,
      password2: data.password2,
    };

    try {
  await resetPassword({dataSend,role})
        .unwrap()
        .then((response) => console.log(response));
      navigate("/register");
    } catch (err) {
      console.error("Error occurred:", err);
    }
  };

  const handleInput = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < 5) {
      setFocus(`otp_code[${index + 1}]`);
    } else if (!value && index > 0) {
      setFocus(`otp_code[${index - 1}]`);
    }
  };

  const handlePaste = (e, setValue) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    if (/^\d{6}$/.test(text)) {
      text.split("").forEach((digit, i) => setValue(`otp_code[${i}]`, digit));
      setFocus("otp_code[5]");
    }
  };

  const [timeLeft, setTimeLeft] = useState(3);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendDisabled(false);
    }
  }, [timeLeft]);

  const reSendOtp = async () => {
    setResendOTPModal(false);
    setIsResendDisabled(true);
    setTimeLeft(60);
    await forgetpassword({ email ,role})
      .unwrap()
      .then(() => console.log("Successfully sent"))
      .catch((err) => console.log("Error", err));
  };
 
  return (
    <>
      <div className="container  w-full pt-16 md:w-custom-md xl:w-custom-xl mx-auto min-h-screen flex justify-between items-start gap-4 overflow-hidden">
        <div className="flex flex-col items-start b justify-center lg:gap-8  w-full slide-in-left   lg:min-h-screen">
          <div className=" w-full ">
            <HeadTitle
              title={{
                head: "Check Your Mail for OTP",
                subTitle: ` We have sent an otp to your mail ${email
                  .split("@")[0]
                  .slice(0, 3)}****@${email.split("@")[1].slice(0, 2)}***.com`,
              }}
            />
          </div>
          <div className="w-full ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2"
            >
              <div className="flex justify-center items-start b gap-8 text-white text-center text-2xl w-full lg:w-4/5 mr-auto">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <Controller
                    key={index}
                    name={`otp_code[${index}]`}
                    control={control}
                    render={({ field: { onChange, value, ref } }) => (
                      <input
                        ref={ref}
                        type="text"
                        value={value}
                        maxLength="1"
                        className=" w-full lg:w-4/5 mx-auto bg-transparent border-b-[1px] ring-0 outline-none font-bold"
                        onChange={(e) => {
                          onChange(e.target.value);
                          handleInput(e, index);
                        }}
                        onFocus={(e) => e.target.select()}
                        onPaste={(e) => handlePaste(e, onChange)}
                      />
                    )}
                  />
                ))}
              </div>
              <div className="lg:mt-8 mt-4 mb-0 lg:mb-4  flex flex-col gap-y-2 lg:gap-y-4">
                <label
                  htmlFor="password"
                  className="w-full lg:w-4/5 mr-auto bg-white rounded-lg border-gray-200 p-4 text-sm shadow-sm flex items-center justify-between mt-6 mb-4"
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value:
                          /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&#])[A-Za-z\d@$!%*?&#]{6,}$/,
                        message:
                          "Password must contain at least one uppercase letter, one number, and one special character",
                      },
                    })}
                    className="outline-none flex-1"
                    placeholder="Enter New password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="ml-2 text-gray-500 focus:outline-none"
                  >
                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  </button>

                </label>
                <div className="w-full lg:w-4/5 mr-auto ">
                  {errors && (
                    <p className="text-red-500 text-sm text-center font-medium">
                      {errors?.password?.message}
                    </p>
                  )}
                </div>
                <label
                  htmlFor="password2"
                  className=" w-full lg:w-4/5 mr-auto  bg-white rounded-lg border-gray-200 p-4 text-sm shadow-sm flex items-center justify-between mt-2"
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password2"
                    {...register("password2", {
                      required: "Password is required",
                      pattern: {
                        value:
                          /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&#])[A-Za-z\d@$!%*?&#]{6,}$/,
                        message:
                          "Password must contain at least one uppercase letter, one number, and one special character",
                      },
                    })}
                    className="outline-none flex-1"
                    placeholder="Confirm password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="ml-2 text-gray-500 focus:outline-none"
                  >
                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  </button>
                </label>
                <div className="w-full lg:w-4/5 mr-auto ">
                  {errors && (
                    <p className="text-red-500 text-sm text-center font-medium">
                      {errors?.password2?.message}
                    </p>
                  )}
                </div>
              </div>
            
              <button
                type="submit"
                disabled={isLoading}
                className={`inline-flex rounded-lg ${
                  isLoading ? "bg-white" : "bg-primary"
                }  w-full lg:w-4/5 mr-auto py-3 text-sm font-medium text-white justify-center items-center mt-8`}
              >
                {isLoading ? (
                  <ImSpinner9 className="animate-spin text-3xl text-secondary" />
                ) : (
                  "Reset"
                )}
              </button>

              <div className="w-4/5 mr-auto" >
                {isError && (
                  <p className="text-red-500 text-sm text-center font-medium">
                    {error?.data?.message}
                  </p>
                )}
              </div>
            </form>





            {/* Resend OTP Button  */}
            <div className="flex w-full flex-col justify-center items-center gap-2 py-4 lg:w-4/5 mr-auto">
                {
                  isResendDisabled && <p
                  className={`${
                    isResendDisabled ? "text-white" : "text-gray-500"
                  } text-base font-medium `}
                >
                  {formatTime(timeLeft)}
                </p>
                } 
                <p
                  className={` text-sm lg:text-base font-medium leading-[18.75px] text-center  ${
                    isLoading || isResendDisabled
                      ? "text-textopacity"
                      : "text-white"
                  }`}
                >
                  Didn’t got your OTP ?
                  <button
                    disabled={isLoading || isResendDisabled}
                    onClick={() => setResendOTPModal(true)}
                    className={`text-sm lg:text-base font-medium leading-[18.75px] text-center underline mx-2 ${
                      isResendDisabled ? "text-gray-500" : "text-white"
                    }`}
                  >
                    Resend OTP
                  </button>
                </p>
              </div>

              
          </div>
        </div>

        <img
          src="/register/login.webp"
          alt="register img"
          className="hidden lg:block min-h-[calc(100vh-112px)] lg:max-w-[420px] xl:max-w-[580px] slide-in-right object-cover rounded-xl z-10"
        />
      </div>
      {
        // Resend OTP Modal
        resendOTPModal && (
          <ResendOtpModal
            setResendOTPModal={setResendOTPModal}
            reSendOtp={reSendOtp}
          ></ResendOtpModal>
        )
      }
    </>
  );
};

export default ResetPassword;
