import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { ImSpinner9 } from "react-icons/im";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import {
  useResend_otpMutation,
  useSignupMutation,
} from "../../../../../../Redux/Auth/authApiSlice";
import { HeadTitle } from "../Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { setRole } from "../../../../../../Redux/RoleSlice/RoleSlice";
import UserRole from "../components/UserRole/UserRole";

export default function SignUp({ toggleForm, handleSendOtp, setMail }) {
  const [requestEndPoints, setRequestEndPoints] = useState("student");

  const role = useSelector((state) => state.role.role);

  const dispatch = useDispatch();

  const [alreadyAv, setAlreadyAv] = useState(false);

  // Redux Toolkit's useSignupMutation hook
  const [resendOtp] = useResend_otpMutation();
  const [signup, { isLoading, isError, error }] = useSignupMutation();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // const onSubmit = async (data) => {
  //   setMail(data);
  //   // try {
  //   //   // Call the signup mutation here instead of axios
  //   //   await signup({ userData: data, role }).unwrap();
  //   //   handleSendOtp();
  //   // } catch (err) {
  //   //   console.error("Signup Error:", err.data?.message);
  //   //   err?.data?.message === "student with this email already exists." ||
  //   //   err?.data?.message === "Teacher with this email already exists."
  //   //     ? // ? handleSendOtp()
  //   //       ResendOTP(data, handleSendOtp, setAlreadyAv)
  //   //     : console.log(err?.response);
  //   // }
  // };




  const onSubmit = async (data) => {
    
    const provider = role === "teacher" ? true : false;
    

    const payload = {
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
      phone_number: data.phone_number,
      password: data.password,
      password2: data.password2,
      provider: provider,
    };
    console.log("Data to Send:", payload);
    try {
     const response= await signup({ userData: payload }).unwrap()
     console.log(response.message  )
        
        if(response.code === 0){
          handleSendOtp();
        }else{
          console.error("Signup Error:", response.message );
        }
    } 
    catch (err) {
      console.error("Signup Error:", err?.data?.message || err);
      // if (
      //   err?.data?.message === "student with this email already exists." ||
      //   err?.data?.message === "Teacher with this email already exists."
      // ) {
      //   ResendOTP(data, handleSendOtp, setAlreadyAv);
      // } else {
      //   console.log("Other Error:", err?.response);
      // }
    }
  };
  












  //645838
  // Redux Toolkit's useResend_otpMutation hook
  const ResendOTP = async (data, handleSendOtp, setAlreadyAv) => {
    try {
      await resendOtp({ email: data.email, role }).unwrap();
      handleSendOtp(); // Call the success callback
    } catch (err) {
      if (
        err?.data?.message ===
        "Your account has already been verified. Please go to the login page."
      ) {
        setAlreadyAv(true); // Set the already verified flag
      } else {
        console.error("Resend OTP Error:", err?.data?.message || err);
      }
    }
  };

  return (
    <div className="min-h-[calc(100vh-112px)]  flex flex-col gap-8 lg:gap-12 justify-between w-full  pb-4 ">
      <div className="flex flex-col items-start gap-6 w-full 2xl:w-4/5 ml-auto ">
        <HeadTitle
          title={{
            head: "Join Our Team",
            subTitle: "Fill the form to join our team",
          }}
        />
        <div className="w-full">
          {/* form starting */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mb-0 w-full space-y-4 flex flex-col gap-2 lg:gap-5 "
          >
            <UserRole role={role} dispatch={dispatch} />
            {/*First Name Field */}
            <div className='flex gap-x-2 '> 
              <label
                htmlFor="first_name"
                className="w-1/2 bg-white rounded-lg border-gray-200 px-2 py-3 lg:p-4 text-sm shadow-sm flex items-center justify-between "
              >
                <input
                  type="text"
                  id="first_name"
                  {...register("first_name", {
                    required: "First Name is required",
                    pattern: {
                      value: /^[a-zA-Z]+$/,
                      message: "Name must contain only letters",
                    }
                  })}
                  className="outline-none text-base w-full"
                  placeholder="First Name"
                />
              </label>
             
  {/*Last Name Field */}

               <label
                htmlFor="last_name"
                className="w-1/2 bg-white rounded-lg border-gray-200 px-2 py-3 lg:p-4 text-sm shadow-sm flex items-center justify-between"
              >
                <input
                  type="text"
                  id="last_name"
                  {...register("last_name", {
                    required: "Last Name is required",
                    pattern: {
                      value: /^[a-zA-Z]+$/,
                      message: "Name must contain only letters",
                    }
                  })}
                  className="outline-none text-base w-full"
                  placeholder=" Last Name"
                />
              </label>
           
            </div>
            {/* {errors.first_name || errors.last_name && <>
  <div className='flex justify-evenly'>
    {errors.first_name && (
      <p className="text-red-500 text-sm text-center font-medium">
        {errors.first_name.message} 
      </p>
    )}
    {errors.last_name && (
      <p className="text-red-500 text-sm text-center font-medium">
        {errors.last_name.message} 
      </p>
    )}
  </div>
</>} */}

            

  {/*Last Name Field */}
  {/* <div>
              <label
                htmlFor="last_name"
                className="w-full bg-white rounded-lg border-gray-200 px-2 py-3 lg:p-4 text-sm shadow-sm flex items-center justify-between"
              >
                <input
                  type="text"
                  id="last_name"
                  {...register("last_name", {
                    required: "Name is required",
                    pattern: {
                      value: /^[a-zA-Z]{3,}\s[a-zA-Z]{3,}$/,
                      message:
                        "Enter a valid full name with two words, each at least 3 letters",
                    },
                  })}
                  className="outline-none text-base w-full"
                  placeholder="Enter your Last Name"
                />
              </label>
              {errors.last_name && (
                <p className="text-red-500 text-sm text-center font-medium mt-4">
                  {errors.last_name.message}
                </p>
              )}
            </div> */}



            {/* Phone Number Field */}
            <div>
              <label htmlFor="phone_number" className="sr-only">
                Phone Number
              </label>
              <Controller
                name="phone_number"
                control={control}
                rules={{
                  validate: (value) =>
                    (value && isValidPhoneNumber(value)) ||
                    "Invalid phone number",
                }}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    id="phone_number"
                    placeholder="Enter your phone number"
                    defaultCountry="EG"
                    className="w-full text-base bg-white px-2 py-3 lg:p-4  rounded-lg border-gray-200  shadow-sm outline-none focus-visible:outline-none"
                  />
                )}
              />
              {errors.phone_number && (
                <p className="text-red-500 text-sm text-center font-medium mt-4">
                  {errors.phone_number.message}
                </p>
              )}
            </div>
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                autoComplete="userMail"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z]{2,}[^@]*@[^@]+\.[^@ .]{2,}$/,
                    message: `Enter a valid email address e.g:user.name@domain.com`,
                  },
                })}
                className="w-full text-base rounded-lg border-gray-200 px-2 py-3 lg:p-4  shadow-sm outline-none"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm text-center font-medium mt-4">
                  {errors.email.message}
                </p>
              )}
            </div>
            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="w-full bg-white rounded-lg border-gray-200 px-2 py-3 lg:p-4 text-base shadow-sm flex items-center justify-between "
              >
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="new-password"
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value:
                        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/,
                      message:
                        "Password must contain at least one uppercase letter, one number, and one special character",
                    },
                  })}
                  className="outline-none text-base w-4/5"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="ml-2 text-gray-500 focus:outline-none"
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </label>
              {errors.password && (
                <p className="text-red-500 text-sm text-center font-medium mt-4">
                  {errors.password.message}
                </p>
              )}
            </div>
            {/* Confirm Password Field */}
            <div>
              <label
                htmlFor="password2"
                className="w-full bg-white rounded-lg border-gray-200 px-2 py-3 lg:p-4 text-sm shadow-sm flex items-center justify-between"
              >
                <input
                  type={showPassword ? "text" : "password"}
                  id="password2"
                  {...register("password2", {
                    required: "Confirm Password is required",
                    validate: (value, data) =>
                      value === data.password || "Passwords must match",
                  })}
                  className="outline-none text-base w-4/5"
                  placeholder="Confirm password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="ml-2 text-gray-500 focus:outline-none text-base"
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </label>
              {errors.password2 && (
                <p className="text-red-500 text-sm text-center font-medium mt-4">
                  {errors.password2.message}
                </p>
              )}
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              disabled={
                isLoading ||
                errors.full_name ||
                errors.password2 ||
                errors.password ||
                errors.email ||
                errors.phone_number
              } // Disable if loading
              className={`inline-flex w-full rounded-lg ${
                isLoading
                  ? "bg-white text-white "
                  : ` ${
                      errors.full_name ||
                      errors.password2 ||
                      errors.password ||
                      errors.email ||
                      errors.phone_number
                        ? "bg-primary bg-opacity-5 cursor-not-allowed text-white text-opacity-60  "
                        : "bg-primary text-white hover:bg-secondary duration-150 transition-all"
                    } `
              } px-5 py-3 text-sm lg:text-base font-semibold text-white justify-center items-center`}
            >
              {isLoading ? (
                <ImSpinner9 className="animate-spin text-3xl text-secondary" />
              ) : (
                " Sign Up"
              )}
            </button>
          </form>
        </div>
        <div className="mx-auto pb-10 lg:pb-0 w-full text-center lg:w-4/5 lg:ml-auto">
          <p
            className={`  text-sm  ${
              alreadyAv
                ? "text-secondary font-bold  underline"
                : "text-gray-500"
            }`}
          >
            Already have an account {alreadyAv ? "" : " ? "}
            <button
              onClick={toggleForm}
              className="underline mx-1 text-primary"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
