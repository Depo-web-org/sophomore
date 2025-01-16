import React from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { useTranslation } from "react-i18next"; // Import useTranslation
import { useForm } from "react-hook-form";
import { IoCamera } from "react-icons/io5";

const Profile = () => {
  const { t, i18n } = useTranslation(); // Initialize useTranslation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // Initialize useForm

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log("Name changed to:", data.name);
    // Here you can add logic to update the name in your backend or state
  };

  return (
    <div className="w-full min-h-40" dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <div className="relative bg-gradient-to-r from-[#F15C54] from-10% to-[#536CB3] to-90% w-full h-48 rounded-tl-[100px] rounded-tr-lg">
        {/* img */}
        <img
          className={`border-2 border-white absolute top-36 ${
            i18n.language === "ar" ? "right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-24" : "left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-24"
          } w-24 h-24 sm:w-32 sm:h-32 rounded-full`}
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile"
        />
      </div>

      {/* section Name */}
      <div className="relative mb-10 sm:px-4 py-4 w-full mt-10 lg:mt-0 lg:w-[60%] ms-auto px-4  ">
        <div className="flex flex-col sm:mt-10 lg:mt-0 lg:flex-row lg:items-center sm:justify-between gap-4 ">
          <div>
            <p className="font-bold text-center lg:text-start text-md">
            Sara Gamal 
            </p>
            <p className="text-gray-400 text-center lg:text-start text-sm">
              {t("teacherProfile.updateDetails")} {/* Translated text */}
            </p>
          </div>
          {/* <button
            type="button"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className="rounded bg-primary px-4 py-2 text-sm font-semibold text-white transition-all duration-300"
          >
            {t("teacherProfile.save")} 
          </button> */}
        </div>

      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 ">
            <div className="flex justify-center flex-col lg:flex-row gap-y-4 w-4/5 mx-auto lg:mx-0 lg:w-full flex-wrap  ">
              {/* Name Input Field */}
              <div className="lg:ms-24  flex flex-col sm:flex-row items-center gap-4  ">
                <label
                  htmlFor="name"
                  className="w-full text-gray-500 font-medium  relative rounded-md flex flex-col lg:flex-row  gap-x-5 items-center "
                >
                 {t("teacherProfile.name")}
                  <input
                    type="text"
                    id="name"
                    {...register("name", {
                      required: t("teacherProfile.nameRequired"), // Translated validation message
                    })}
                    className="w-full lg:w-3/5 p-2 bg-gray-200 text-sm rounded-lg border-none font-medium outline-0 outline-none py-3 mt-2"
                    placeholder={t("teacherProfile.namePlaceholder")} // Translated placeholder
                  />
                </label>
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
                  {/* Save Button */}
                  <div className="mx-5 lg:pe-20    ">
                        {/* form */}
                        {/* <div className="flex flex-col sm:flex-row items-center mb-4 lg:my-5 lg:w-[calc(100%-30%)] ms-auto">
                          
                  
                          <label
                            htmlFor="Username"
                           className="w-full font-semibold text-lg text-gray-600 rounded-md flex flex-wrap gap-y-4 justify-between items-center    "
                          >
                            User Name
                            <input
                              type="text"
                              id="Username"
                              className=" w-full lg:w-1/3 p-2 bg-[#e2e4e6] text-base placeholder:text-sm  rounded-lg border-none   text-gray-500  font-semibold focus:outline-gray-400 focus:outline focus:ring-0"
                              placeholder="User Name"
                            />
                  
                          
                          </label>
                        </div> */}
                  
                        {/* Update Image section */}
                  
                        <div className="  w-full ms-auto flex  flex-col  ">
                          <div className=" text-center lg:text-right py-1 cursor-pointer order-2 lg:order-1 ">
                            {/* <pre className=" text-gray-400 font-light hover:text-black duration-700 ">
                          
                              Delete | Update
                            </pre> */}
                          </div>
                  
                          <div className="order-1">
                            <div className="flex justify-center lg:justify-start items-center py-1 ">
                              <p className=" font-bold  px-5">Photo</p>
                              <span className="bg-slate-200 p-3 rounded-full text-primary text-lg lg:text-3xl cursor-pointer">
                              <IoCamera />
                              </span>
                            </div>
                          </div>
                        </div>
                  
                      </div>
                      <div className="w-full    flex justify-center ">
                      <button
              type="submit"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              className="rounded bg-primary px-4 py-2 text-sm font-semibold text-white transition-all duration-300 w-full lg:w-1/5 lg:me-40 "
            >
              {t("teacherProfile.save")} 
            </button>
                      </div>
            
            </div>

        
          </div>
        </form>
    </div>
  );
};

export default Profile;