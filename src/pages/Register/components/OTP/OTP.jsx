import React from "react";

export default function OTP({ handleValidateOtp }) {
  return (
    <div className="w-full my-auto flex justify-center ">
      <div className="flex flex-col items-start justify-start gap-2">
        <p className="text-4xl font-bold text-white">Check your mail</p>
        <p className="text-base font-bold text-textopacity">
          We have sent an otp to your mail m.********@g****.com
        </p>
        <div className="flex flex-col justify-center gap-2">
          <div className="flex justify-center items-center gap-8 text-white text-center text-2xl">
            <input
              className="w-[53px] bg-transparent border-b-[1px] ring-0 outline-none"
              type="text"
            />
            <input
              className="w-[53px] bg-transparent border-b-[1px] ring-0 outline-none"
              type="text"
            />
            <input
              className="w-[53px] bg-transparent border-b-[1px] ring-0 outline-none"
              type="text"
            />
            <input
              className="w-[53px] bg-transparent border-b-[1px] ring-0 outline-none"
              type="text"
            />
            <input
              className="w-[53px] bg-transparent border-b-[1px] ring-0 outline-none"
              type="text"
            />
            <input
              className="w-[53px] bg-transparent border-b-[1px] ring-0 outline-none"
              type="text"
            />
          </div>
          <button
            onClick={handleValidateOtp}
            className="w-full bg-primary py-2 rounded-md text-white text-lg font-semibold mt-8"
          >
            Validate
          </button>
          <div className="flex flex-col justify-center items-center gap-2 pt-8">
            <button className="text-base font-medium leading-[18.75px] text-center underline text-white">
              Resend your One Time Password
            </button>
            <button className="ext-sm font-normal leading-[16.41px] text-center underline text-textopacity">
              Not your Email?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
