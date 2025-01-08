import { Link, useParams } from "react-router-dom";
import GoBack from "../../../../components/GoBack";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { useForm } from "react-hook-form";

function Button({ classButton, events, title, type }) {
  return (
    <div className="flex items-center justify-end ">
      <button type={type} className={`${classButton}`}>
        {title}
      </button>
    </div>
  );
}
const fakeUnitData = {
  title: "Introduction to Unit One",
  description: "This unit covers the basics of Mathematics .",
  video: {
    name: "UnitVideo.mp4",
    size: 3250534,
    type: "video/mp4",
    link:'https://depowebeg.com/assets/videos/DELIVENDOR.mp4'
    },
  pdf:{
    name: "UnitMartial.pdf",
    size: 44902,
    type: "application/pdf",
    link:'https://www.tutorialspoint.com/javascript/javascript_tutorial.pdf'
    }
};
const EditSpecificUnit = () => {
  const { unit } = useParams();
  const [uploadedVideo, setUploadedVideo] = useState(fakeUnitData.video);
  const [uploadedPDF, setUploadedPDF] = useState(fakeUnitData.pdf);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  // React Hook Form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Handle video upload
  const handleVideoChange = (event) => {
    const video = event.target.files[0];
    setUploadedVideo(video);
    setValue("video", video); // Manually set the video file in the form state
  };
  // Handle PDF upload
  const handlePDFChange = (event) => {
    const pdf = event.target.files[0];
    setUploadedPDF(pdf);
    setValue("pdf", pdf); // Manually set the PDF file in the form state
  };

  // Handle form submission
  const handleFormSubmit = async (data) => {
    if (!data.video || !data.pdf) {
      setMessage("Both video and PDF files are required!");
      return;
    }
    const formData = new FormData();
    formData.append("video", data.video);
    formData.append("pdf", data.pdf);
    formData.append("title", data.title);
    formData.append("description", data.description);

    setUploading(true);
    setMessage("Uploading...");

    // Example: Send formData to the backend
    // try {
    //   const response = await fetch("/api/upload", {
    //     method: "POST",
    //     body: formData,
    //   });

    //   if (!response.ok) {
    //     throw new Error("Failed to upload files");
    //   }

    //   const result = await response.json();
    //   setMessage("Upload successful!");
    // } catch (error) {
    //   setMessage(`Error: ${error.message}`);
    // } finally {
    //   setUploading(false);
    // }
  };

  useEffect(() => {
    // Pre-fill form with fake data
    setValue("title", fakeUnitData.title);
    setValue("description", fakeUnitData.description);
    setValue("video", fakeUnitData.video);
    setValue("pdf", fakeUnitData.pdf);
  }, [setValue]);
  return (
    <div>
      {/* Head */}

      {/* Body */}
      <div className="flex w-full items-start flex-col">
        <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full">
          <div className="flex flex-wrap justify-between w-full gap-y-4">
            <GoBack title={`${"Edit " + unit}`} />
            <div className="flex gap-x-2">
              <div className="flex items-center">
                <button className="bg-primary hover:bg-secondary text-nowrap py-2 px-2 text-white rounded-md transition-all duration-300">
                  <Link to={`/teacherpanel/courses/chooseunit/${unit}/test`}>
                    Add Unit Test
                  </Link>
                </button>
              </div>

              <Button
                classButton="bg-primary py-2 px-2 text-white rounded-md hover:bg-secondary transition-all duration-300"
                title="Submit"
                type="submit"
              />
            </div>
          </div>

          {/* Title Input */}
          <div className="flex flex-col w-full md:w-1/2 my-4 gap-y-4">
            <label
              htmlFor="title"
              className="text-base font-normal text-[#00000078]"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              {...register("title", { required: "Title is required" })}
              className="bg-[#E8E8E8] min-h-[51px] rounded-lg outline-none ring-0 py-1 px-2 font-medium text-[#000000e7]"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>

          {/* Description Input */}
          <div className="flex flex-col w-full md:w-1/2 my-4 gap-y-4">
            <label
              htmlFor="description"
              className="text-base font-normal text-[#00000078]"
            >
              Description
            </label>
            <textarea
              id="description"
              {...register("description", {
                required: "Description is required",
              })}
              className="bg-[#E8E8E8] h-36 rounded-lg outline-none ring-0 py-1 px-2 font-medium text-[#000000e7]"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description.message}</p>
            )}
          </div>

          {/* Upload Video */}
          <div className="flex flex-col lg:flex-row justify-between gap-x-8 gap-y-4">
            <div className="w-full">
              <label htmlFor="Upload-Video" className="text-[#00000078] py-4">
                Upload Video :
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
                   Upload Your Video Here or{" "}
                    <span className="text-blue-600">Browse</span>
                  </span>
                  <span className="text-[#00000078] text-sm">Supports MP4</span>
                </div>
              </div>

              {/* Display uploaded video */}
              {uploadedVideo && (
                <div className="w-full h-32 mt-4 flex items-start flex-col">
                  <div className="bg-[#4B5563] relative w-28 h-24 text-white flex items-center justify-center rounded-2xl">
                    <FaPlay className="text-4xl" />
                    <div
                      className="bg-red-600 rounded-full absolute -top-2 -right-2 cursor-pointer"
                      onClick={() => {
                        setUploadedVideo(null);
                        document.getElementById("Upload-Video").value = "";
                        setValue("video", null); // Clear the video value in React Hook Form
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

            {/* Upload PDF */}
            <div className="w-full">
              <label
                htmlFor="Upload-Material"
                className="text-[#00000078] py-4"
              >
                Upload Material :
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
                  Upload Your Material Here or
                    <span className="text-blue-600">Browse</span>
                  </span>
                  <span className="text-[#00000078] text-sm">Supports PDF</span>
                </div>
              </div>

              {/* Display uploaded PDF */}
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
                        setValue("pdf", null); // Clear the PDF value in React Hook Form
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

          {/* Display message */}
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