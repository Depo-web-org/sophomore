import { ImSpinner9 } from "react-icons/im";
import { HeadTitle } from "../Login";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function LogInContent({
    register,
    handleSubmit,
    errors,
    handleLogin,
    errorMessage,
    setForgetPassword,
    toggleForm,
    loadingSending

  }) {
      const [showPassword, setShowPassword] = useState(false);
      const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
      };
    return (
      <div className=" flex flex-col items-start gap-8 lg:gap-24 w-full slide-in-right b">
        <HeadTitle
          title={{
            head: "Welcome Back !",
            subTitle: "  Please login to your account",
          }}
        />
        {/* Condition here  */}
        <div className="w-full">
          <form
            action="#"
            onSubmit={handleSubmit(handleLogin)}
            className="mb-0 mt-0 lg:mt-8 w-full space-y-4 flex flex-col gap-4 lg:gap-8"
          >
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
  
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none"
                  placeholder="Enter email"
                  {...register("email", {
                    required: "email required",
                  })}
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
  
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
  
              <div className="relative">
               <label
                    htmlFor="password"
                    className="w-full bg-white rounded-lg border-gray-200 p-4 text-sm shadow-sm flex items-center justify-between"
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
  
                {/* <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
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
                </span> */}
              </div>
            </div>
            {errorMessage && (
              <p className="text-sm text-red-500">
                {" "}
                There was an error with the email or password. Please check your
                entries .{" "}
              </p>
            )}
  
            <div className="flex items-end justify-between flex-wrap gap-4">
              <label
                htmlFor="Option1"
                className="flex cursor-pointer items-start gap-2"
              >
                <div className="flex items-center">
                  &#8203;
                  <input
                    type="checkbox"
                    className="size-5 rounded border-gray-300"
                    id="rememberMe"
                  />
                </div>
  
                <div>
                  <strong className="font-normal text-sm text-white">
                    remember me (Teacher)
                  </strong>
                </div>
              </label>
  
              <button onClick={()=> setForgetPassword(true)} className="inline-block  border-b-2  text-sm font-normal text-white capitalize">
                Forget password
              </button>
            </div>
  
            <button
                type="submit"
            disabled={loadingSending}
                className={`inline-flex w-full rounded-lg ${loadingSending ? "bg-white" : 'bg-primary'} px-5 py-3 text-sm font-medium text-white  justify-center items-center`}
              >
                {loadingSending? <ImSpinner9 className="animate-spin text-3xl text-secondary " /> : " Log In"}
              </button>
          </form>
        </div>
        <div className="mx-auto  ">
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
  

