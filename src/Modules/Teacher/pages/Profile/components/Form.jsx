import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useChange_passwordMutation } from "../../../../../Redux/Auth/authApiSlice";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { ImSpinner9 } from "react-icons/im";
import { useSelector } from "react-redux";
import Alert from "../../../../Student/pages/Profile/components/Alerts/Alert";
import useChangePassword from "../../../../../Hooks/UseChangePassword";
import { useTranslation } from "react-i18next";

const Form = () => {
  const { t, i18n } = useTranslation();
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const role = useSelector((state) => state.role.role);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success"); // "success" or "error"
  const [alertMessage, setAlertMessage] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleShowAlert = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  // Hook For Change Password
  const { submitChangePassword, isLoading, isError } = useChangePassword({
    role,
    handleShowAlert,
    reset,
  });

  // Submit
  const onSubmit = async (data) => {
    const response = await submitChangePassword(data).then((response) => {
      if (response?.code === 0) {
        setShowAlert(true)
      } else if (response?.code === 1) {
        setShowAlert(true)
        handleShowAlert("error", t("changePassword.error"));
      }
        
      })
  };

  return (
    <div className="my-4 lg:my-16 sm:mt-10 px-5 lg:px-0">
      {/* Success Alert */}
      {/* {showAlert || alertType === "success" && (
        <Alert
          Name={t("changePassword.success")}
          title={t("changePassword.successMessage")}
          color={"text-green-600"}
          showAlert={showAlert}
          setShowAlert={setShowAlert}
        />
      )} */}
       <Alert
          Name={t("changePassword.success")}
          title={t("changePassword.successMessage")}
          color={"text-green-600"}
          showAlert={showAlert}
          setShowAlert={setShowAlert}
        />

      {/* Error Alert */}
      {showAlert && alertType === "error" && (
        <Alert
          Name={t("changePassword.error")}
          title={t("changePassword.errorMessage")}
          color={"text-red-600"}
          showAlert={showAlert}
          setShowAlert={setShowAlert}
        />
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`w-full mx-auto px-4 lg:px-8 lg:w-[70%] ${
          i18n.language === "ar" ? "me-auto" : ""
        }`}
      >
        {/* Password Inputs */}
        <div className="relative pb-2 pt-5">
          <span className="text-sm font-medium text-gray-500 mb-4 block">
            {t("changePassword.currentPassword")}
          </span>
          <label
            htmlFor="old_password"
            className="bg-gray-200 rounded-lg border-gray-200 px-4 text-sm shadow-sm flex items-center justify-between"
          >
            <input
              type={showPassword ? "text" : "password"}
              id="old_password"
              {...register("old_password", {
                required: t("changePassword.required"),
                pattern: {
                  value:
                    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
                  message: t("changePassword.patternMessage"),
                },
              })}
              className="outline-none w-[90%] py-3 bg-gray-200"
              placeholder={t("changePassword.currentPasswordPlaceholder")}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="text-gray-500 focus:outline-none"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </label>
          {errors.old_password && (
            <p className="text-red-500 text-sm">{errors.old_password.message}</p>
          )}
        </div>

        <div className="relative py-2">
          <span className="text-sm font-medium text-gray-500 mb-4 block">
            {t("changePassword.newPassword")}
          </span>
          <label
            htmlFor="new_password"
            className="bg-gray-200 rounded-lg border-gray-200 px-4 text-sm shadow-sm flex items-center justify-between"
          >
            <input
              type={showPassword ? "text" : "password"}
              id="new_password"
              {...register("new_password", {
                required: t("changePassword.required"),
                pattern: {
                  value:
                    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
                  message: t("changePassword.patternMessage"),
                },
              })}
              className="outline-none w-[90%] py-3 bg-gray-200"
              placeholder={t("changePassword.newPasswordPlaceholder")}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="ml-2 text-gray-500 focus:outline-none"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </label>
          {errors.new_password && (
            <p className="text-red-500 text-sm">{errors.new_password.message}</p>
          )}
        </div>

        <div className="relative pt-4 pb-2">
          <span className="text-sm font-medium text-gray-500 mb-4 block">
            {t("changePassword.confirmPassword")}
          </span>
          <label
            htmlFor="confirm_password"
            className="bg-gray-200 rounded-lg border-gray-200 px-4 text-sm shadow-sm flex items-center justify-between"
          >
            <input
              type={showPassword ? "text" : "password"}
              id="confirm_password"
              {...register("confirm_password", {
                required: t("changePassword.required"),
                validate: (value) =>
                  value === getValues("new_password") ||
                  t("changePassword.passwordsMatch"),
              })}
              className="outline-none w-[90%] py-3 bg-gray-200"
              placeholder={t("changePassword.confirmPasswordPlaceholder")}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="ml-2 text-gray-500 focus:outline-none"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </label>
          {errors.confirm_password && (
            <p className="text-red-500 text-sm">
              {errors.confirm_password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={
            isLoading ||
            errors.old_password ||
            errors.confirm_password ||
            errors.new_password
          }
          className={`inline-flex w-full lg:w-3/5 mt-5 rounded-md px-2 py-2 text-md font-semibold transition-all duration-300 ${
            isLoading
              ? "bg-white text-white cursor-not-allowed"
              : errors.old_password ||
                errors.confirm_password ||
                errors.new_password
              ? "bg-primary bg-opacity-5 text-white text-opacity-60 cursor-not-allowed"
              : "bg-primary text-white hover:bg-secondary"
          } px-5 py-3 text-sm font-medium text-white justify-center items-center`}
        >
          {isLoading ? (
            <ImSpinner9 className="animate-spin text-3xl text-secondary" />
          ) : (
            t("changePassword.changePasswordButton")
          )}
        </button>
      </form>
    </div>
  );
};

export default Form;