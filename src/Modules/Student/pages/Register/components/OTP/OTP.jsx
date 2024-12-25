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

export default function OTP({ handleValidateOtp, mail, registerAgain }) {
  const navigate = useNavigate();
  const [resendOTPModal, setResendOTPModal] = useState(false);
  const role = useSelector((state) => state.role.role);
    const [responseError, setResponseError] = useState(null)

  // time format
  const [timeLeft, setTimeLeft] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  // react hook form
  const { handleSubmit, control, setFocus } = useForm({
    defaultValues: {
      otp: ["", "", "", "", "", ""],
    },
  });
  const [resendOtp, { isLoading }] = useResend_otpMutation();

  // Use verifyEmail mutation
  const [verifyEmail, { isLoading: loadingSending }] =
    useVerify_emailMutation();

  const onSubmit = async (data) => {
    const otp_code = data.otp.join("");

    try {
      const response = await verifyEmail({ otp_code}).unwrap();
      console.log("Verify Email Response:", response);
      handleValidateOtp(); // Call the provided callback on success
    } catch (err) {
      setResponseError(err?.data?.message)
      console.error("Verification Error:", err?.data?.message || err);
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

  // time format
 

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

  // ===> resend-otp endpoints name

  const reSendOtp = async () => {
    setResendOTPModal(false);
    setIsResendDisabled(true);
    setTimeLeft(60);
    await resendOtp({ email: mail.email , role})
      .unwrap()
      .then(() => console.log("Successfully sent"))
      .catch((err) => console.log("Error", err));
  };

  return (
    <>
      <div className="w-full my-auto flex justify-center ">
        <div className="flex flex-col items-start justify-start gap-2 mx-4">
        <HeadTitle
                   title={{
                     head: "Check your mail",
                    subTitle: `We have sent an OTP to your mail ${mail?.email?.slice(0, 3)}*****@${mail?.email?.split("@")[1]?.slice(0, 2)}***.com`,
                   }}
                 />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2 "
          >
            <div className="flex justify-center items-center gap-8 text-white text-center text-2xl  mx-4 ">
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
                      className="w-full lg:w-4/5 mx-auto  bg-transparent border-b-[1px] ring-0 outline-none text-base lg:text-2xl"
                      onChange={(e) => {
                        onChange(e.target.value);
                        handleInput(e, index, [0, 1, 2, 3, 4, 5], onChange);
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
                <ImSpinner9 className="animate-spin text-3xl text-secondary " />
              ) : (
                "Validate"
              )}
            </button>
            {responseError && <p className="text-red-500 text-center">{responseError}</p>}
          </form>
          <div className="flex flex-col justify-center items-center gap-2 pt-8 w-full">
            <p
              className={`${
                isResendDisabled ? "text-white" : "text-gray-500"
              } text-base font-medium `}
            >
              {formatTime(timeLeft)}
            </p>
            <p
              className={`text-sm lg:text-base font-medium leading-[18.75px] text-center  ${
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

            <p className="text-sm lg:text-base leading-[18.75px] text-center  text-white">
              Wrong Email ?
              <button
                onClick={() => {
                  setResendOTPModal(false);
                  registerAgain();
                }}
                className="text-sm  leading-[18.75px] text-center underline text-white mx-2"
              >
                Register again
              </button>
            </p>
          </div>
        </div>
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
}

export function ResendOtpModal(props) {
  return (
    <div
      onClick={() => props.setResendOTPModal(false)}
      className="fixed inset-0 bg-slate-600 bg-opacity-75 flex items-center justify-center z-50 "
    >
      <div
        className="bg-slate-900 rounded-lg p-6 w-full mx-4 lg:w-3/5 lg:mx-auto border-r-2 border-b-2 border-primary "
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
        <div className="flex items-center justify-center flex-col gap-2 ">
          <p className="mb-4 text-white text-2xl font-bold text-center">
            Resend OTP <br />
            <span className="text-base font-medium"> Are you sure ?</span>
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <button
              onClick={() => props.reSendOtp()}
              className="bg-primary text-white px-4 py-2 min-w-[279px] rounded-md hover:bg-secondary duration-500 transition-all font-semibold"
            >
              Yes, Resend
            </button>

            <button
              onClick={() => props.setResendOTPModal(false)}
              className="bg-slate-900 text-white px-4 py-2 min-w-[279px] rounded-md hover:bg-secondary duration-500 transition-all font-semibold"
            >
              Discard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
