import React from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
// page fawzy
const Xxxxx = () => {
  return (
    <div className="relative ">
      <img
        className="w-full min-h-screen object-cover"
        src="/public/MyLearning/MyLearning.svg"
        alt="MyLearning"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <div className="text-white w-96 mx-auto text-center font-semibold">
          <p className="text-8xl pb-2">66%</p>
          <p className="text-2xl sm:text-3xl">You got 2/3 Questions</p>
        </div>

        <div className="mx-auto font-bold rounded bg-[#0A142F] text-white w-36 h-44 mb-10 mt-5 text-center flex justify-center items-center">
          <div>
            <div className="flex justify-items-center items-center">
              <AiFillCheckCircle className="text-green-500 w-6 h-6 my-2 me-1" />
              <p> 1. 16</p>
            </div>

            <div className="flex justify-items-center items-center">
              <AiFillCheckCircle className="text-green-500 w-6 h-6 my-2 me-1" />
              <p> 2. -3</p>
            </div>

            <div className="flex justify-items-center items-center">
              <AiFillCloseCircle className="text-red-500 w-6 h-6 my-2 me-1" />
              <p> 30.707</p>
            </div>
          </div>
        </div>

        <button
          type="button"
          data-twe-ripple-init
          data-twe-ripple-color="light"
          className="mx-auto block rounded bg-primary px-6 pb-2 pt-2.5 text-lg font-semibold text-white"
        >
          My learning
        </button>
      </div>
    </div>
  );
};

export default Xxxxx;
