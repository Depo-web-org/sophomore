import React, { useState } from "react";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

export default function Register() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => setIsSignUp(!isSignUp);

  return (
    <div className="container w-full pt-24 md:w-custom-md xl:w-custom-xl mx-auto min-h-screen flex justify-between items-start gap-4">
      {isSignUp ? (
        <>
          <div className={` `}>
            <img
              src="https://s3-alpha-sig.figma.com/img/8a0c/4ce1/748e677dd753f6cc29156925cf1be75a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=auHWCi7iQPHol1zbN6cW6WzUcr64mG-tkrhFy~WMU5F2GbETsgbOv-EgXbA3kyfeIRgy4N1v-ltVzgECeGeoy5Lq15pXSsFk6FmHUsdBWOidRqLEaTWMThs3YnjctaeFlSvrtkTz2Ro7~RVWfYg~EIjQ79qGFqMY9QcQo8BK3qH-tdwyM4xbvEu668cV8mDfL3bSedKC9IWyv-SCFS9fcWvocSGRhfYgOKGARQ4kOkUvaaL3mBBx5vAc3G4dLgokXx3bdckz21eSSMSD~T8fHUl4rWkBcRtwhobCa9nTpoW5JQ76myeDGg1LFrjfP4UqLDrqQJegjA1UATCm1Z8p9A__"
              alt="register img"
              className="min-h-[calc(100vh-112px)] max-w-[580px] object-cover rounded-xl"
            />
          </div>
          <SignUp toggleForm={toggleForm} />
        </>
      ) : (
        <>
          <Login toggleForm={toggleForm} />
          <div className={``}>
            <img
              src="https://s3-alpha-sig.figma.com/img/8a0c/4ce1/748e677dd753f6cc29156925cf1be75a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=auHWCi7iQPHol1zbN6cW6WzUcr64mG-tkrhFy~WMU5F2GbETsgbOv-EgXbA3kyfeIRgy4N1v-ltVzgECeGeoy5Lq15pXSsFk6FmHUsdBWOidRqLEaTWMThs3YnjctaeFlSvrtkTz2Ro7~RVWfYg~EIjQ79qGFqMY9QcQo8BK3qH-tdwyM4xbvEu668cV8mDfL3bSedKC9IWyv-SCFS9fcWvocSGRhfYgOKGARQ4kOkUvaaL3mBBx5vAc3G4dLgokXx3bdckz21eSSMSD~T8fHUl4rWkBcRtwhobCa9nTpoW5JQ76myeDGg1LFrjfP4UqLDrqQJegjA1UATCm1Z8p9A__"
              alt="register img"
              className="min-h-[calc(100vh-112px)] max-w-[580px] object-cover rounded-xl"
            />
          </div>
        </>
      )}
    </div>
  );
}
