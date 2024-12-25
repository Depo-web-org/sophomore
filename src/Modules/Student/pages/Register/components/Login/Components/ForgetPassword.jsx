import { ImSpinner9 } from "react-icons/im";
import { HeadTitle } from "../Login";
import { MdAlternateEmail } from "react-icons/md";

export default function ForgetPassword({
  register,
  handleSubmit,
  ResponseError,
  errorsForm,
  handleForgetPassword,
  setForgetPassword,
  loadingSending,
}) {

  return (
    <div className="flex flex-col items-start gap-8 justify-center lg:gap-24 slide-in-right min-h-screen w-full 2xl:w-4/5 mr-auto">
     <div className="w-full -mt-20"> 
     <HeadTitle
        title={{
          head: "Forget Password?",
          subTitle: "Please write your email",
        }}
      />
     </div>
      <div className="w-full  ">
        <form
          onSubmit={handleSubmit(handleForgetPassword)}
          className="w-full space-y-4 flex flex-col gap-4 pb-8 border-b border-gray-600"
        >
          <div>
            <div className="relative  ">
                          <label
                            htmlFor="loginMail"
                            className={`w-full bg-white rounded-lg  ${
                              errorsForm?.loginMail &&
                              "border-2 border-red-600 "
                            }  p-4 text-sm shadow-sm flex items-center justify-between`}
                          >
                            <input
                              id="loginMail"
                              className="outline-none flex-1"
                               // className={`w-full rounded-lg  ${errorsForm?.loginMai?  "outline-red-600":  "  outline-none"} p-4 pe-12 text-sm shadow-sm `}
                              placeholder="Enter email"
                              {...register("loginMail", {
                                required: `Email is required`,
                                pattern: {
                                  value:
                                    /^[a-zA-Z0-9._%+-]{4,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                  message: `Please enter a valid email address.  e.g: user.name@domain.com `,
                                 },
                               })}
                             />
                             <MdAlternateEmail className="ml-2 text-gray-500 focus:outline-none" />
                           </label>
                           {errorsForm?.loginMail && (
                             <p className="text-red-500 text-sm mt-4 text-center font-medium">
                               {errorsForm?.loginMail.message}
                             </p>
                           )}
                         </div>
          </div>

          <button
            type="submit"
            disabled={loadingSending || errorsForm.loginMail } 
            className={`inline-flex w-full rounded-lg ${
              loadingSending ? "bg-white text-white " : ` ${errorsForm.loginMail ? "bg-primary bg-opacity-5 text-white cursor-not-allowed text-opacity-60  ": "bg-primary text-white hover:bg-secondary duration-150 transition-all" } `
            } px-5 py-3 text-sm font-medium  justify-center items-center`}
          >
            {loadingSending ? (
              <ImSpinner9 className="animate-spin text-3xl text-secondary " />
            ) : (
              "Send OTP"
            )}
          </button>
        </form>
        {
          ResponseError&& <div className="w-full mt-4 ">
          <p   className=" px-2 text-secondary text-sm text-center font-semibold underline ">

          {ResponseError}
          </p>
        </div>
        }
       
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
