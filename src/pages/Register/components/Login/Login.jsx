import React from "react";
import { useAuth } from "../../../../ProtectedRoutes/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login({ toggleForm }) {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/");
  };
  return (
    <div className="min-h-[calc(100vh-112px)] flex flex-col justify-between gap-44 w-full md:w-4/5 lg:w-1/2">
      <div className=" flex flex-col items-start gap-24 w-full">
        <div className="flex flex-col justify-start items-start gap-2">
          <img src="/logos/logo.svg" alt="" />
          <p className="text-white text-4xl font-semibold pt-4">
            Welcome Back!
          </p>
          <p className="text-gray-600">Please login to your account</p>
        </div>
        <div className="w-full">
          <form
            action="#"
            className=" mb-0 mt-8 w-full space-y-4 flex flex-col gap-8"
          >
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

            <div className="flex items-end justify-between">
              <label
                htmlFor="Option1"
                className="flex cursor-pointer items-start gap-2"
              >
                <div className="flex items-center">
                  &#8203;
                  <input
                    type="checkbox"
                    className="size-5 rounded border-gray-300"
                    id="Option1"
                  />
                </div>

                <div>
                  <strong className="font-normal text-sm text-white">
                    remember me
                  </strong>
                </div>
              </label>

              <button className="inline-block  border-b-2  text-sm font-normal text-white">
                forgot password
              </button>
            </div>
            <button
              onClick={handleLogin}
              type="submit"
              className="inline-block w-full rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="mx-auto ">
        <p className="text-sm text-gray-500">
          No account?
          <button
            onClick={toggleForm}
            className="underline px-2 text-secondary"
            href="#"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}
