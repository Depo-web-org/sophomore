import React, { useState } from "react";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import OTP from "./components/OTP/OTP";
import SucessOtp from "./components/OTP/Sucess";

export default function Register() {
  const [isLogin, setIsLogin] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isOTP, setIsOTP] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setIsLogin(!isLogin);
  };

  const handleSendOtp = () => {
    setIsSignUp(false);
    setIsOTP(true);
  };

  const handleValidateOtp = () => {
    setIsOTP(false);
    setIsSuccess(true);
  };

  return (
    <div className="container w-full pt-24 md:w-custom-md xl:w-custom-xl mx-auto min-h-screen flex justify-between items-start gap-4">
      {isLogin && <Login toggleForm={toggleForm} />}

      <img
        src="https://s3-alpha-sig.figma.com/img/8a0c/4ce1/748e677dd753f6cc29156925cf1be75a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=auHWCi7iQPHol1zbN6cW6WzUcr64mG-tkrhFy~WMU5F2GbETsgbOv-EgXbA3kyfeIRgy4N1v-ltVzgECeGeoy5Lq15pXSsFk6FmHUsdBWOidRqLEaTWMThs3YnjctaeFlSvrtkTz2Ro7~RVWfYg~EIjQ79qGFqMY9QcQo8BK3qH-tdwyM4xbvEu668cV8mDfL3bSedKC9IWyv-SCFS9fcWvocSGRhfYgOKGARQ4kOkUvaaL3mBBx5vAc3G4dLgokXx3bdckz21eSSMSD~T8fHUl4rWkBcRtwhobCa9nTpoW5JQ76myeDGg1LFrjfP4UqLDrqQJegjA1UATCm1Z8p9A__"
        alt="register img"
        className={`hidden lg:block min-h-[calc(100vh-112px)] lg:max-w-[420px] xl:max-w-[580px] ${
          !isSignUp || isLogin ? "slide-in-left" : "slide-in-right"
        } object-cover rounded-xl z-10`}
      />
      {isSignUp && (
        <SignUp toggleForm={toggleForm} handleSendOtp={handleSendOtp} />
      )}

      {isOTP && <OTP handleValidateOtp={handleValidateOtp} />}

      {isSuccess && <SucessOtp />}
    </div>
  );
}
