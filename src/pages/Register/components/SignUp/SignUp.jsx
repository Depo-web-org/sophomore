import React from "react";

export default function SignUp({ toggleForm, handleSendOtp }) {
  return (
    <div className="min-h-[calc(100vh-112px)] flex flex-col gap-12 justify-between w-full md:w-1/2">
      <div className=" flex flex-col items-start gap-6 w-full">
        <div className="flex flex-col justify-start items-start gap-2">
          <img src="/logos/logo.svg" alt="" />
          <p className="text-white text-4xl font-semibold pt-4">
            Join our team{" "}
          </p>
          <p className="text-gray-600">Fill the form to join our team</p>
        </div>
        <div className="w-full">
          <form
            action="#"
            className=" mb-0 mt-8 w-full space-y-4 flex flex-col gap-5"
          >
            <div className="w-full flex justify-center items-center gap-8 ">
              <button className="text-white text-base font-bold p-[10px] bg-secondary  rounded-lg">
                Student
              </button>
              <button className="text-white text-base font-bold p-[10px] active:bg-secondary border-[1px] border-gray-600 rounded-lg">
                Teacher
              </button>
            </div>
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>

              <div className="relative">
                <input
                  type="name"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div>
              <label htmlFor="number" className="sr-only">
                number
              </label>

              <div className="relative">
                <input
                  type="number"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </label>

              <div className="relative">
                <input
                  type="cofirm-password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="confirm password"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <button
              type="submit"
              onClick={handleSendOtp}
              className="inline-block w-full rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white"
            >
              Send OTP
            </button>
          </form>
        </div>
      </div>
      <div className="mx-auto ">
        <p className="text-sm text-gray-500">
          Aleardy have account?
          <button
            onClick={toggleForm}
            className="underline px-2 text-secondary"
            href="#"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
