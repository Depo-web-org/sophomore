import axios from "axios";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

export default function SignUp({ toggleForm, handleSendOtp }) {
  const [requestEndPoints, setRequestEndPoints] = useState("student")
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  // console.log(`http://192.168.1.18:8000/api/v1/user/register/${requestEndPoints}`);
  const onSubmit = async (data) => {
    console.log(data)
await axios.post(`http://192.168.1.18:8000/api/v1/user/register/${requestEndPoints}`, data).then((res)=>console.log(res)).catch((err)=>console.log(err))
    // handleSendOtp()
    // handleSendOtp(); // Trigger OTP function
    //zio.then(success => navigate("otp")
  };

  return (
    <div className="min-h-[calc(100vh-112px)] flex flex-col gap-8 lg:gap-12 justify-between w-full md:w-1/2 pb-4">
      <div className="flex flex-col items-start gap-6 w-full">
        <div className="flex flex-col justify-start items-start gap-2">
          <p className="text-white text-3xl lg:text-4xl font-semibold pt-4">
            Join our team
          </p>
          <p className="text-gray-600">Fill the form to join our team</p>
        </div>
        <div className="w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mb-0 w-full space-y-4 flex flex-col gap-5"
          >
            <div className="w-full flex justify-center items-center gap-4 lg:gap-8">
              <button
              onClick={()=>setRequestEndPoints('student')}
                type="button"
                className={`text-white text-base font-bold px-10 py-2 outline-none ${requestEndPoints ==='student'  ? "bg-secondary ":'bg-opacity-0  border border-gray-600'} rounded-lg duration-200 transition-all`}
              >
                Student
              </button>
              <button
                onClick={()=>setRequestEndPoints('teacher')}
                type="button"
                className={`text-white text-base font-bold px-10 py-2 outline-none ${requestEndPoints ==='teacher'  ? "bg-secondary ":'bg-opacity-0  border border-gray-600'} rounded-lg duration-200 transition-all`}
              >
                Teacher
              </button>
            </div>
            {/* Name Field */}
            <div>
              <label htmlFor="full_name" className="sr-only">
              Full Name
              </label>
              <input
                type="text"
                id="full_name"
                {...register("full_name", { required: "Name is required" })}
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Enter your Full Name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            {/* Phone Number Field */}
            <div>
              <label htmlFor="phone_number" className="sr-only">
                phone Number
              </label>
              <Controller
                name="phone_number"
                control={control}
                rules={{
                  required: "Phone number is required",
                  validate: (value) =>
                    isValidPhoneNumber(value) || "Invalid phone number",
                }}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    id="user-phone"
                    placeholder="Enter your phone number"
                    defaultCountry="EG"
                    className="w-full bg-white p-4 rounded-lg border-gray-200 text-sm shadow-sm outline-none focus-visible:outline-none"
                  />
                )}
              />
              {/* <input
                type="tel"
                id="phone_number"
                {...register("phone_number", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid phone number",
                  },
                })}
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Enter your phone number"
              /> */}
              {errors.number && (
                <p className="text-red-500 text-sm">{errors.number.message}</p>
              )}
            </div>
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            {/* Password Field */}
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Enter password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>
            {/* Confirm Password Field */}
            <div>
              <label htmlFor="password2" className="sr-only">
                Confirm Password
              </label>
              <input
                type="password"
                id="password2"
                {...register("password2", {
                  required: "Confirm Password is required",
                  validate: (value, data) =>
                    value === data.password || "Passwords must match",
                })}
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Confirm password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white"
            >
              Send OTP
            </button>
          </form>
        </div>
      </div>
      <div className="mx-auto">
        <p className="text-sm text-gray-500">
          Already have an account?
          <button
            onClick={toggleForm}
            className="underline px-2 text-secondary"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
