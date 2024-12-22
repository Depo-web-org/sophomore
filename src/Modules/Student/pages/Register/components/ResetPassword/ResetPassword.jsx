import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { HeadTitle } from '../Login/Login';
import { ImSpinner9 } from 'react-icons/im';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import axios from 'axios';

const ResetPassword = () => {
  const { userMail } = useParams(); // Get encoded email from the URL
  const navigate = useNavigate();
  
  const [showPassword, setShowPassword] = useState(false);
  const [loadingSending, setLoadingSending] = useState(false);

  const { handleSubmit, control, setFocus, register } = useForm({
    defaultValues: {
      otp_code: ["", "", "", "", "", ""],
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const onSubmit = async (data) => {
    setLoadingSending(true)
    const otp_code = data.otp_code.join("");
    const dataSend = {
      otp_code,
      password: data.password,
      password2: data.password2
    };

    console.log(dataSend);
    
    axios.post('http://192.168.1.26:8000/api/v1/verify-email/', dataSend).then(()=>setLoadingSending(false) ).catch(err =>{
      console.log(err .request.statusText)
     setLoadingSending(false)
    }) 
  };

  const handleInput = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < 5) {
      setFocus(`otp_code[${index + 1}]`);
    } else if (!value && index > 0) {
      setFocus(`otp_code[${index - 1}]`);
    }
  };

  const handlePaste = (e, setValue) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    if (/^\d{6}$/.test(text)) {
      text.split("").forEach((digit, i) => setValue(`otp_code[${i}]`, digit));
      setFocus("otp_code[5]");
    }
  };

  return (
    <div className="container w-full pt-16 md:w-custom-md xl:w-custom-xl mx-auto min-h-screen flex justify-between items-start gap-4 overflow-hidden">
      <div className="flex flex-col items-start gap-8 w-full slide-in-left">
        <div className="">
          <HeadTitle
            title={{
              head: 'Check Your Mail for otp_code',
              // subTitle: `Email: ${decodedEmail}`,
            }}
          />
        </div>
        <div className="w-full">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
            <div className="flex justify-center items-center gap-8 text-white text-center text-2xl w-4/5 mx-auto">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <Controller
                  key={index}
                  name={`otp_code[${index}]`}
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <input
                      ref={ref}
                      type="text"
                      value={value}
                      maxLength="1"
                      className=" w-full lg:w-4/5 mx-auto bg-transparent border-b-[1px] ring-0 outline-none font-bold"
                      onChange={(e) => {
                        onChange(e.target.value);
                        handleInput(e, index);
                      }}
                      onFocus={(e) => e.target.select()}
                      onPaste={(e) => handlePaste(e, onChange)}
                    />
                  )}
                />
              ))}
            </div>
            <div className="mt-8 mb-4">
              <label
                htmlFor="password"
                className="w-full lg:w-4/5 mx-auto bg-white rounded-lg border-gray-200 p-4 text-sm shadow-sm flex items-center justify-between mt-6 mb-4"
              >
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className="outline-none flex-1"
                  placeholder="Enter New password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="ml-2 text-gray-500 focus:outline-none"
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </label>
              <label
                htmlFor="password2"
                className=" w-full lg:w-4/5 mx-auto bg-white rounded-lg border-gray-200 p-4 text-sm shadow-sm flex items-center justify-between mt-2"
              >
                <input
                  type={showPassword ? "text" : "password"}
                  id="password2"
                  {...register("password2", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className="outline-none flex-1"
                  placeholder="Confirm password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="ml-2 text-gray-500 focus:outline-none"
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </label>
            </div>
            <button
              type="submit"
              disabled={loadingSending}
              className={`inline-flex rounded-lg ${loadingSending ? "bg-white" : 'bg-primary'}  w-full lg:w-4/5 mx-auto py-3 text-sm font-medium text-white justify-center items-center mt-8`}
            >
              {loadingSending ? <ImSpinner9 className="animate-spin text-3xl text-secondary" /> : "Reset"}
            </button>
          </form>
        </div>
      </div>

      <img
        src="/register/login.webp"
        alt="register img"
        className="hidden lg:block min-h-[calc(100vh-112px)] lg:max-w-[420px] xl:max-w-[580px] slide-in-right object-cover rounded-xl z-10"
      />
    </div>
  );
};

export default ResetPassword;
