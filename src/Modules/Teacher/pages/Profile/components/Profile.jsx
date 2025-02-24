import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { BsFillCameraFill } from "react-icons/bs";
import { isValidPhoneNumber } from "react-phone-number-input/core";
import PhoneInput from "react-phone-number-input/input";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { ImSpinner9 } from "react-icons/im";
import {
  useGetProfileQuery,
  useGetProfileTeacherQuery,
} from "../../../../../Redux/data/getDataApiSlice";
import { useUpdateProfileMutation } from "../../../../../Redux/Auth/authApiSlice";
import { LoadingComponents } from "../../../../../App";
import ProfileSkeleton from "../../../../Student/pages/Profile/components/Skeleton/ProfileSkeleton";

export default function Profile() {
  const { t, i18n } = useTranslation();

  const role = useSelector((state) => state.role.role);
  const provider = role === "teacher" ? true : false;
  const {
    data,
    error: dataerror,
    isFetching,
    refetch,
    isLoading: dataLoading,
  } = useGetProfileTeacherQuery({ provider: role });

  const getProfile = async () => console.log("data profile:", data?.data);
  const student = data?.data;

  const [profileImage, setProfileImage] = useState(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [updateProfile, { isLoading, isError, error }] =
    useUpdateProfileMutation();

  const onSubmit = async (formData) => {
    const formDataToSend = new FormData();
    formDataToSend.append("first_name", formData.first_name);
    formDataToSend.append("last_name", formData.last_name);
    formDataToSend.append("phone_number", formData.phone_number);

    // إضافة provider: true إلى FormData
    formDataToSend.append("provider", true);

    // إذا تم اختيار صورة ملف شخصي، قم بإلحاقها إلى FormData
    if (profileImage) {
      formDataToSend.append("photo", profileImage);
    }

    try {
      const response = await updateProfile(formDataToSend).unwrap();
      if (response.code === 0) refetch().then(() => setProfileImage(null));
    } catch (error) {
      console.log(error);
    }
  };

  if (isFetching) {
    return <ProfileSkeleton />;
  }

  return (
    <div className=" ">
      <div className="relative bg-gradient-to-r from-secondary to-primary w-full h-48 rounded-tl-[100px] rounded-tr-lg mb-40">
        <div
          className={`flex flex-col lg:flex-row  items-center absolute -bottom-[75%] lg:-bottom-[50%] ${
            i18n.language === "en"
              ? "left-1/2 -translate-x-1/2 lg:translate-x-0  lg:left-[5%] justify-start "
              : "lg:start-10"
          } w-full `}
        >
          <img
            className="border-2 border-white w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover"
            src={
              student?.photo
                ? `https://dev.depowebeg.com${student?.path}${student?.photo}`
                : "data:image/png;base64,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"
            }
            // src={ `${student.path}${student.photo}` || 'https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg'}
            alt="profile"
          />
          <div className="text-center lg:text-left  mt-4 lg:mt-0 lg:ms-6">
            <p className="font-bold text-2xl text-black">
              {student?.first_name
                ? `${student?.first_name} ${student.last_name}`
                : "your name"}
            </p>
            <span className="text-mainGray text-sm">
              {t("profile.updateInformation")}
            </span>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        dir="ltr"
        className={`px-4 lg:px-8 lg:w-[70%] ${
          i18n.language === "ar" ? "ms-auto" : "mx-auto"
        }`}
      >
        {/* Name Fields */}

        <div
          dir={i18n.language === "ar" ? "rtl" : "ltr"}
          className="flex flex-col sm:flex-row gap-4 mb-5"
        >
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
              defaultValue={student?.first_name}
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
              defaultValue={student?.last_name}
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
            defaultValue={student?.phone_number}
            render={({ field }) => (
              <PhoneInput
                {...field}
                id="phone_number"
                placeholder={t("profile.phoneNumber")}
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
        {/* {
  !student?.phone_number
  &&         
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
} */}

        {/* Profile Image Upload */}
        <div className="mb-5 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center gap-4">
            {!profileImage ? (
              <>
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
                  onChange={(e) => setProfileImage(e.target.files[0])}
                />
              </>
            ) : (
              <div className="flex items-center gap-2 ">
                <img
                  src={URL.createObjectURL(profileImage)}
                  alt="Profile Preview"
                  className="w-16 h-16 object-cover rounded-full"
                />
                <p className="text-green-600 font-semibold text-sm">
                  {profileImage.name}
                </p>
              </div>
            )}
          </div>

          <div className="flex gap-4 mt-4 sm:mt-0">
            <button
              type="button"
              disabled={isLoading}
              className="text-red-500 font-medium"
              onClick={() => setProfileImage(null)}
            >
              {isLoading ? (
                <ImSpinner9 className="animate-spin text-3xl text-secondary " />
              ) : (
                `${t("profile.delete")}`
              )}
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2 bg-primary text-white rounded-lg font-medium shadow"
            >
              {isLoading ? (
                <ImSpinner9 className="animate-spin text-3xl text-secondary " />
              ) : (
                `${t("profile.save")}`
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
