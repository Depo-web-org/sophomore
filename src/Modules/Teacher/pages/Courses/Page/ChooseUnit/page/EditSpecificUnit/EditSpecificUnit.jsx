
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import GoBack from "../../../../components/GoBack";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useEditTeacherCourseContentMutation } from "../../../../../../../../Redux/data/postDataApiSlice";
import { ImSpinner9 } from "react-icons/im";
import { IoMdAlert } from "react-icons/io";
import Alert from "../../../../../../../Student/pages/Profile/components/Alerts/Alert";
import { toast } from "react-toastify";

function Button({ classButton, events, title, type }) {
  return (
    <div className="flex items-center justify-end ">
      <button type={type} className={`${classButton}`}>
        {title}
      </button>
    </div>
  );
}

function FreeLessonAlert() {
  const { t } = useTranslation();
  return (
    <div className="bg-blue-50 border-s-4 border-primary p-4 my-4 rounded-md">
      <div className="flex items-center">
        <p className="text-primary">
          <span
            dangerouslySetInnerHTML={{ __html: t("freeLessonAlert.message") }}
          />
        </p>
      </div>
    </div>
  );
}

const EditSpecificUnit = () => {
  const { t ,i18n} = useTranslation();
  const { lessonId } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
console.log(i18n.languages)
  const selectedLesson = state.selectedCourse.contents.filter(
    (lesson) => lesson.id === lessonId
  )[0];

  const [uploadedVideo, setUploadedVideo] = useState();
  const [uploadedPDF, setUploadedPDF] = useState();
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(null); // Store form data for submission after confirmation
  const [showAlert, setShowAlert] = useState(false); 
  const [showAlertError, setShowAlertError] = useState(false); 
  const [editTeacherCourseContent, { isLoading, isError }] =
    useEditTeacherCourseContentMutation();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const handleVideoChange = (event) => {
    const video = event.target.files[0];
    setUploadedVideo(video);
    setValue("video", video);
  };

  const handlePDFChange = (event) => {
    const pdf = event.target.files[0];
    setUploadedPDF(pdf);
    setValue("pdf", pdf);
  };

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

  const submitForm = async (data) => {
    try {
      const formData = new FormData();
      formData.append("id", lessonId);
      formData.append("title", data.title);
      formData.append("description", data.description);
        
      if (!data.video )formData.delete("video", uploadedVideo);
      else{
        formData.append("video", uploadedVideo);
      }
      if ( !data.pdf)formData.delete("pdf", uploadedPDF);
      else {
        formData.append("pdf", uploadedPDF);
      }
      formData.append("price", data.LessonPrice);

    const res=  await editTeacherCourseContent(formData).unwrap();
      console.log("Response from backend:", res);
  
      if (res.code === 1) {
        // Show the error alert
        setShowAlertError(true);
        setMessage(t("unit.errorSubmitting")); 
        setUploadedPDF(null);
  
        setTimeout(() => {
          setShowAlertError(false);
        }, 2000);
      } else {
        setUploadedVideo(null);
        setUploadedPDF(null);
        reset();
toast.success(`${i18n.languages[0]==='ar' ? "تم أضافه التعديل بنجاح":"Lesson updated Successfully"}`);  
        navigate('/teacherPanel');
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

  useEffect(() => {
    setValue("title", selectedLesson.title);
    setValue("description", selectedLesson.description);
    setValue("LessonPrice", selectedLesson.price);
  }, [setValue, selectedLesson]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center ">
        <ImSpinner9 className="animate-spin text-6xl text-secondary" />
      </div>
    );
  }

  return (
    <div>
      {/* Confirmation Modal */}
      <Modal
        isOpen={isModalOpen}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        message={t("freeLessonMessage")}
        i18n={i18n}
      />

      <div className="flex w-full items-start flex-col ">
        <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full">
          <div className="flex flex-wrap justify-between w-full gap-y-4">
            <GoBack />

            <div className="flex gap-x-2">
              <div className="flex items-center">
                <button className="bg-primary hover:bg-secondary text-nowrap py-2 px-2 text-white rounded-md transition-all duration-300">
                  <Link>{t("labels.addUnitTest")}</Link>
                </button>
              </div>

              <Button
                classButton="bg-primary py-2 px-2 text-white rounded-md hover:bg-secondary transition-all duration-300"
                title={t("labels.submit")}
                type="submit"
              />
            </div>
          </div>

          {/* Modal for Free First Lesson */}
          {selectedLesson.price=== "0.00" && <FreeLessonAlert />}

          <div className="flex items-center gap-x-4 flex-wrap lg:flex-nowrap">
            <div className="flex flex-col w-full md:w-1/2 my-4 gap-y-4">
              <label
                htmlFor="title"
                className="text-base font-normal text-[#00000078]"
              >
                {t("labels.title")}
              </label>
              <input
                id="title"
                type="text"
                {...register("title", { required: t("errors.required") })}
                className="bg-[#E8E8E8] min-h-[51px] rounded-lg outline-none ring-0 py-1 px-2 font-medium text-[#000000e7]"
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>

            <div className="flex flex-col w-full md:w-1/2 my-4 gap-y-4">
              <label
                htmlFor="LessonPrice"
                className="block text-sm font-medium text-gray-400"
              >
                {t("labels.lessonPrice")}
              </label>
              <input
                type="number"
                id="LessonPrice"
                min={0}
                defaultValue={selectedLesson.price}
                {...register("LessonPrice", {
                  required: t("application.priceRequiredLesson"),
                })}
                className="bg-[#E8E8E8] min-h-[51px] rounded-lg outline-none ring-0 py-1 px-2 font-medium text-[#000000e7]"
                placeholder={t("application.priceLesson")}
              />
              {errors.LessonPrice && (
                <p className="text-red-500 text-sm">
                  {errors.LessonPrice.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col w-full md:w-1/2 my-4 gap-y-4">
            <label
              htmlFor="description"
              className="text-base font-normal text-[#00000078]"
            >
              {t("labels.description")}
            </label>
            <textarea
              id="description"
              {...register("description", {
                required: t("errors.required"),
              })}
              className="bg-[#E8E8E8] h-36 rounded-lg outline-none ring-0 py-1 px-2 font-medium text-[#000000e7]"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-x-8 gap-y-4">
            <div className="w-full">
              <label htmlFor="Upload-Video" className="text-[#00000078] py-4">
                {t("labels.uploadVideo")}
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
                  />
                  <span className="mt-2">
                    {t("labels.uploadYourVideoHere")}{" "}
                    <span className="text-blue-600">{t("labels.browse")}</span>
                  </span>
                  <span className="text-[#00000078] text-sm">
                    {t("labels.supportsMp4")}
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

            <div className="w-full">
              <label
                htmlFor="Upload-Material"
                className="text-[#00000078] py-4"
              >
                {t("labels.uploadMaterial")}
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
                  />
                  <span className="mt-2">
                    {t("labels.uploadYourMaterialHere")}{" "}
                    <span className="text-blue-600">{t("labels.browse")}</span>
                  </span>
                  <span className="text-[#00000078] text-sm">
                    {t("labels.supportsPdf")}
                  </span>
                </div>
              </div>
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

export default EditSpecificUnit;

// Modal Component
export function Modal({ isOpen, onConfirm, onCancel, message,i18n }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          {i18n.languages[0]==="ar" ? "ملحوظه": "Notice"}
        </h2>
        <p className="mb-6">{message}</p>
        <div className="flex justify-end gap-4">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
            onClick={onCancel}
          >
            
          {i18n.languages[0]==="ar" ? "الغاء": "Cancel"}

          </button>
          <button
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary"
            onClick={onConfirm}
          >
            
          {i18n.languages[0]==="ar" ? "تأكيد": "Confirm"}

          </button>
        </div>
      </div>
    </div>
  );
}