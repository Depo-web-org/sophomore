import { useForm } from "react-hook-form";
import axios from "axios";
import { useRef, useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import LoadingAnimation from "./loadingAnimation";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";

const FormContact = () => {
  const { t } = useTranslation();
  const location_URL = window.location.href.split('/contact')[0];
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState();
  const [phoneValue, setPhoneValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const recaptcha = useRef();
  const messageLength =
    messageValue?.trim().split(/\s+/).filter(Boolean).length || 0;

  const sendDataToBackend = async (data, recaptchaValue) => {
    if (phoneValue?.length >= 10 && recaptchaValue) {
      setIsLoading(true);
      const formData = { ...data, phone: phoneValue };
      await axios
        .post(`${location_URL}/api/api/form`, formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => setResponse(t("formContact.successMessage")))
        .then(() => {
          reset();
          recaptcha.current.reset();
          setPhoneValue("");
          setMessageValue("");
          setIsSubmitted(false);
        })
        .catch(() => setResponse(t("formContact.errorMessage")))
        .finally(() => {
          setIsLoading(false);
          setTimeout(() => {
            setResponse(null);
          }, 5000);
        });
    } else {
      setResponse(t("formContact.errorMessage"));
    }
  };

  const disableCopyPasteCut = (e) => {
    e.preventDefault();
  };

  const handleFormSubmit = async (e) => {
    setIsSubmitted(true);
    e.preventDefault();
    const recaptchaValue = recaptcha?.current?.getValue();
    if (!recaptchaValue) {
      return;
    }
    await handleSubmit((data) => sendDataToBackend(data, recaptchaValue))(e);
  };

  return (
    <section className="pt-4 text-white" dir="rtl">
      <form onSubmit={handleFormSubmit} action="submit" className="p-2 lg:p-10 xl:p-20 flex flex-col gap-y-5">
        {/* First Name and Last Name Fields */}
        <div className="flex flex-col lg:flex-row justify-between lg:gap-4">
          <label htmlFor="first-name" className="w-full lg:w-1/2 cursor-pointer text-slate-100 font-medium flex flex-col">
            {t("formContact.firstName")}
            <input
              {...register("firstName", {
                required: t("formContact.firstNameError.required"),
                pattern: {
                  value: /^[a-zA-Z]{2,20}$/,
                  message: t("formContact.firstNameError.pattern"),
                },
              })}
              id="first-name"
              type="text"
              placeholder={t("formContact.firstNamePlaceholder")}
              className="bg-white rounded-[5px] my-[6px] active:outline-primary outline-primary placeholder:text-gray-400 p-[10px] text-gray-400"
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
          </label>

          <label htmlFor="last-name" className="w-full lg:w-1/2 cursor-pointer text-slate-100 font-medium flex flex-col">
            {t("formContact.lastName")}
            <input
              {...register("lastName", {
                required: t("formContact.lastNameError.required"),
                pattern: {
                  value: /^[a-zA-Z]{2,20}$/,
                  message: t("formContact.lastNameError.pattern"),
                },
              })}
              id="last-name"
              type="text"
              placeholder={t("formContact.lastNamePlaceholder")}
              className="bg-white rounded-[5px] my-[6px] active:outline-primary outline-primary placeholder:text-gray-400 p-[10px] text-gray-400"
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName.message}</p>
            )}
          </label>
        </div>

        {/* Email and Phone Fields */}
        <div className="flex flex-col lg:flex-row items-center lg:gap-4">
          <label htmlFor="user-mail" className="h-10 w-full mb-12 lg:mb-0 lg:w-1/2 cursor-pointer text-slate-100 font-medium flex flex-col">
            {t("formContact.email")}
            <input
              {...register("email", {
                required: t("formContact.emailError.required"),
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: t("formContact.emailError.pattern"),
                },
              })}
              id="user-mail"
              type="email"
              placeholder={t("formContact.emailPlaceholder")}
              className="bg-white rounded-[5px] active:outline-primary outline-primary placeholder:text-gray-400 p-[10px] text-gray-400"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </label>

          <label htmlFor="user-phone" className="h-10 w-full lg:w-1/2 cursor-pointer text-slate-100 font-medium flex flex-col">
            {t("formContact.phone")}
            <PhoneInput
              international
              id="user-phone"
              placeholder={t("formContact.phonePlaceholder")}
              value={phoneValue}
              onChange={setPhoneValue}
              defaultCountry="EG"
              className="bg-white w-full rounded-[5px] active:outline-primary outline-primary placeholder:text-gray-400 p-[10px] text-gray-400"
            />
            {isSubmitted && !isValidPhoneNumber(`${phoneValue?.toString()}`) && (
              <p className="text-red-500">{t("formContact.phoneError")}</p>
            )}
          </label>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="user-message" className="w-full cursor-pointer mt-5 text-slate-100 font-medium flex flex-col">
            {t("formContact.message")}
            <textarea
              {...register("message", {
                required: t("formContact.messageError.required"),
                validate: {
                  noLeadingSpaces: (value) =>
                    !/^\s/.test(value) || t("formContact.messageError.noLeadingSpaces"),
                },
              })}
              id="user-message"
              className={`h-60 ${
                messageLength >= 500
                  ? "active:outline-red-500 outline-red-500"
                  : "active:outline-primary outline-primary"
              } resize-none scrollbar-hide placeholder:text-gray-400 my-[6px] rounded-[5px] p-[10px] text-gray-400`}
              placeholder={t("formContact.messagePlaceholder")}
              value={messageValue}
              onChange={(e) =>
                e.target.value.length <= 500 && setMessageValue(e.target.value)
              }
              onCopy={disableCopyPasteCut}
              onPaste={disableCopyPasteCut}
              onCut={disableCopyPasteCut}
            ></textarea>
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}
          </label>
        </div>

        {/* ReCAPTCHA */}
        <div className="recaptcha-dir">
          <ReCAPTCHA ref={recaptcha} sitekey="6Lcl6YEqAAAAANdKLVZywDSMl7iLTh24k9QaXGnu" />
        </div>
        {isSubmitted && !recaptcha?.current?.getValue() && (
          <span className="text-red-500 block">{t("formContact.recaptchaError")}</span>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="bg-primary w-full rounded-[5px] text-white px-8 py-4 font-bold transition-colors ease-out duration-300 hover:bg-primary-hover"
        >
          {isLoading ? <LoadingAnimation /> : t("formContact.submitButton")}
        </button>
      </form>

      {response != null && (
        <p className="mt-2 text-white font-bold">{response}</p>
      )}
    </section>
  );
};

export default FormContact;