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
import { useTranslation } from "react-i18next"; // Import useTranslation

const ResetPassword = () => {
  const { t } = useTranslation(); // Initialize useTranslation
  const { userMail } = useParams(); // Get encoded email from the URL
  const email = decodeEmail(userMail);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [resendOTPModal, setResendOTPModal] = useState(false);
  const [StatusOfChangesPassword, setStatusOfChangesPassword] = useState();
  const role = useSelector((state) => state.role.role);
  const provider = role === "teacher" ? true : false;

  const [forgetpassword, { isLoading: isForgetPasswordLoading }] =
    useForget_passwordMutation();

  const {
    handleSubmit,
    control,
    setFocus,
    register,
    formState: { errors },
  } = useForm({
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
    if (provider) {
      dataSend.provider = provider;
    }

    await resetPassword({ dataSend, role })
      .unwrap()
      .then(() => setStatusOfChangesPassword(t("resetPasswordConfirmation")))
      .then(() => setTimeout(() => navigate("/register"), 3000))
      .catch((err) => {
        console.error("Error occurred:", err);
      });
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

  const [timeLeft, setTimeLeft] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return t("timeLeft", { minutes, seconds });
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
    try {
      const userData = { email };

      if (provider) {
        userData.provider = provider;
      }
      const response = await forgetpassword({
        userData,
      }).unwrap();
    } catch {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container  w-full pt-16 md:w-custom-md xl:w-custom-xl mx-auto min-h-screen flex justify-between items-start gap-4 overflow-hidden items-center ">
        <div className="flex flex-col items-start b justify-center lg:gap-8 w-full slide-in-left lg:min-h-screen ">
          <div className="w-full">
            <HeadTitle
              title={{
                head: t("checkYourMail"),
                subTitle: t("otpSent", {
                  email: `${email.split("@")[0].slice(0, 3)}****@${email
                    .split("@")[1]
                    .slice(0, 2)}***.com`,
                }),
              }}
            />
          </div>
          <div className="w-full mt-6 ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2"
            >
              <div dir="ltr" className="flex justify-center items-start gap-2 lg:gap-4 text-white text-center text-2xl w-full lg:w-4/5 me-auto">
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
                        className="w-full lg:w-4/5 mx-auto h-10 lg:h-16 bg-white text-primary rounded-md border-b ring-0 outline-none text-center font-bold"
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          if (/^\d*$/.test(inputValue)) {
                            onChange(inputValue);
                            handleInput(e, index, [0, 1, 2, 3, 4, 5], onChange);
                          }
                        }}
                        onFocus={(e) => e.target.select()}
                        onPaste={(e) => handlePaste(e, onChange)}
                      />
                    )}
                  />
                ))}
              </div>
              <div className="lg:mt-8 mt-4 mb-0 lg:mb-4 flex flex-col gap-y-2 lg:gap-y-4 ">
                <label
                  htmlFor="password"
                  className="w-full lg:w-4/5 me-auto bg-white rounded-lg border-gray-200 p-4 text-sm shadow-sm flex items-center justify-between mt-6 mb-4"
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    {...register("password", {
                      required: t("passwordRequired"),
                      pattern: {
                        value:
                          /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&#])[A-Za-z\d@$!%*?&#]{6,}$/,
                        message: t("passwordValidation"),
                      },
                    })}
                    className="outline-none flex-1"
                    placeholder={t("enterNewPassword")}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="ml-2 text-gray-500 focus:outline-none"
                  >
                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  </button>
                </label>
                <div className="w-full lg:w-4/5 mr-auto">
                  {errors && (
                    <p className="text-red-500 text-sm text-center font-medium">
                      {errors?.password?.message}
                    </p>
                  )}
                </div>
                <label
                  htmlFor="password2"
                  className="w-full lg:w-4/5 me-auto bg-white rounded-lg border-gray-200 p-4 text-sm shadow-sm flex items-center justify-between mt-2"
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password2"
                    {...register("password2", {
                      required: t("passwordRequired"),
                      pattern: {
                        value:
                          /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&#])[A-Za-z\d@$!%*?&#]{6,}$/,
                        message: t("passwordValidation"),
                      },
                    })}
                    className="outline-none flex-1"
                    placeholder={t("confirmPassword")}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="ml-2 text-gray-500 focus:outline-none"
                  >
                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  </button>
                </label>
                <div className="w-full lg:w-4/5 mr-auto">
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
                } w-full lg:w-4/5 me-auto py-3 text-sm font-medium text-white justify-center items-center mt-8`}
              >
                {isLoading ? (
                  <ImSpinner9 className="animate-spin text-3xl text-secondary" />
                ) : (
                  t("reset")
                )}
              </button>

              {isError && (
                <div className="w-full lg:w-4/5 me-auto">
                  <p className="text-red-500 text-sm text-center font-medium">
                    {error?.data?.message}
                  </p>
                </div>
              )}

              {StatusOfChangesPassword && (
                <div className="w-full lg:w-4/5 me-auto">
                  <p className="text-emerald-600 text-center font-semibold">
                    {StatusOfChangesPassword}
                  </p>
                </div>
              )}
            </form>

            <div className="flex w-full flex-col justify-center items-center gap-2 py-4 lg:w-4/5 me-auto">
              {isResendDisabled && (
                <p
                  className={`${
                    isResendDisabled ? "text-white" : "text-gray-500"
                  } text-base font-medium`}
                >
                  {formatTime(timeLeft)}
                </p>
              )}
              <p
                className={`text-sm lg:text-base font-medium leading-[18.75px] text-center ${
                  isLoading || isResendDisabled
                    ? "text-textopacity"
                    : "text-white"
                }`}
              >
                {t("didntGetOTP")}
                <button
                  disabled={isLoading || isResendDisabled}
                  onClick={() => setResendOTPModal(true)}
                  className={`text-sm lg:text-base font-medium leading-[18.75px] text-center underline mx-2 ${
                    isResendDisabled ? "text-gray-500" : "text-white"
                  }`}
                >
                  {t("resendOTP")}
                </button>
              </p>
            </div>
          </div>
        </div>

        <img
         src="/images/logos/logo.svg"
          alt="register img"
          className="hidden lg:block w-96 slide-in-right object-cover rounded-xl z-10"
        />
      </div>
      {resendOTPModal && (
        <ResendOtpModal
          setResendOTPModal={setResendOTPModal}
          reSendOtp={reSendOtp}
        />
      )}
    </>
  );
};

export default ResetPassword;