import { Link, useNavigate, useParams } from "react-router-dom";
import GoBack from "../../../../components/GoBack";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setUnit } from "../../../../../../../../Redux/TeacherAddCourse/TeacherAddCourse";
import { useTranslation } from "react-i18next";
import { useAddTeacherCourseContentMutation } from "../../../../../../../../Redux/data/postDataApiSlice";
import { ImSpinner9 } from "react-icons/im";
import { Modal } from "../EditSpecificUnit/EditSpecificUnit";
import Alert from "../../../../../../../Student/pages/Profile/components/Alerts/Alert";
import { newFunction } from "../../../../../../../../Helpers/Alert";

function Button({ classButton, events, title, type }) {
  return (
    <div className="flex items-center justify-end ">
      <button type={type} className={`${classButton}`}>
        {title}
      </button>
    </div>
  );
}

const Unit = () => {
  const navigate = useNavigate();
  const { t,i18n } = useTranslation();
  const  {UploadCourse}  = useParams();
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [uploadedPDF, setUploadedPDF] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(null); // Store form data for submission after confirmation

const [addTeacherCourseContent ,{isLoading:loading, isError:error}]= useAddTeacherCourseContentMutation();
  // React Hook Form
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  // Handle video upload
  const handleVideoChange = (event) => {
    const video = event.target.files[0];
    setUploadedVideo(video);
    setValue("video", video);
  };

  // Handle PDF upload
  const handlePDFChange = (event) => {
    const pdf = event.target.files[0];
    setUploadedPDF(pdf);
    setValue("pdf", pdf);
  };
 const [showAlert, setShowAlert] = useState(false); 
  const [showAlertError, setShowAlertError] = useState(false); 
  // const handleAlert = newFunction(setShowAlert, setShowAlertError);


  const handleFormSubmit = async (data) => {
    if (parseFloat(data.LessonPrice) === 0) {
      // Open modal for confirmation
      setIsModalOpen(true);
      setFormData(data); // Store form data for later submission
      return;
    }

    // If price is not 0, submit the form directly
    submitForm(data);
  };


  // const submitForm = async (data) => {
  //     if (!data.video || !data.pdf) {
  //     setMessage(t("unit.bothFilesRequired"));
  //     return;
  //   }
  
  //   try {
  //     // Create a FormData object
  //     const formData = new FormData();
  //     formData.append("course", UploadCourse); // Ensure UploadCourse is defined and has the right value
  //     formData.append("title", data.title);
  //     formData.append("description", data.description);
  //     formData.append("price", data.LessonPrice);
  //     formData.append("video", uploadedVideo); // Add video file
  //     formData.append("pdf", uploadedPDF); // Add PDF file
  
  //     console.log("FormData entries:");
  //     for (let [key, value] of formData.entries()) {
  //       console.log(`${key}:`, value);
  //     }
  
     
  //   await addTeacherCourseContent(formData).unwrap().then((res)=>{
  //       console.log("Response from backend:", res);
  //       if(res.code===1) null
  //       setUploadedVideo(null);
  //       setUploadedPDF(null);
  //       reset();
  //     })
  //     .then(()=>{
  //       setShowAlert(true);
  //     }) .then(()=> {
  //       setTimeout(() => {
  //         naviagte('/teacherPanel')
  //       }, 2000);
  //     })
     
  
  //     // // Clear form and show success message
  //     // setMessage(t("unit.unitSaved"));
     
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     setMessage(t("unit.errorSubmitting")); // Handle error message
  //   }
  // };







  // const submitForm = async (data) => {
  //   if (!data.video || !data.pdf) {
  //     setMessage(t("unit.bothFilesRequired"));
  //     return;
  //   }
  
  //   try {
  //     // Create a FormData object
  //     const formData = new FormData();
  //     formData.append("course", UploadCourse); // Ensure UploadCourse is defined and has the right value
  //     formData.append("title", data.title);
  //     formData.append("description", data.description);
  //     formData.append("price", data.LessonPrice);
  //     formData.append("video", uploadedVideo); // Add video file
  //     formData.append("pdf", uploadedPDF); // Add PDF file
  
  //     console.log("FormData entries:");
  //     for (let [key, value] of formData.entries()) {
  //       console.log(`${key}:`, value);
  //     }
  
  //     // Handle the response
  //     const res = await addTeacherCourseContent(formData).unwrap();
  
  //     console.log("Response from backend:", res);
  
  //     if (res.code === 1) {
  //       setUploadedVideo(null);
  //       setUploadedPDF(null);
  //     } else {
  //       setUploadedVideo(null);
  //       setUploadedPDF(null);
  //       reset();
  //       setShowAlert(true);
  //     }
  
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //   }
  // };
  











  const submitForm = async (data) => {
    if (!data.video || !data.pdf) {
      setMessage(t("unit.bothFilesRequired"));
      return;
    }
  
    try {
      // Create a FormData object
      const formData = new FormData();
      formData.append("course", UploadCourse); // Ensure UploadCourse is defined and has the right value
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("price", data.LessonPrice);
      formData.append("video", uploadedVideo); // Add video file
      formData.append("pdf", uploadedPDF); // Add PDF file
  
      console.log("FormData entries:");
      for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }
  
      // Handle the response
      const res = await addTeacherCourseContent(formData).unwrap();
  
      console.log("Response from backend:", res);
  
      if (res.code === 1) {
        // Show the error alert
        setShowAlertError(true);
        setMessage(t("unit.errorSubmitting")); // Request failed, show error message
        setUploadedVideo(null);
        setUploadedPDF(null);
  
        // Hide the error alert after 2000ms
        setTimeout(() => {
          setShowAlertError(false);
        }, 2000);
      } else {
        setUploadedVideo(null);
        setUploadedPDF(null);
        reset();
        setShowAlert(true);
  
        setTimeout(() => {
          // navigate('/teacherPanel');
        setShowAlert(false);

        }, 2000);
      }
  
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage(t("unit.errorSubmitting")); // Handle error message
    }
  };
  
  const handleConfirm = () => {
    setIsModalOpen(false); // Close the modal
    if (formData) {
      submitForm(formData); // Submit the form with the stored data
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false); // Close the modal
    setFormData(null); // Clear the stored form data
  };
  
  if(loading) {
    return(
      <div className="min-h-screen flex justify-center items-center">
                    <ImSpinner9 className="animate-spin text-6xl text-secondary" />
                 
      </div>
    )
  
  }
  
  return (
    <div>
         <Modal
        isOpen={isModalOpen}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        message={t("freeLessonMessage")}
        i18n={i18n}

      />
     {showAlert && (
        <Alert
        Name={` ${i18n.languages[0]==='ar' ? "تم أضافه الدرس بنجاح":"Lesson added Successfully"}`}
          color={"text-green-600"}
          showAlert={showAlert}
          setShowAlert={setShowAlert}
        />
      )}

      {showAlertError && (
        <Alert
          Name={` ${i18n.languages[0]==='ar' ? "لم يتم أضافه الدرس ":"Lesson failed to added"}`}
          color={"text-red-600"}
          showAlert={showAlertError}
          setShowAlert={setShowAlertError}
        />
      )}
      <div className="flex w-full items-start flex-col   ">
        <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full">
          <div className="flex flex-wrap justify-between w-full gap-y-4">
            <GoBack />
            <div className="flex gap-x-2">
              <div className="flex items-center">
                <button className="bg-primary hover:bg-secondary text-nowrap py-2 px-2 text-white rounded-md transition-all duration-300">
                  <Link 
                  // to={`/teacherpanel/courses/chooseunit/${unit}/test`}
                  to={''}
                  >
                    {t("unit.addUnitTest")}
                  </Link>
                </button>
              </div>

              <button
                type="submit"
                className="bg-primary py-2 px-2 text-white rounded-md hover:bg-secondary transition-all duration-300"
              >
                {t("unit.submit")}
              </button>
            </div>
          </div>

      <div className="flex items-center gap-x-4 flex-col lg:flex-row">
            {/* حقل العنوان */}
            <div className="flex flex-col w-full md:w-1/2 my-4 gap-y-4">
            <label
              htmlFor="title"
              className="text-base font-normal text-[#00000078]"
            >
              {t("unit.title")}
            </label>
            <input
              id="title"
              type="text"
              {...register("title", { required: t("unit.requiredTitle") })}
              className="bg-[#E8E8E8] min-h-[51px] rounded-lg outline-none ring-0 py-1 px-2"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>

{/* price */}
          <div className="flex flex-col w-full md:w-1/2 my-4 gap-y-4">
              <label htmlFor="LessonPrice" className="block text-sm font-medium text-gray-400">
              {t("labels.lessonPrice")}

              </label>
              <input
                type="number"
                id="LessonPrice"
                min={0}
                {...register("LessonPrice", {
                  required: t("application.priceRequiredLesson"),
                })}
                className="bg-[#E8E8E8] min-h-[51px] rounded-lg outline-none ring-0 py-1 px-2 font-medium text-[#000000e7]"
                placeholder={t("application.priceLesson")}
              />
              {errors.orderNotes && <p className="text-red-500 text-sm">{errors.orderNotes.message}</p>}
            </div>


      </div>






          {/* حقل الوصف */}
          <div className="flex flex-col w-full md:w-1/2 my-4 gap-y-4">
            <label
              htmlFor="description"
              className="text-base font-normal text-[#00000078]"
            >
              {t("unit.description")}
            </label>
            <textarea
              id="description"
              {...register("description", {
                required: t("unit.requiredDescription"),
              })}
              className="bg-[#E8E8E8] h-36 rounded-lg outline-none ring-0 py-1 px-2"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description.message}</p>
            )}
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-x-8 gap-y-4">
            <div className="w-full">
              <label htmlFor="Upload-Video" className="text-[#00000078] py-4">
                {t("unit.uploadVideo")}
              </label>
              <div className="w-full h-72 border-dashed border-gray-300 border rounded-md flex items-center justify-center mt-4">
                <div className="flex justify-center w-full flex-col items-center pb-10">
                  <img
                    src="/images/Video/video.svg"
                    alt=""
                    className="w-auto absolute cursor-pointer"
                  />
                  <input
                    id="Upload-Video"
                    type="file"
                    onChange={handleVideoChange}
                    accept="video/*"
                    className="cursor-pointer opacity-0 z-20 py-7 mt-10"
                    required
                  />
                  <span className="mt-2">
                    {t("unit.dropVideo")}{" "}
                    <span className="text-blue-600">{t("unit.browse")}</span>
                  </span>
                  <span className="text-[#00000078] text-sm">
                    {t("unit.supportsMP4")}
                  </span>
                </div>
              </div>

            
              {uploadedVideo && (
                <div className="w-full h-32 mt-4 flex items-start flex-col">
                  <div className="bg-[#4B5563] relative w-28 h-24 text-white flex items-center justify-center rounded-2xl">
                    <FaPlay className="text-4xl" />
                    <div
                      className="bg-red-600 rounded-full absolute -top-2 -right-2 cursor-pointer"
                      onClick={() => {
                        setUploadedVideo(null);
                        document.getElementById("Upload-Video").value = "";
                        setValue("video", null);
                      }}
                    >
                      <RiCloseFill className="text-2xl" />
                    </div>
                  </div>
                  <span className="font-bold text-sm mt-2">
                    {uploadedVideo.name}
                  </span>
                </div>
              )}
            </div>

            {/* تحميل الـ PDF */}
            <div className="w-full">
              <label
                htmlFor="Upload-Material"
                className="text-[#00000078] py-4"
              >
                {t("unit.uploadMaterial")}
              </label>
              <div className="w-full h-72 border-dashed border-gray-300 border rounded-md flex items-center justify-center mt-4">
                <div className="flex justify-center w-full flex-col items-center pb-10">
                  <img
                    src="/images/Video/pdfIcon.svg"
                    alt=""
                    className="w-auto absolute cursor-pointer"
                  />
                  <input
                    id="Upload-Material"
                    type="file"
                    onChange={handlePDFChange}
                    accept="application/pdf"
                    className="cursor-pointer opacity-0 z-20 py-7 mt-10"
                    required
                  />
                  <span className="mt-2">
                    {t("unit.dropMaterial")}{" "}
                    <span className="text-blue-600">{t("unit.browse")}</span>
                  </span>
                  <span className="text-[#00000078] text-sm">
                    {t("unit.supportsPDF")}
                  </span>
                </div>
              </div>

              {/* عرض الـ PDF المحمل */}
              {uploadedPDF && (
                <div className="w-full h-32 mt-4 flex items-start flex-col">
                  <div className="relative w-28 h-24 text-white flex items-center justify-center rounded-2xl">
                    <img
                      src="/images/Video/pdfIcon.svg"
                      alt=""
                      className="w-auto absolute cursor-pointer"
                    />
                    <div
                      className="bg-red-600 rounded-full absolute -top-2 -right-2 cursor-pointer"
                      onClick={() => {
                        setUploadedPDF(null);
                        document.getElementById("Upload-Material").value = "";
                        setValue("pdf", null);
                      }}
                    >
                      <RiCloseFill className="text-2xl" />
                    </div>
                  </div>
                  <span className="font-bold text-sm mt-2">
                    {uploadedPDF.name}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* عرض الرسالة */}
          {message && (
            <p
              className={`mt-4 ${
                message.includes("Error") ? "text-red-500" : "text-green-500"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Unit;