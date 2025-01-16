import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { ImSpinner9 } from "react-icons/im";
import {
  useResend_otpMutation,
  useVerify_emailMutation,
} from "../../../../../../Redux/Auth/authApiSlice";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { HeadTitle } from "../Login/Login";
import { useSelector } from "react-redux";
import { formatTime } from "../../../../../../Helpers/Timer";
import { useTranslation } from "react-i18next";

export default function OTP({ handleValidateOtp, mail, registerAgain }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [resendOTPModal, setResendOTPModal] = useState(false);
  const role = useSelector((state) => state.role.role);
  const [responseError, setResponseError] = useState(null);
  const provider = role === "teacher" ? true : false;

  // Time format
  const [timeLeft, setTimeLeft] = useState(1);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  // React Hook Form
  const { handleSubmit, control, setFocus } = useForm({
    defaultValues: {
      otp: ["", "", "", "", "", ""],
    },
  });
  const [resend_otp, { isLoading }] = useResend_otpMutation();
  const [verifyEmail, { isLoading: loadingSending }] = useVerify_emailMutation();

  const onSubmit = async (data) => {
    const otp = data.otp.join("");
    const dataSend = { email: mail, otp };
    if (provider) {
      dataSend.provider = provider;
    }
    try {
      const response = await verifyEmail({ dataSend }).unwrap();
      console.log("Verify Email Response:", response);
      if (response.code === 0) {
        handleValidateOtp(); // Call the provided callback on success
      } else if (response.code === 1) {
        setResponseError(response.message);
        console.error("Verification Error:", response.message || response);
      }
    } catch (err) {
      // Handle error
    }
  };

  const handleInput = (e, index, fields) => {
    const value = e.target.value;
    if (value.length === 1 && index < fields.length - 1) {
      setFocus(`otp[${index + 1}]`);
    } else if (!value && index > 0) {
      setFocus(`otp[${index - 1}]`);
    }
  };

  const handlePaste = (e, setValue) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    if (/^\d{6}$/.test(text)) {
      const digits = text.split("");
      digits.forEach((digit, i) => setValue(`otp[${i}]`, digit));
      setFocus("otp[5]"); // Move focus to the last input
    }
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
    const dataSend = { email: mail };
    if (provider) {
      dataSend.provider = provider;
    }
    await resend_otp({ dataSend })
      .unwrap()
      .then(() => console.log("Successfully sent"))
      .catch((err) => console.log("Error", err));
    setResendOTPModal(false);
    setIsResendDisabled(true);
    setTimeLeft(1);
  };

  return (
    <>
      <div className="w-full my-auto flex justify-center">
        <div className="flex flex-col items-start justify-start gap-2 mx-4">
          <HeadTitle
            title={{
              head: t("otp.checkYourMail"),
              subTitle: t("otp.otpSent", {
                mailPrefix: mail?.slice(0, 3),
                mailDomain: mail?.split("@")[1]?.slice(0, 2),
              }),
            }}
          />
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
            <div className="flex justify-center items-center gap-2 lg:gap-4 text-white text-center text-2xl mx-4">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <Controller
                  key={index}
                  name={`otp[${index}]`}
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
            {/* Submit Button */}
            <button
              type="submit"
              disabled={loadingSending || isLoading}
              className={`inline-flex w-full rounded-lg ${
                loadingSending || isLoading ? "bg-white" : "bg-primary"
              } px-5 py-3 text-sm font-medium text-white justify-center items-center mt-8`}
            >
              {loadingSending || isLoading ? (
                <ImSpinner9 className="animate-spin text-3xl text-secondary" />
              ) : (
                t("otp.validate")
              )}
            </button>
            {responseError && (
              <p className="text-red-500 text-center">{responseError}</p>
            )}
          </form>
          <div className="flex flex-col justify-center items-center gap-2 pt-8 w-full">
            <p
              className={`${
                isResendDisabled ? "text-white" : "text-gray-500"
              } text-base font-medium`}
            >
              {formatTime(timeLeft)}
            </p>
            <p
              className={`text-sm lg:text-base font-medium leading-[18.75px] text-center ${
                isLoading || isResendDisabled
                  ? "text-textopacity"
                  : "text-white"
              }`}
            >
              {t("otp.didNotReceiveOTP")}
              <button
                disabled={isLoading || isResendDisabled}
                onClick={() => setResendOTPModal(true)}
                className={`text-sm lg:text-base font-medium leading-[18.75px] text-center underline mx-2 ${
                  isResendDisabled ? "text-gray-500" : "text-white"
                }`}
              >
                {t("otp.resendOTP")}
              </button>
            </p>

            <p className="text-sm lg:text-base leading-[18.75px] text-center text-white">
              {t("otp.wrongEmail")}
              <button
                onClick={() => {
                  setResendOTPModal(false);
                  registerAgain();
                }}
                className="text-sm leading-[18.75px] text-center underline text-white mx-2"
              >
                {t("otp.registerAgain")}
              </button>
            </p>
          </div>
        </div>
      </div>
      {resendOTPModal && (
        <ResendOtpModal
          setResendOTPModal={setResendOTPModal}
          reSendOtp={reSendOtp}
        />
      )}
    </>
  );
}

export function ResendOtpModal(props) {
  const { t } = useTranslation();

  return (
    <div
      onClick={() => props.setResendOTPModal(false)}
      className="fixed inset-0 bg-slate-600 bg-opacity-75 flex items-center justify-center z-50"
    >
      <div
        className="bg-slate-900 rounded-lg p-6 w-full mx-4 lg:w-3/5 lg:mx-auto border-r-2 border-b-2 border-primary"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-end justify-end">
          <button
            onClick={() => props.setResendOTPModal(false)}
            className="text-white hover:text-gray-400"
          >
            <IoClose size={24} />
          </button>
        </div>
        <div className="flex items-center justify-center flex-col gap-2">
          <p className="mb-4 text-white text-2xl font-bold text-center">
            {t("otp.resendOTP")} <br />
            <span className="text-base font-medium">
              {t("otp.areYouSure")}
            </span>
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <button
              onClick={() => props.reSendOtp()}
              className="bg-primary text-white px-4 py-2 min-w-[279px] rounded-md hover:bg-secondary duration-500 transition-all font-semibold"
            >
              {t("otp.yesResend")}
            </button>

            <button
              onClick={() => props.setResendOTPModal(false)}
              className="bg-slate-900 text-white px-4 py-2 min-w-[279px] rounded-md hover:bg-secondary duration-500 transition-all font-semibold"
            >
              {t("otp.discard")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}