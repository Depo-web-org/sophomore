import React, { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import OTP from "./components/OTP/OTP";
import SucessOtp from "./components/OTP/Sucess";

export default function Register() {
  const [isLogin, setIsLogin] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isOTP, setIsOTP] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [mail, setMail] = useState();
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
  const processFinished = () => {
    setIsLogin(true);
    setIsSignUp(false);
    setIsOTP(false);
    setIsSuccess(false);
  };
  const registerAgain = () => {
    setIsSignUp(true);
    setIsLogin(false);
    setIsOTP(false);
  };
  return (
    <div className="container w-full pt-16 md:w-custom-md xl:w-custom-xl mx-auto min-h-screen flex justify-between items-start gap-10 overflow-hidden">
      {isLogin && <Login toggleForm={toggleForm} />}

      <img
        src="images/register/login.webp"
        alt="register img"
        className={`hidden lg:block min-h-[calc(100vh-112px)] lg:max-w-[420px] xl:max-w-[580px] ${
          !isSignUp || isLogin ? "slide-in-left" : "slide-in-right"
        } object-cover rounded-xl z-10`}
      />
      {isSignUp && (
        <SignUp
          toggleForm={toggleForm}
          handleSendOtp={handleSendOtp}
          setMail={setMail}
        />
      )}

      {isOTP && (
        <OTP
          handleValidateOtp={handleValidateOtp}
          registerAgain={registerAgain}
          mail={mail}
        />
      )}
      {/* <OTP handleValidateOtp={handleValidateOtp} mail={'sadasd@ssad'}  registerAgain={registerAgain}/> */}
      {isSuccess && <SucessOtp processFinished={processFinished} />}
    </div>
  );
}
