import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TopText from "../Top Text Cards/TopText";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next"; // Import useTranslation

const cardteacher = [
  {
    id: "item1",
    name: "CV",
    img: "/images/Teacher/CardTeacher_1.svg",
  },
  {
    id: "item2",
    name: "Graduation Certificate",
    img: "/images/Teacher/CardTeachet_3.svg",
  },
  {
    id: "item3",
    name: "Intro Video",
    img: "/images/Teacher/CardTeachet_4.svg",
  },
  {
    id: "item4",
    name: "Additional Documents",
    img: "/images/Teacher/CardTeachet_2.svg",
  },
];

const TeacherUpload = () => {
  const { t } = useTranslation(); // Initialize useTranslation
  const [buttonStates, setButtonStates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const getUserInformation = JSON.parse(localStorage.getItem('USER'));
  console.log(getUserInformation.data.first_name);
  
  // Hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type based on the cardteacher item
      const allowedTypes = {
        CV: "application/pdf",
        "Graduation Certificate": "application/pdf",
        "Additional Documents": "application/pdf",
        "Intro Video": "video/mp4",
      };

      const itemName = cardteacher[index].name;
      const allowedType = allowedTypes[itemName];

      if (file.type !== allowedType) {
        alert(`Invalid file type for ${itemName}. Expected: ${allowedType}`);
        return;
      }

      setButtonStates((prevState) => ({
        ...prevState,
        [index]: { status: "Uploaded", urlfile: file.name, file },
      }));
    }
  };

  // Convert file to base64
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // Send Data
  const onSubmit = async (data) => {
    try {
      setLoading(true);

      // Convert files to base64
      const cvFile = buttonStates[0]?.file;
      const graduationCertificateFile = buttonStates[1]?.file;
      const introVideoFile = buttonStates[2]?.file;
      const additionalDocumentsFile = buttonStates[3]?.file;

      const cvBase64 = cvFile ? await fileToBase64(cvFile) : "";
      const graduationCertificateBase64 = graduationCertificateFile
        ? await fileToBase64(graduationCertificateFile)
        : "";
      const introVideoBase64 = introVideoFile
        ? await fileToBase64(introVideoFile)
        : "";
      const additionalDocumentsBase64 = additionalDocumentsFile
        ? await fileToBase64(additionalDocumentsFile)
        : "";

      // Prepare the data to be sent
      const payload = {
        cv: cvBase64,
        graduation_certificate: graduationCertificateBase64,
        intro_video: introVideoBase64,
        additional_documents: additionalDocumentsBase64,
      };

      console.log("Payload to be sent:", payload);

      // Send data to backend
      // const access_token = localStorage.getItem("access_token");
      // const response = await axios.post(
      //   "http://192.168.1.26:8000/api/v1/teachers/complete-profile-2/",
      //   payload,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${access_token}`,
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );

      // console.log("Upload successful:", response.data);
      // navigate("/teacherPanel");

    } catch (error) {
      console.error("Error uploading files:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative w-full h-screen"
    >
      <img
        src="/images/Teacher/Teacher panel.svg"
        alt="Teacher"
        className="w-full h-[100%] object-cover absolute"
      />
      <div className="pt-28 lg:pt-32">
        <TopText
          name={t("teacherUpload.welcome", { name: `${getUserInformation.data.first_name}` })}
          title={t("teacherUpload.uploadPapers")}
        />

        <div className="relative inset-x-0 grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4 mx-2 sm:mx-10">
          {cardteacher.map((item, index) => (
            <div
              key={item.id}
              className={`border ${
                buttonStates[index]?.status === "Uploaded"
                  ? "border-green-400"
                  : "border-white"
              } h-52 text-center flex flex-col items-center justify-center p-4 rounded-lg `}
            >
              <img
                className="w-16 h-16 object-cover"
                src={item.img}
                alt={item.name}
              />
              <div>
                <p className="sm:w-44 min-h-[70px] text-sm sm:text-base lg:text-lg text-white font-bold py-2">
                  {t(`teacherUpload.${item.name.toLowerCase().replace(/ /g, "")}`)}
                </p>
                <label
                  className={`${
                    buttonStates[index]?.status === "Uploaded"
                      ? "bg-green-500"
                      : "bg-primary"
                  } hover:bg-blue-800 cursor-pointer rounded px-4 py-2 text-md font-semibold text-white transition-all duration-300`}
                >
                  {buttonStates[index]?.status === "Uploaded"
                    ? t("teacherUpload.uploaded") 
                    : t("teacherUpload.upload")}
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => handleFileChange(e, index)}
                    accept={
                      item.name === "Intro Video"
                        ? "video/mp4"
                        : "application/pdf"
                    }
                  />
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative inset-x-0 text-center py-14">
        {error ? (
          <p className="text-red-500 mt-2">{t("teacherUpload.errorUploading")}</p>
        ) : (
          <p className="text-lg sm:text-2xl lg:text-3xl text-white font-bold">
            {t("teacherUpload.waitForApproval")}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="rounded mt-4 bg-primary px-4 py-2 text-md font-semibold text-white hover:bg-blue-800 transition-all duration-300"
        >
          {loading ? (
            <div
              className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-white motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                {t("teacherUpload.loading")}
              </span>
            </div>
          ) : (
            t("teacherUpload.getStarted")
          )}
        </button>
      </div>
    </form>
  );
};

export default TeacherUpload;