import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { ImSpinner9 } from "react-icons/im";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useGetOTpMutation,  useSignupMutation,} from "../../../../../../Redux/Auth/authApiSlice";
import { HeadTitle } from "../Login/Login";
import { useDispatch, useSelector } from "react-redux";
import UserRole from "../components/UserRole/UserRole";
import { useTranslation } from "react-i18next";

export default function SignUp({ toggleForm, handleSendOtp, setMail }) {
  const { t } = useTranslation();

  const [requestEndPoints, setRequestEndPoints] = useState("student");

  const role = useSelector((state) => state.role.role);

  const dispatch = useDispatch();

  const [alreadyAv, setAlreadyAv] = useState(false);

  // Redux Toolkit's useSignupMutation hook
  const [ getOTp] = useGetOTpMutation();
  
  const [signup, { isLoading, isError, error }] = useSignupMutation();
  const {  register, handleSubmit,  control, formState: { errors }, } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
const [errorSubmit, setErrorSubmit] = useState(null)
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
    };

    if (provider) {
      payload.provider = provider;
    }
    console.log("Data to Send:", payload);
    setMail( data.email)
    try {
     const response= await signup({ userData: payload }).unwrap()
        if(response.code === 0){
          handleSendOtp();
        }else if(response.code ===1){
          ResendOTP(data, handleSendOtp, setAlreadyAv);
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
    const provider = role === "teacher" ? true : false;
    try {
      await  getOTp({ email: data.email }).unwrap();
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
    <div className="min-h-[calc(100vh-112px)] flex flex-col gap-8 lg:gap-12 justify-between w-full pb-4">
      <div className="flex flex-col items-start gap-6 w-full 2xl:w-4/5 ml-auto">
        <HeadTitle
          title={{
            head: t("form.title"),  
            subTitle: t("form.subTitle"), 
          }}
        />
        <div className="w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mb-0 w-full space-y-4 flex flex-col gap-2 lg:gap-5"
          >
            {/* First Name Field */}
            <div className="flex gap-2 flex-wrap">
              <label
                htmlFor="first_name"
                className="w-[calc(50%-8px)] bg-white rounded-lg border-gray-200 px-2 py-3 lg:p-4 text-sm shadow-sm flex items-center justify-between"
              >
                <input
                  type="text"
                  id="first_name"
                  {...register("first_name", {
                    required: t("form.fields.firstName.error.required"),  
                    pattern: {
                      value: /^[a-zA-Z]+$/,
                      message: t("form.fields.firstName.error.invalid"),  
                    },
                  })}
                  className="outline-none text-base w-full"
                  placeholder={t("form.fields.firstName.placeholder")} 
                />
              </label>

              {/* Last Name Field */}
              <label
                htmlFor="last_name"
                className="w-[calc(50%-8px)] bg-white rounded-lg border-gray-200 px-2 py-3 lg:p-4 text-sm shadow-sm flex items-center justify-between"
              >
                <input
                  type="text"
                  id="last_name"
                  {...register("last_name", {
                    required: t("form.fields.lastName.error.required"),  
                    pattern: {
                      value: /^[a-zA-Z]+$/,
                      message: t("form.fields.lastName.error.invalid"), 
                    },
                  })}
                  className="outline-none text-base w-full"
                  placeholder={t("form.fields.lastName.placeholder")}  
                />
              </label>

              {/* Display Errors */}
              {errors.first_name || errors.last_name ? (
                <div className="flex justify-evenly w-full">
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
              ) : null}
            </div>

            {/* Phone Number Field */}
            <div>
              <label htmlFor="phone_number" className="sr-only">
                {t("form.fields.phoneNumber.label")}  
              </label>
              <Controller
                name="phone_number"
                control={control}
                rules={{
                  validate: (value) =>
                    (value && isValidPhoneNumber(value)) ||
                    t("form.fields.phoneNumber.error.invalid"), 
                }}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    id="phone_number"
                    placeholder={t("form.fields.phoneNumber.placeholder")}  
                    defaultCountry="EG"
                    className="w-full text-base bg-white px-2 py-3 lg:p-4 rounded-lg border-gray-200 shadow-sm outline-none focus-visible:outline-none"
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
                {t("form.fields.email.label")}  
              </label>
              <input
                id="email"
                autoComplete="userMail"
                {...register("email", {
                  required: t("form.fields.email.error.required"),  
                  pattern: {
                    value: /^[a-zA-Z]{2,}[^@]*@[^@]+\.[^@ .]{2,}$/,
                    message: t("form.fields.email.error.invalid"), 
                  },
                })}
                className="w-full text-base rounded-lg border-gray-200 px-2 py-3 lg:p-4 shadow-sm outline-none"
                placeholder={t("form.fields.email.placeholder")}  
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
                className="w-full bg-white rounded-lg border-gray-200 px-2 py-3 lg:p-4 text-base shadow-sm flex items-center justify-between"
              >
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="new-password"
                  {...register("password", {
                    required: t("form.fields.password.error.required"),  
                    pattern: {
                      value:
                        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/,
                      message: t("form.fields.password.error.invalid"),  
                    },
                  })}
                  className="outline-none text-base w-4/5"
                  placeholder={t("form.fields.password.placeholder")}  
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
                    required: t("form.fields.confirmPassword.error.required"),  
                    validate: (value, data) =>
                      value === data.password ||
                      t("form.fields.confirmPassword.error.mismatch"),  
                  })}
                  className="outline-none text-base w-4/5"
                  placeholder={t("form.fields.confirmPassword.placeholder")}  
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
                errors.first_name ||
                errors.last_name ||
                errors.password2 ||
                errors.password ||
                errors.email ||
                errors.phone_number
              }
              className={`inline-flex w-full rounded-lg ${
                isLoading
                  ? "bg-white text-white"
                  : `${
                      errors.first_name ||
                      errors.last_name ||
                      errors.password2 ||
                      errors.password ||
                      errors.email ||
                      errors.phone_number
                        ? "bg-primary bg-opacity-5 cursor-not-allowed text-white text-opacity-60"
                        : "bg-primary text-white hover:bg-secondary duration-150 transition-all"
                    }`
              } px-5 py-3 text-sm lg:text-base font-semibold text-white justify-center items-center`}
            >
              {isLoading ? (
                <ImSpinner9 className="animate-spin text-3xl text-secondary" />
              ) : (
                t("form.submitButton.text")  
              )}
            </button>
          </form>
        </div>

        {/* Already Have Account Section */}
        <div className="mx-auto pb-10 lg:pb-0 w-full text-center lg:w-4/5 lg:ml-auto">
          <p
            className={`text-sm ${
              alreadyAv ? "text-secondary font-bold underline" : "text-gray-500"
            }`}
          >
            {t("form.alreadyHaveAccount.text")}  
            <button
              onClick={toggleForm}
              className="underline mx-1 text-primary"
            >
              {t("form.alreadyHaveAccount.login")}  
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
