import React from "react";
import { useNavigate } from "react-router-dom";

export default function SucessOtp() {
  const navigate = useNavigate();
  return (
    <div className="w-full my-auto flex justify-center ">
      <div className="flex flex-col items-start justify-start gap-2 ">
        <p className="text-4xl font-bold text-white">Amazing</p>
        <p className="text-base font-bold text-textopacity">
          Everything is set{" "}
        </p>
        <div className="flex flex-col justify-center items-center gap-2 w-full pt-8">
          <img
            className="size-12"
            src="public/register/Vector (3).svg"
            alt="register svg"
          />
          <p className="text-3xl font-semibold  text-center text-white">
            Thank You
          </p>
          <p className="text-3xl font-semibold  text-center text-white">
            You have registered Successfully
          </p>
          <p className="text-base font-medium text-textopacity">
            Pending your verification paper
          </p>
          <button
            onClick={() => navigate("/")}
            className="w-[478px] bg-primary py-2 rounded-md text-white text-lg font-semibold mt-8"
          >
            Go to Homepage{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
