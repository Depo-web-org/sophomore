import { ImSpinner9 } from "react-icons/im";
import { HeadTitle } from "../Login";

export default function ForgetPassword({
  register,
  handleSubmit,
  errors,
  handleOtp,
  setForgetPassword,
  loadingSending
}) {
  return (
    <div className="flex flex-col items-start gap-8 lg:gap-24 w-full slide-in-right">
      <HeadTitle
        title={{
          head: "Forget Password?",
          subTitle: "Please write your email",
        }}
      />
      <div className="w-full">
        <form
          onSubmit={handleSubmit(handleOtp)} 
          className="w-full space-y-4 flex flex-col gap-4 pb-8 border-b border-gray-600"
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
                {...register("email", { required: "Email is required" })}
              />
              {errors?.email && (
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
          <button
                          type="submit"
                      disabled={loadingSending}
                          className={`inline-flex w-full rounded-lg ${loadingSending ? "bg-white" : 'bg-primary'} px-5 py-3 text-sm font-medium text-white  justify-center items-center`}
                        >
                          {loadingSending? <ImSpinner9 className="animate-spin text-3xl text-secondary " /> : "    Send OTP"}
                        </button>
        </form>
        {/* loadingSending */}
        <div className="w-full flex justify-center mt-4">
          <button
            onClick={() => setForgetPassword(false)}
            className="text-secondary underline font-bold text-lg lg:text-xl"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
