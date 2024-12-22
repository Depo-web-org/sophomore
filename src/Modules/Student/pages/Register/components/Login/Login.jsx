import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../../../../../Redux/Auth/authApiSlice";
import { setCredentials } from "../../../../../../Redux/Auth/authSlice";

export default function Login({ toggleForm }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);

  // Setup react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Use login mutation from authApiSlice
  const [login, { isLoading, isError }] = useLoginMutation();

  const handleLogin = async (data) => {
    try {
      console.log("Login request data:", data);

      // Call the login mutation using data from the form
      const response = await login({
        email: data.email,
        password: data.password,
      }).unwrap();

      console.log("Login response:", response);

      if (response) {
        console.log("Login successful:", response);

        // Dispatch the setCredentials action to save the user data in the Redux store
        dispatch(setCredentials(response));

        // Reset the form after successful login
        reset();

        // Redirect to home page or the dashboard
        navigate("/");
      }
    } catch (error) {
      // Log the full error details for debugging
      console.error("Login Error:", error);

      // Check if there is an error response and display the error message
      if (error?.data?.message) {
        setErrorMessage(error.data.message);
      } else if (error?.status === 401) {
        setErrorMessage("Invalid email or password.");
      } else {
        setErrorMessage("There was an unexpected error. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-[calc(100vh-112px)] flex flex-col justify-between gap-8 pb-4 lg:pb-0 lg:gap-24 w-full md:w-4/5 lg:w-1/2 overflow-hidden">
      <div className="flex flex-col items-start gap-8 lg:gap-24 w-full">
        <div className="flex flex-col justify-start items-start gap-2">
          <img src="/logos/logo.svg" alt="Logo" className="hidden lg:block" />
          <p className="text-white text-3xl lg:text-4xl font-semibold pt-4">
            Welcome Back!
          </p>
          <p className="text-sm lg:text-base text-gray-600">
            Please login to your account
          </p>
        </div>

        <div className="w-full">
          <form
            action="#"
            onSubmit={handleSubmit(handleLogin)}
            className="mb-0 mt-0 lg:mt-8 w-full space-y-4 flex flex-col gap-4 lg:gap-8"
          >
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}

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

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}

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

            {/* Error message from login failure */}
            {errorMessage && (
              <p className="text-sm text-red-500">{errorMessage}</p>
            )}

            {/* Forgot Password */}
            <div className="flex items-end justify-center lg:justify-between flex-wrap gap-y-4">
              <label
                htmlFor="Option1"
                className="flex cursor-pointer items-start gap-2"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="size-5 rounded border-gray-300"
                    id="rememberMe"
                  />
                </div>
                <div>
                  <strong className="font-normal text-sm text-white">
                    Remember me (Teacher)
                  </strong>
                </div>
              </label>
              <button className="inline-block border-b-2 text-sm font-normal text-white">
                Forgot password
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* No account? */}
      <div className="mx-auto">
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
