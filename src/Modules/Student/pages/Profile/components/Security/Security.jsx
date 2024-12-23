import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa";
import Alert from "../Alerts/Alert";

export default function Security() {
  const [errorMasege, seterrorMasege] = useState(false);
  const [Loading, setLoading] = useState(false);

  const [showAlert, setShowAlert] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

    // alert
    const handleShowAlert = () => {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    };

 
  const onSubmit = async (data) => {
    if (data.new_password !== data.confirm_password) {
      console.log("Passwords do not match!");
      seterrorMasege(true);
      return;
    }
    seterrorMasege(false);
    setLoading(true)

    const refresh_token = localStorage.getItem("refresh_token");
    console.log("Retrieved Refresh Token:", refresh_token);

    try {
      // إرسال الطلب إلى API
      const response = await axios.post(
        "http://192.168.1.26:7000/api/v1/change-password/consumer/",
        {
          refresh_token: refresh_token,
          old_password: data.old_password,
          new_password: data.new_password,
          confirm_password: data.confirm_password,
        }
      );


      handleShowAlert()

      reset();

      console.log("Password changed successfully!");

    


    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          console.log("The old password is incorrect.");
        } else if (error.response.status === 401) {
          console.error("Unauthorized: Invalid token.");
        } else {
          console.log(
            "An error occurred while changing the password. Please try again."
          );
        }
      } else {
        console.log("An unknown error occurred. Please check your connection.");
      }
    }finally{
      setLoading(false)
    }
  };





  return (
    <>
    
    <Alert Name="Password changed successfully!" 
    title={"Your password has been updated successfully."} 
    showAlert={showAlert} setShowAlert={setShowAlert}/>

     
      {/* first section */}
      <div className="w-full h-72 ">
        <div className="relative bg-gradient-to-r from-[#F15C54] from-10% to-[#536CB3] to-90% w-full h-48 rounded-tl-[100px] rounded-tr-lg">
          {/* img */}
          <img
            className="border-2 border-white absolute top-36 left-24 w-24 h-24 sm:w-32 sm:h-32 rounded-full"
            src="https://s3-alpha-sig.figma.com/img/56b7/1855/5f70fa6b93cdb06490b027b82b3d0038?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d~bHqR3Tnv7B87ZkS7dnOnou3OMgxYRho3-0Bqmcf-zAhiGMsCqsiaTptyesTYF88SfmX9gDzNRtv1fpPKRuUivv-RnoebIHkc0q4oMpOxHFKWE8RK7gJ~N-t-0YMK4oGuxV7zMQoCbJzcuSFo~H2Pz5rF6suHciwMVFb3w64UxO~nHxVBdaScrD2payUGDss3VR~lPMsn1QwLb9l2-RMEO5ESy~Ax5qv~yWXJWM7YyXzZpMSFjJb~N6pbDZ2njGFj1wFD-eXjelqC4ITfIPzjT5N8EpwtNX0BW6IkaZQvIOdTA~7gEOY8hyUnj-7AXCEsx-upowkIE9zc6-FSoANA__"
            alt="profile"
          />
        </div>

        {/* section Name */}
        <div className="relative min-h-36 sm:px-5 w-full sm:w-[60%] ms-auto sm:ms-auto ">
          <div className="absolute bottom-1 sm:top-2">
            <p className="font-bold text-white text-md">Sara Johnson</p>
            <p className="text-gray-500 text-sm">
              Update your photos and personal Details
            </p>
          </div>
        </div>
      </div>

      {/* form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[calc(100%-10%)] lg:w-[calc(100%-40%)] m-auto min-h-96 mt-16 sm:mt-10"
      >
        {/*first email */}

        <span className="text-sm font-medium text-white  pb-2">
          Enter your current password
        </span>

        <input
          type="Password"
          id="old_password"
          placeholder=" Old password"
          className="py-2 mt-1 w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          {...register("old_password", { required: "old_password required" })}
        />
        {errors.old_password && (
          <p className="text-red-500 text-sm">{errors.old_password.message}</p>
        )}

        <hr className="my-5" />

        <div>
          <div className="pb-5">
            <label
              htmlFor="UserEmail"
              className="block text-sm font-medium text-white pb-2"
            >
              Enter New Password
            </label>

            <input
              type="Password"
              id="new_password"
              placeholder=" New password"
              className="py-2 mt-1 w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              {...register("new_password", {
                required: "new_password required",
              })}
            />
            {errors.new_password && (
              <p className="text-red-500 text-sm">
                {errors.new_password.message}
              </p>
            )}
          </div>

          <hr className="" />

          <div className="py-5">
            <label
              htmlFor="UserEmail"
              className="block text-sm font-medium text-white pb-2"
            >
              Retype new Password
            </label>

            <input
              type="Password"
              id="confirm_password"
              placeholder=" Confirm password"
              className="py-2 mt-1 w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              {...register("confirm_password", {
                required: "confirm_password required",
              })}
            />
            {errors.confirm_password && (
              <p className="text-red-500 text-sm">
                {errors.confirm_password.message}
              </p>
            )}
          </div>

          <hr className="" />

          {errorMasege && (
            <p className="text-red-500 text-sm">Password is filde</p>
          )}



          <button
            type="submit"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className="rounded bg-primary mt-3 px-2 py-2 text-md font-semibold text-white hover:bg-blue-800 transition-all duration-300"
          >
           {Loading ?                                       
           
           <div
           className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-white motion-reduce:animate-[spin_1.5s_linear_infinite]"
           role="status">
           <span
            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
           >Loading...</span>
           
           </div>
           :  "Change Password  " }  
          </button>





        </div>
        {/* end */}
      </form>
    </>
  );
}
