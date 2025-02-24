import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import LoadingAnimation from "./loadingAnimation";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import ar from "../../../../../../public/locales/countrysAr.json";
import en from "../../../../../../public/locales/countrysEn.json";
const FormContact = ({ Style, form, btnbuttom }) => {
  const {
    handleSubmit,
    register,
    reset,
    setValue,
    control,
    clearErrors,
    setError,
    formState: { errors },
  } = useForm();

  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [isSubmitted, setisSubmitted] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [messageValue, setMessageValue] = useState("");
  const [messageLength, setMessageLength] = useState(0);
  const [phoneValue] = useState("");
  const recaptcha = useRef(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setValue("phone", phoneValue);
  }, [phoneValue, setValue]);

  // lang country
  let countryOptions;
  if (i18n.language === "en") {
    countryOptions = en;
  } else {
    countryOptions = ar;
  }

  const onSubmit = async (data, e) => {
    setisSubmitted(true);
    e.preventDefault();
    const recaptchaValue = recaptcha?.current?.getValue();
    if (!recaptchaValue) {
      return;
    }
    setisLoading(true);

    try {
      await axios.post(`https://dev.depowebeg.com/request.php`, data);

      toast.success(t("toast"));

      reset();
      setMessageValue(" ");
    } catch {
      console.log("Something went wrong, please try again");
    } finally {
      setisLoading(false);
    }
  };

  return (
    <section className="pt-4 text-white" dir="rtl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        action="submit"
        className="p-2 lg:p-10 xl:p-20 flex flex-col gap-y-5"
      >
        {/* First Name and Last Name Fields */}
        <div className="flex flex-col lg:flex-row justify-between lg:gap-4">
          <label
            htmlFor="first-name"
            className="w-full lg:w-1/2 cursor-pointer text-slate-100 flex flex-col"
          >
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

          <label
            htmlFor="last-name"
            className="w-full lg:w-1/2 cursor-pointer text-slate-100 flex flex-col"
          >
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
          <label
            htmlFor="user-mail"
            className="h-10 w-full mb-12 lg:mb-0 lg:w-1/2 cursor-pointer text-slate-100 flex flex-col"
          >
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
              className="bg-white rounded-[5px] active:outline-primary outline-primary   placeholder:text-gray-400 p-[10px] text-gray-400"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </label>
          {/* phone  */}
          <label
            htmlFor="user-phone"
            className="h-10 w-full lg:w-1/2 cursor-pointer text-slate-100 flex flex-col  placeholder:text-center"
          >
            {t("formContact.phone")}
            <Controller
              name="phone"
              control={control}
              rules={{ required: t("formContact.phoneError") }}
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  id="user-phone"
                  placeholder={t("formContact.phonePlaceholder")}
                  defaultCountry="EG"
                  labels={countryOptions}
                  className="bg-white border rounded w-full p-2"
                  onChange={(value) => field.onChange(value)}
                />
              )}
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </label>
        </div>

        {/* text areaa */}
        <label
          htmlFor="user-message"
          className="w-full cursor-pointer mt-16 text-white flex flex-col"
        >
          {t("formContact.message")}
          <textarea
            {...register("message", {
              required: `${t("formContact.messageError.required")}`,
              validate: {
                noLeadingSpaces: (value) =>
                  !/^\s/.test(value) ||
                  `${t("formContact.messageError.required")}`,
              },
            })}
            id="user-message"
            className={`${Style}  ${
              messageLength >= 500
                ? "active:outline-red-500 outline-red-500"
                : "active:outline-primary outline-primary "
            } resize-none scrollbar-hide placeholder:text-gray-400 my-[6px] Shadowinpuut rounded-[5px] p-[10px] text-gray-800`}
            placeholder={t("formContact.messagePlaceholder")}
            value={messageValue}
            onChange={(e) => {
              const value = e.target.value;

              if (value.length > 500) {
                setError("message", {
                  type: "maxLength",
                  // message: t("Contact.Left Side.textarea-numberOfWords"),
                });
              } else {
                clearErrors("message");
                setMessageValue(value);
                setMessageLength(value.length);
              }
            }}
          ></textarea>

          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}

          <span className="text-right  ">
            {messageLength >= 500
              ? ` ${t("formContact.textarea-numberOfWords")}`
              : `${messageLength}  ${t("formContact.textarea-numberUsed")}`}
          </span>
        </label>

        {/* ReCAPTCHA */}
        <div className="recaptcha-dir pt-4">
          <ReCAPTCHA
            key={i18n.language}
            ref={recaptcha}
            sitekey="6Lcl6YEqAAAAANdKLVZywDSMl7iLTh24k9QaXGnu"
            hl={i18n.language === "ar" ? "ar" : "en"}
            onChange={(value) => setRecaptchaValue(value)}
          />
        </div>
        {isSubmitted && !recaptchaValue && (
          <span className="text-red-500 block">
            {t("formContact.recaptchaError")}
          </span>
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
    </section>
  );
};

export default FormContact;
