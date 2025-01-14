import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { BsFillCameraFill } from "react-icons/bs";
import { isValidPhoneNumber } from "react-phone-number-input/core";
import PhoneInput from "react-phone-number-input/input";
import { useSelector } from "react-redux";
import { useUpdateProfileMutation } from "../../../../../../Redux/Auth/authApiSlice";
import { useTranslation } from "react-i18next";

export default function MyProfile() {
  const { t,i18n } = useTranslation();

  const { data } = useSelector((state) => state.userInformation);

  const [profileImage, setProfileImage] = useState(data?.profile || null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [updateProfile, { isLoading, isError, error }] =
    useUpdateProfileMutation();

  const onSubmit = async (formData) => {
    console.log("Form Submitted Data:", formData);
    try {
      const response = await updateProfile({ formData }).unwrap();
      if (response.code === 0) alert("Profile updated successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen ">
      <div className="relative bg-gradient-to-r from-secondary to-primary w-full h-48 rounded-tl-[100px] rounded-tr-lg mb-40">
        <div className="flex flex-col lg:flex-row justify-center items-center absolute -bottom-[75%] lg:-bottom-[45%] left-1/2 -translate-x-1/2 xl:translate-x-0 xl:left-[5%] w-full">
          <img
            className="border-2 border-white w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover"
            src={profileImage || "/images/default-profile.png"}
            alt="profile"
          />
          <div className="text-center lg:text-left text-white mt-4 lg:mt-0 lg:ml-6">
            <p className="font-bold text-lg">{data?.name || "Your Name"}</p>
            <span className="text-mainGray text-sm">
              {t("profile.updatePassword")}
            </span>
          </div>
        </div>
      </div>


      <form  
        onSubmit={handleSubmit(onSubmit)}
    
        className={`px-4 lg:px-8 lg:w-[70%] ${i18n.language ===  "ar" ?  "ms-auto" :"mx-auto"}`}
      >
        {/* Name Fields */}
        <div className="flex flex-col sm:flex-row gap-4 mb-5">
          <div className="w-full">
            <label
              htmlFor="first_name"
              className="block text-gray-700 font-medium"
            >
              {t("profile.firstName")}
            </label>
            <input
              type="text"
              id="first_name"
              {...register("first_name", {
                required: "First Name is required",
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "First Name must contain only letters",
                },
              })}
              className="w-full px-4 py-2 mt-2 border rounded-lg shadow-sm focus:ring focus:ring-primary focus:outline-none"
              placeholder={t("profile.firstName")}
            />
            {errors.first_name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.first_name.message}
              </p>
            )}
          </div>

          <div className="w-full">
            <label
              htmlFor="last_name"
              className="block text-gray-700 font-medium"
            >
              {t("profile.lastName")}
            </label>
            <input
              type="text"
              id="last_name"
              {...register("last_name", {
                required: "Last Name is required",
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "Last Name must contain only letters",
                },
              })}
              className="w-full px-4 py-2 mt-2 border rounded-lg shadow-sm focus:ring focus:ring-primary focus:outline-none"
              placeholder={t("profile.lastName")}
            />
            {errors.last_name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.last_name.message}
              </p>
            )}
          </div>
        </div>

        {/* Phone Number */}
        <div className="mb-5">
          <label
            htmlFor="phone_number"
            className="block text-gray-700 font-medium"
          >
            {t("profile.phoneNumber")}
          </label>
          <Controller
            name="phone_number"
            control={control}
            rules={{
              validate: (value) => (value ? true : "Phone number is required"),
            }}
            render={({ field }) => (
              <PhoneInput
                {...field}
                id="phone_number"
                placeholder={t("profile.phoneNumber")}
                defaultCountry="EG"
                className="w-full px-4 py-2 mt-2 border rounded-lg shadow-sm focus:ring focus:ring-primary focus:outline-none"
              />
            )}
          />

          {errors.phone_number && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phone_number.message}
            </p>
          )}
        </div>

        {/* Profile Image Upload */}
        <div className="mb-5 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center gap-4">
            <label
              htmlFor="upload"
              className="flex items-center gap-2 text-primary cursor-pointer font-medium"
            >
              <BsFillCameraFill className="text-lg" />
              {t("profile.uploadPhoto")}
            </label>
            <input
              type="file"
              id="upload"
              accept="image/*"
              className="hidden"
              {...register("profile_image")}
            />
          </div>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <button
              type="button"
              className="text-red-500 font-medium"
              onClick={() => setProfileImage(null)}
            >
              {t("profile.delete")}
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-primary text-white rounded-lg font-medium shadow"
            >
              {t("profile.save")}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
