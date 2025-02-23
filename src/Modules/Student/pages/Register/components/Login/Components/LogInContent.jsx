import { ImSpinner9 } from "react-icons/im";
import { HeadTitle } from "../Login";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import UserRole from "../../components/UserRole/UserRole";
import { MdAlternateEmail } from "react-icons/md";
import "../../style/animation.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function LogInContent({
  register,
  handleSubmit,
  errorsForm,
  handleLogin,
  ResponseError,
  setForgetPassword,
  toggleForm,
  loadingSending,
  VerifyAccount,
}) {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const { role } = useSelector((state) => state.role);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-start  gap-8 lg:gap-10 w-full 2xl:w-4/5 me-auto slide-in-right">
      <div className="lg:mt-20 w-full">
        <HeadTitle
          title={{
            head: t("login.welcomeBack"),
            subTitle: t("login.loginToAccount"),
          }}
        />
      </div>
      {/* Condition here  */}
      <div className="w-full">
        <form
          action="#"
          onSubmit={handleSubmit(handleLogin)}
          className="mb-0 mt-0 lg:mt-8 w-full flex flex-col gap-y-2 lg:gap-4"
        >
          <UserRole role={role} dispatch={dispatch} />

          <div className="mt-4 pt-4 ">
            <div className="relative">
              <label
                htmlFor="loginMail"
                className={`w-full bg-white rounded-lg ${
                  errorsForm.loginMail && "border-2 border-red-600"
                } px-2 py-3 lg:p-4 text-sm shadow-sm flex items-center justify-between`}
              >
                <input
                  id="loginMail"
                  className="outline-none flex-1 text-base"
                  autoComplete="userMail"
                  placeholder={t("login.enterEmail")}
                  {...register("loginMail", {
                    required: t("login.emailRequired"),
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]{4,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: t("login.validEmail"),
                    },
                  })}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      // setForgetPassword(false);
                    }
                  }}
                />

                <MdAlternateEmail className="ml-2 text-gray-500 focus:outline-none" />
              </label>
              {errorsForm.loginMail && (
                <p className="text-red-500 text-sm mt-4 text-center font-medium">
                  {errorsForm.loginMail.message}
                </p>
              )}
            </div>
          </div>

          <div className="my-4 ">
            <div className="relative">
              <label
                htmlFor="password"
                className={`w-full bg-white rounded-lg ${
                  errorsForm.password && "border-2 border-red-600"
                } px-2 py-3 lg:p-4 text-sm shadow-sm flex items-center justify-between`}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="new-password"
                  {...register("password", {
                    required: t("login.passwordRequired"),
                    pattern: {
                      value:
                        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&#])[A-Za-z\d@$!%*?&#]{6,}$/,
                      message: t("login.passwordPattern"),
                    },
                  })}
                  className="outline-none w-4/5 text-base"
                  placeholder={t("login.enterPassword")}
                />

                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="ml-2 text-gray-500 focus:outline-none"
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </label>
              {errorsForm.password && (
                <p className="text-red-500 text-sm mt-4 text-center font-medium">
                  {errorsForm.password.message}
                </p>
              )}
            </div>
          </div>

          {errorsForm && (
            <p className="text-sm text-red-500 text-center font-semibold">
              {errorsForm?.data?.detail}
            </p>
          )}

          <div className="flex items-end justify-center flex-wrap gap-4 mt-0 lg:-mt-4">
            <button
              onClick={() => setForgetPassword(true)}
              className="inline-block border-b-2 text-sm font-medium text-white capitalize"
            >
              {t("login.forgetPassword")}
            </button>
          </div>

          <button
            type="submit"
            disabled={
              loadingSending || errorsForm.loginMail || errorsForm.password
            }
            className={`inline-flex w-full rounded-lg ${
              loadingSending
                ? "bg-white text-white"
                : `${
                    errorsForm.loginMail || errorsForm.password
                      ? "bg-primary bg-opacity-5 text-white cursor-not-allowed text-opacity-60"
                      : "bg-primary text-white hover:bg-secondary duration-150 transition-all"
                  }`
            } px-5 py-3 text-sm lg:text-base font-semibold text-white justify-center items-center`}
          >
            {loadingSending ? (
              <ImSpinner9 className="animate-spin text-3xl text-secondary" />
            ) : (
              t("login.logIn")
            )}
          </button>
        </form>
      </div>
      {ResponseError && (
        <div className="w-full -mb-5">
          <p className="px-2 text-secondary text-sm text-center font-semibold">
            {ResponseError}
          </p>
        </div>
      )}

      {/* Link To Navigate to verify account */}
      {ResponseError === t("login.accountNotVerified") && (
        <div className="w-full flex justify-center">
          <button
            // onClick={() => VerifyAccount()}
            className="text-base font-semibold text-white text-center underline"
          >
            {t("login.verifyAccountNow")}
          </button>
        </div>
      )}
      {/* Link To Navigate to verify account */}

      <div className="w-full">
        <p className="text-sm text-gray-500 text-center">
          {t("login.noAccount")}
          <button
            onClick={toggleForm}
            className="underline px-2 text-secondary"
            href="#"
          >
            {t("login.signUp")}
          </button>
        </p>
      </div>
    </div>
  );
}
